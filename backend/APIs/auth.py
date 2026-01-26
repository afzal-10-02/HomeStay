from flask import current_app as app, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from models.model import User
from models.database import db
from email_validator import validate_email, EmailNotValidError



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
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User Created Successfully."}), 201

    

#verified.
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)


    user =  User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.email)
        
        return jsonify({"message": "Login Successful", "access_token" : access_token, "user_name": user.fullName}), 200
    
    return jsonify({"message": "Invalid Credentials"}), 401