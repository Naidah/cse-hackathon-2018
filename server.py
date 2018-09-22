from flask import Flask
from flask_login import LoginManager
from CalendarSystem import CalendarSystem

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

