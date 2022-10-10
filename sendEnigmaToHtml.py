#!/usr/bin/env python3
"""
    send information for HRML page game
"""
from find_the_enigma import *
from flask import Flask, render_template
import time


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
def giveClue():
    enigma0 = enigmaChosen()
    enigma1 = enigmaChosen()
    enigma2 = enigmaChosen()
    enigma3 = enigmaChosen()
    enigma4 = enigmaChosen()
    enigma5 = enigmaChosen()
    enigma6 = enigmaChosen()
    enigma7 = enigmaChosen()
    enigma8 = enigmaChosen()
    enigma9 = enigmaChosen()

    listOfChosenEnigma = [enigma0, enigma1, enigma2, enigma3, enigma4,
                          enigma5, enigma6, enigma7, enigma8, enigma9]
    
    for i in listOfChosenEnigma:
        categorie = i[0]
        theme = i[1]
        indice1 = i[2]
        time.sleep(5)
        indice2 = i[3]
        time.sleep(5)
        indice3 = i[4]
        time.sleep(5)
        indice4 = i[5]
        time.sleep(5)
        indice5 = i[6]
        time.sleep(5)
        reponse = i[7]
        time.sleep(5)
        os.system("clear")

 
    return render_template("game.html", categorie=categorie)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
