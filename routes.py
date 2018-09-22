from flask import render_template, request, redirect, url_for, abort
from flask_login import login_required, current_user

from server import app, system, auth_manager

@app.route('/')
    def calendar():

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if system.login_customer(username, password):
            # Next helps with redirecting the user to their previous page
            redir = request.args.get('next')
            return redirect(redir or url_for('home'))
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    auth_manager.logout()
    return redirect(url_for('home'))
    
@app.route('/addEvent')
@login_required
def addEvent():

@app.route('/calendar')
def addEvent():
    


