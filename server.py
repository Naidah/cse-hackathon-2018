from flask import Flask
from flask_login import LoginManager
from CalendarSystem import CalendarSystem
import csv 

app = Flask(__name__)
app.secret_key = 'very-secret-123'  # Used to add entropy


# Authentication manager and System setup
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
ogin_view = 'login'

@login_manager.user_loader
def load_user(username):
    return system.get_user(username)

system = CalendarSystem()

# dummy login
for username in ['Lucas', "Aidan", "Lilian", "Sarah"]:
	system.add_user(username, 'pass', 'CSE')

# dummy events
with open('events.csv', 'r') as csvfile:
	event_reader = csv.reader(csvfile)
	for row in event_reader:
		name = row[0]
		date = row[1]
		time = row[2]
		location = row[3]
		tags = row[4]
		society = row[5]
		system.create_event(name, date, time, location, tags.split(','), society)

