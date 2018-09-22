class Event():
	Event.id = 0
	def __init__(self, name, date, time, location, tags):
		self._id = Event.id
		Event.id += 1
		self._name = name
		self._date = date
		self._time = time
		self._location = location
		self._tags = tags

	@property
	def name(self):
		return self._name

	@property
	def date(self):
		return self._date

	@property
	def time(self):
		return self._time

	@property
	def location(self):
		return self._location

	@property
	def tags(self):
		return self._tags