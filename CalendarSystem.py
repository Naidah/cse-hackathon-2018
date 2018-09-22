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

	def get_event(self, id):
		for event in self._events
			if id == event._id:
				return event

	def add_user(self, usernamee, password):
		user = User(username, password)
		self.users.append(user)

	def delete_user(self, username)
		user = get_user(username)
		if user:
			self._users.remove(user)
			return True
		return False 

	def create_event(self, name, date, time, location, tags):
		event = Event(name, date, time, location, tags)
		self._events.append(event)

	def delete_event(self, event_id):
		event = get_event(event_id)
		if event:
			self._events.remove(event)
			return True
		return False

	def login(self, username, password):
		for user in self._users:
			if username=


