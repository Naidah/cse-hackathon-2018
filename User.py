from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, username, password, society):
        self._username = username
        self._password = password
        self._society = society

    @property
    def username(self):
        return self._username

    @property
    def password(self):
        return self._password

    @property
    def society(self):
        return self._society

    def get_id(self):
        return self._username
