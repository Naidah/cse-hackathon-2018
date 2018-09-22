from flask import render_template, request, redirect, url_for, abort
from flask_login import login_required, current_user, logout_user

from server import app, system, auth_manager

@app.route('/')
    def calendar():
        pass
    return render_template('index.html')
    
@app.route('/calendar')
return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if system.login_customer(username, password):
            return redirect(url_for('calendar'))
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
	logout_user()
    return redirect(url_for('calendar'))
    
@app.route('/addEvent')
@login_required
def addEvent():
    if request.method == 'POST':
        name = request.form['name']
        date = request.form['date']
        time = request.form['time']
        location = request.form['location']
        tags = request.form['tags']
        system.create_event(name, date, time, location, tags, current_user._society)
        return render_template('index.html')
    return render_template('createEvent.html')
 
