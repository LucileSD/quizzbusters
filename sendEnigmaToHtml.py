#!/usr/bin/env python3
"""
    send information for HRML page game
"""
from find_the_enigma import enigmaChosen
from flask import Flask, render_template, Response, make_response
import json

app = Flask(__name__)

@app.route("/", strict_slashes=False)
@app.route("/index.html", strict_slashes=False)
def index():
    return render_template("index.html")

@app.route("/regle", strict_slashes=False)
@app.route("/regle.html", strict_slashes=False)
def rules():
    return render_template("regle.html")

@app.route("/compte", strict_slashes=False)
@app.route("/compte.html", strict_slashes=False)
def account():
    return render_template("compte.html")

@app.route("/login", strict_slashes=False)
@app.route("/login.html", strict_slashes=False)
def log():
    return render_template("login.html")

@app.route("/qui", strict_slashes=False)
@app.route("/qui.html", strict_slashes=False)
def who():
    return render_template("qui.html")

@app.route("/game", strict_slashes=False)
@app.route("/game.html", strict_slashes=False)
def game():
    return render_template("game.html")

@app.route("/enigma.json", strict_slashes=False)
def enigmaJson():
    dictOfEnigma = enigmaChosen()
    jsonObject = json.dumps(dictOfEnigma, ensure_ascii=False)
    response = make_response(jsonObject)
    response.headers['Content-Type'] = 'application/json; charset=utf-8'
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5500)
