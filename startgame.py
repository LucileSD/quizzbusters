#!/usr/bin/env python3
"""
    send information for HRML page game
"""
from genericpath import exists
from requests import request
from find_the_enigma import enigmaChosen, enigmasChosen
from flask import Flask, render_template, Response, make_response, request
from flask import session, redirect, url_for
from flask_mysqldb import MySQL
import json
import MySQLdb.cursors
import re

app = Flask(__name__)

app.secret_key = 'lucile'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'quizz'

mysql = MySQL(app)


@app.route("/", strict_slashes=False)
@app.route("/index.html", strict_slashes=False)
def index():
    """for the index page"""
    list = []
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT name, pts_of_week FROM users WHERE\
                    pts_of_week > 0 ORDER BY pts_of_week DESC')
    all = cursor.fetchall()
    list.append(all)
    return render_template("index.html", all=all)


@app.route("/regle", strict_slashes=False)
@app.route("/regle.html", strict_slashes=False)
def rules():
    """ for the rules page"""
    return render_template("regle.html")


@app.route("/compte", methods=['GET', 'POST'], strict_slashes=False)
@app.route("/compte.html", methods=['GET', 'POST'], strict_slashes=False)
def account():
    """for account page
        args: name : the name of the connecteed user
              points: the best score of the user
    """
    name = ''
    points = ''
    ptsOfWeek = ''
    if 'username' in session:
        name = session['username']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT points, pts_of_week FROM users WHERE name = %s',
                       (name,))
        dict_record_points = cursor.fetchone()
        points = dict_record_points.get('points')
        ptsOfWeek = dict_record_points.get('pts_of_week')
    return render_template("compte.html", name=name, points=points,
                           ptsOfWeek=ptsOfWeek)


@app.route('/logout')
def logout():
    """log out in the account page"""
    session.pop('loggedin', None)
    session.pop('username', None)
    return redirect(url_for('login'))


@app.route("/registration", methods=['GET', 'POST'], strict_slashes=False)
@app.route("/registration.html", methods=['GET', 'POST'], strict_slashes=False)
def register():
    """the user can register a new account"""
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password'\
       in request.form and 'email' in request.form:
        name = request.form['username']
        password = request.form['password']
        email = request.form['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE name = % s', (name, ))
        account = cursor.fetchone()
        if account:
            msg = 'Le compte existe déjà !'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = 'adresse email invalide !'
        elif not re.match(r'[A-Za-z0-9]+', name):
            msg = 'Le nom d\' utilisateur ne peut contenir que des lettres\
                   et des chiffres !'
        elif not name or not password or not email:
            msg = 'si\'il vous plait remplisser tous les champs !'
        else:
            cursor.execute('INSERT INTO users (name, email, password) VALUES\
                            (%s, %s, %s)', (name, email, password))
            mysql.connection.commit()
            msg = 'Vous êtes bien enregistré maintenant connectez-vous!'
            return render_template('login.html')
    elif request.method == 'POST':
        msg = 'si\'il vous plait remplisser tous les champs !'
    return render_template('registration.html', msg=msg)


@app.route("/login", methods=['GET', 'POST'], strict_slashes=False)
@app.route("/login.html", methods=['GET', 'POST'], strict_slashes=False)
def login():
    """if user has an account he can log it"""
    msg = ''
    if request.method == 'POST' and 'name' in request.form and 'pwd'\
       in request.form:
        name_user = request.form['name']
        password = request.form['pwd']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE name = %s AND password = %s',
                       (name_user, password))
        account = cursor.fetchone()
        if account:
            session['loggedin'] = True
            session['username'] = account['name']
            msg = 'Connexion réussie !'
            name = session['username']
            return index()
        else:
            msg = 'nom ou mot de passe incorrect !'
    return render_template('login.html', msg=msg)


@app.route("/qui", strict_slashes=False)
@app.route("/qui.html", strict_slashes=False)
def who():
    """description of my project"""
    return render_template("qui.html")


@app.route("/game", methods=['GET', 'POST'], strict_slashes=False)
@app.route("/game.html", methods=['GET', 'POST'], strict_slashes=False)
def game():
    """the game page"""
    return render_template("game.html")


@app.route("/enigma.json", strict_slashes=False)
def enigmaJson():
    """get one enigma"""
    jsonObject = json.dumps(enigmaChosen(), ensure_ascii=False)
    response = make_response(jsonObject)
    response.headers['Content-Type'] = 'application/json; charset=utf-8'
    return response


@app.route("/tenEnigma.json", strict_slashes=False)
def multipleEnigmaJson():
    """send 10 enigmas"""
    jsonObj = json.dumps(enigmasChosen(), ensure_ascii=False)
    lastresponse = make_response(jsonObj)
    lastresponse.headers['Content-Type'] = 'application/json; charset=utf-8'
    return lastresponse


@app.route("/counter", methods=['GET', 'POST'], strict_slashes=False)
def counter():
    """retrieve the number of points in the api and record it in db"""
    count = request.get_json()
    if 'username' in session:
        name = session['username']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT points FROM users WHERE name = %s', (name,))
        dict_record_points = cursor.fetchone()
        record_points = dict_record_points.get('points')
        cursor.execute('SELECT pts_of_week FROM users WHERE name = %s',
                       (name,))
        dict_record_pts_of_week = cursor.fetchone()
        record_pts_of_week = dict_record_pts_of_week.get('points')
        if record_points is None or count > record_points:
            cursor.execute('UPDATE users SET points = %s WHERE name = %s',
                           (count, name))
            mysql.connection.commit()
        if record_pts_of_week is None or count > record_pts_of_week:
            cursor.execute('UPDATE users SET pts_of_week = %s\
                           WHERE name = %s', (count, name))
            mysql.connection.commit()
    return str(count)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5500)
