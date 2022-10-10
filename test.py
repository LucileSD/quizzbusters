#!/usr/bin/env python3
from find_the_enigma import *
import time

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
    print(f"categorie = {i[0]}")
    print(f"theme = {i[1]}")
    print(f"indice1 = {i[2]}")
    time.sleep(5)
    print(f"indice2 = {i[3]}")
    time.sleep(5)
    print(f"indice3 = {i[4]}")
    time.sleep(5)
    print(f"indice4 = {i[5]}")
    time.sleep(5)
    print(f"indice5 = {i[6]}")
    time.sleep(5)
    print(f"reponse = {i[7]}")
    time.sleep(5)
    os.system("clear")
