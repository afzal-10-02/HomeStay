class localConfig:
    DEBUG = True
    SQLALCHEMY_DATABASE_URI= "sqlite:///homestay.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'kndfo49rjoi3fnci4rnjfosa3940j3nf03984'
    
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT =  465
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    MAIL_USERNAME = "mdaj778866@gmail.com"
    MAIL_PASSWORD = "ucyv rknq fioo cxzz"
    MAIL_DEFAULT_SENDER = "mdaj778866@gmail.com"
    OWNER_EMAIL = "mdaj778866@gmail.com"
 




# class productionConfig:
#     Debug = False
#     SQLALCHEMY_DATABASE_URI= "sqlite:///parkingDb.db"
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     JWT_SECRET_KEY = 'kndfo49rjoi3fnci4rn'
 