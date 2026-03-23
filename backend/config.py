import os
from dotenv import load_dotenv

class localConfig:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI= "sqlite:///homestay.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
    
    MAIL_SERVER = "smtp-relay.brevo.com"
    MAIL_PORT =  587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = os.environ.get("MAIL_DEFAULT_SENDER")

    OWNER_EMAIL = os.environ.get("OWNER_EMAIL")



class productionConfig:
    DEBUG = False
    SQLALCHEMY_DATABASE_URI= "sqlite:///homestay.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
    
    MAIL_SERVER = "smtp-relay.brevo.com"
    MAIL_PORT =  587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = os.environ.get("MAIL_DEFAULT_SENDER")

    OWNER_EMAIL = os.environ.get("OWNER_EMAIL")
