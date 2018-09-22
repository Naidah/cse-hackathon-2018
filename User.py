class User(UserMixin, ABC):
    def __init__(self, username, password):
        self._username = username
        self._password = password

    @property
    def username(self):
        return self._username

    @property
    def password(self)
        return self._password

    def get_id(self):
        return self._username
