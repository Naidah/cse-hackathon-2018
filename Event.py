class Event():
	__id = 0
	def __init__(self, name, date, time, location, tags, society):
		self._id = self._generate_id()
		self._name = name
		self._date = date
		self._time = time
		self._location = location
		self._tags = tags
		self._society = society

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
	
	@property
	def society(self):
		return self._society

	def _generate_id(self):
		Event.__id += 1
		return Event.__id
