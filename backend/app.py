from flask import Flask
from config import localConfig
from flask_jwt_extended import JWTManager
from models.database import db
from models.model import *
from security import jwt
from werkzeug.security import generate_password_hash
from flask_cors import CORS



app = None


def CreateApp():
    app = Flask(__name__)
    app.config.from_object(localConfig)
    db.init_app(app)
    jwt.init_app(app)
    CORS(app, origins="*")
    app.app_context().push()

    return app

app = CreateApp()

# with app.app_context(): 
#     db.create_all()
#     admin = User(email = "admin@gmail.com", password = generate_password_hash("admin123"), fullName = "Admin", role= "admin")
#     db.session.add(admin)
#     db.session.commit()
#     print("Database Created Successfully.")



from APIs.auth import *
from APIs.user import *
from APIs.email import *

if __name__ == "__main__":
    app.run()