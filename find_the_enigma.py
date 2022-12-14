#!/usr/bin/env python3
"""
    import modules to find the good enigma
"""
import json
import os
import random


"""list json file and extrat one file
        return the good file"""


def enigmaChosen():
    """
        in all the json files
        return one enigma
    """
    jsonList = os.listdir('./questions')
    fileJsonChosen = random.choice(jsonList)
    with open("./questions/" + fileJsonChosen) as f:
        dictOfEnigma = json.load(f)
    category = list(dictOfEnigma.keys())[0]
    listOfEnigma = dictOfEnigma.get(category)
    enigmaChosen = random.choice(listOfEnigma)
    alltheme = enigmaChosen.get("id")
    clue1 = enigmaChosen.get("d1")
    clue2 = enigmaChosen.get("d2")
    clue3 = enigmaChosen.get("d3")
    clue4 = enigmaChosen.get("d4")
    clue5 = enigmaChosen.get("d5")
    answer = enigmaChosen.get("a1")
    themesplit = alltheme.split('_')
    theme = themesplit[0]
    if (enigmaChosen.get("a3")):
        answer2 = enigmaChosen.get("a2")
        answer3 = enigmaChosen.get("a3")
        dictResult = {"category": category,
                      "theme": theme,
                      "clue1": clue1,
                      "clue2": clue2,
                      "clue3": clue3,
                      "clue4": clue4,
                      "clue5": clue5,
                      "answer": answer,
                      "answer2": answer2,
                      "answer3": answer3}
    elif (enigmaChosen.get("a2")):
        answer2 = enigmaChosen.get("a2")
        dictResult = {"category": category,
                      "theme": theme,
                      "clue1": clue1,
                      "clue2": clue2,
                      "clue3": clue3,
                      "clue4": clue4,
                      "clue5": clue5,
                      "answer": answer,
                      "answer2": answer2}
    else:
        dictResult = {"category": category,
                      "theme": theme,
                      "clue1": clue1,
                      "clue2": clue2,
                      "clue3": clue3,
                      "clue4": clue4,
                      "clue5": clue5,
                      "answer": answer}
    return dictResult


def enigmasChosen():
    """a suit of 10 enigmas"""
    enigmasList = []
    while len(enigmasList) < 10:
        enigma = enigmaChosen()
        if enigma not in enigmasList:
            enigmasList.append(enigma)
    dictResults = {'listOfEnigma': enigmasList}
    return dictResults
