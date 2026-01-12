from flask import current_app as app, jsonify
from flask_jwt_extended import current_user
from APIs.role import role_required


@app.route("/dashboard", methods=["GET", "POST"])
@role_required("user")
def dashboard():

    return {"message" : f"Welcome to User Dashboard, {current_user.fullName}!"}, 200