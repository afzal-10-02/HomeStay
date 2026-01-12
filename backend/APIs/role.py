from flask_jwt_extended import jwt_required, current_user
from flask import jsonify
from functools import wraps

def role_required(role):
    def wrapper(fn):
        @wraps(fn)
        @jwt_required()
        def decorated(*args, **kwargs):
            if current_user.role != role:
                return jsonify({"message": "Access forbidden: Insufficient permissions"}), 403
            return fn(*args, **kwargs)
        return decorated
    return wrapper