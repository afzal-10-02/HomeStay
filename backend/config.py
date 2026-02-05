

class localConfig:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI= "sqlite:///homestay.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "kndfo49rjoi3fnci4rnjfosa3940j3nf03984"
    
    MAIL_SERVER = "smtp-relay.brevo.com"
    MAIL_PORT =  587
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
    MAIL_USERNAME = ""
    MAIL_PASSWORD = ""
    MAIL_DEFAULT_SENDER = "afzal.22it1602@gmail.com" 

    OWNER_EMAIL = "afzal.22it1602@gmail.com"



# class productionConfig:
#     Debug = False
#     SQLALCHEMY_DATABASE_URI= "sqlite:///parkingDb.db"
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     JWT_SECRET_KEY = 'kndfo49rjoi3fnci4rn'
