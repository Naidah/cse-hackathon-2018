from flask import render_template, request, redirect, url_for, abort
from flask_login import login_required, current_user, logout_user

from server import app, system

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		username = request.form['username']
		password = request.form['password']
		if system.login(username, password):
			return redirect(url_for('calendar'))
		else:
			return render_template('login.html', fail=True)
	return render_template('login.html')

@app.route('/')
def calendar():
	return render_template('index.html', e=system._events)

@app.route('/logout')
@login_required
def logout():
	logout_user()
	return redirect(url_for('calendar'))

@app.route('/addEvent', methods=['POST', 'GET'])
@login_required
def addEvent():
    if request.method == 'POST':
        name = request.form['name']
        date = request.form['date_time'][:10]
        time = request.form['date_time'][11:]
        location = request.form['location']
        tags = request.form.getlist('type')
        system.create_event(name, date, time, location, tags, current_user._society)
        return render_template('createEvent.html', success=True)
    return render_template('createEvent.html')
