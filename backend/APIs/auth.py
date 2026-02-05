from datetime import timedelta
from flask import current_app as app, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended.utils import decode_token
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from models.model import User
from models.database import db
from email_validator import validate_email, EmailNotValidError
import os
from dotenv import load_dotenv
from flask_mail import Mail, Message

mail = Mail(app)

load_dotenv()

frontend_url = os.getenv("FRONTEND_URL")



#Verified.
@app.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    fullName = request.json.get("fullName", None)

    try:
        validate_email(email)
    except EmailNotValidError:
        return jsonify({"message": "Please Enter a Valid Email."}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already Exits. Please Login."}), 409

    
    password_hash = generate_password_hash(password)

    new_user = User(email=email, password=password_hash, fullName=fullName)
    
    verification_token = create_access_token(
        identity=email, 
        expires_delta=timedelta(hours=1),
        additional_claims={"purpose": "email_verification"}
    )

    confirmation_link = f"{frontend_url}/verify-email?token={verification_token}"

    # Here, you would send the confirmation_link via email to the user.

    try:
        msg = Message(
            subject="Verify your email",
            recipients=[email],
            html=f"<p>Hi {fullName},</p><p>Verify here: <a href='{confirmation_link}'>Verify Email</a></p>"
        )
        mail.send(msg)

    except Exception as e:
        return jsonify({"message": "Error sending email.", "error": str(e)}), 500


    db.session.add(new_user)
    db.session.commit() 

    return jsonify({"message": "User Created Successfully, Verification Email Sent. Verify to Login."}), 201 



#confirmation of email
@app.route("/verify-email", methods=["GET"])
def verify_email():

    verification_token = request.args.get("token", None)

    if not verification_token:
        return jsonify({"message": "Token is missing"}), 400


    try:
        # 1. Decode the JWT token
        decoded_data = decode_token(verification_token)
        
        # 2. Check if this is actually a verification token
        if decoded_data.get("purpose") != "email_verification":
             return jsonify({"message": "Invalid token type"}), 400
             
        email = decoded_data["sub"] # 'sub' holds the identity (email)

    except ExpiredSignatureError:
        return jsonify({"message": "Token has expired."}), 400
    except InvalidTokenError:
        return jsonify({"message": "Invalid token."}), 400
    

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404

    if user.isVerified:
        return jsonify({"message": "Email verified successfully"}), 200
    

    user.isVerified = True
    db.session.add(user)
    db.session.commit()
    

    return jsonify({"message": "Email verified successfully"}), 200


#verified.
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)


    user =  User.query.filter_by(email=email).first()


    if user and check_password_hash(user.password, password):

        if not user.isVerified:
            # 1. Generate a new verification token
            verification_token = create_access_token(
                identity=email, 
                expires_delta=timedelta(hours=1),
                additional_claims={"purpose": "email_verification"}
            )
            
            # 2. Create the link (pointing to Frontend)
            confirm_url = f'{frontend_url}/verify-email?token={verification_token}'

            # 3. Resend the Email
            try:
                msg = Message(
                    subject="Resend: Verify your email",
                    recipients=[email],
                    html=f"<p>Hi {user.fullName},</p><p>You tried to login, but your account is not verified. <br>Please verify here: <a href='{confirm_url}'>Verify Email</a></p>"
                )
                mail.send(msg)
                
                return jsonify({
                    "message": "Email not verified. A new verification link has been sent to your inbox."
                }), 401
                
            except Exception as e:
                return jsonify({
                    "message": "Email not verified, but failed to resend link.", 
                    "error": str(e)
                }), 500



        
        access_token = create_access_token(identity=user.email)
        
        return jsonify({"message": "Login Successful", "access_token" : access_token, "user_name": user.fullName}), 200
    
    return jsonify({"message": "Invalid Credentials"}), 401


