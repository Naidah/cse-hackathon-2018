from User import User
from Event import Event
from flask_login import login_user

class CalendarSystem:
	def __init__(self):
		self._users = []
		self._events = []

	def get_user(self, username):
		for user in self._users:
			if username == user._username:
				return user

	def get_event(self, id):
		for event in self._events:
			if id == event._id:
				return event

	def add_user(self, username, password, society):
		user = User(username, password, society)
		self._users.append(user)

	def delete_user(self, username):
		user = get_user(username)
		if user:
			self._users.remove(user)
			return True
		return False 

	def create_event(self, name, date, time, location, tags, society):
		event = Event(name, date, time, location, tags, society)
		self._events.append(event)

	def delete_event(self, event_id):
		event = get_event(event_id)
		if event:
			self._events.remove(event)
			return True
		return False

	def login(self, username, password):
		for user in self._users:
			if username == user._username and password == user._password:
				login_user(user)
				return True
		return False


