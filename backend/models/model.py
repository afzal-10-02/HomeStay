from .database import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    fullName = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(512), nullable=False)
    role = db.Column(db.String(20), nullable=False, default='user')  # 'user' or 'admin'
    isVerified = db.Column(db.Boolean, default=False)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())




