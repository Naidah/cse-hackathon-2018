from User import User
from Event import Event

class CalendarSystem:
	def __init__(self):
		self._users = []
		self._events = []

	def get_user(self, username):
		for user in self._users:
			if username == user._username:
				return user

	def add_user(self, usernamee, password):
		user = User(username, password)
		self.users.append(user)

	def delete_user(self, user)
		pass

	def create_event(self):
		pass

	def delete_event(self, event):
		pass

	def login(self, username, password):
		for user in self._users:
			if username=


