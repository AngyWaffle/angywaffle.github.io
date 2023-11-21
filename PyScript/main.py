import arrr
from pyscript import document

def printpage(x):
    output_div = document.querySelector("#output")
    output_div.innerText = x

import math

z = math.pi

#Deffinerer "add" og gjør sånn at mann kan bruke "add"
def add(x, y):
    return x + y

#Deffinerer "subtract" og gjør sånn at mann kan bruke "subtract"
def subtract(x, y):
    return x - y

#Deffinerer "multiply" og gjør sånn at mann kan bruke "multiply"
def multiply(x, y):
    return x * y

#Deffinerer "divide" og gjør sånn at mann kan bruke "divide"
def divide(x, y):
    return x / y

def add3(x, y, z):
    return x + y + z

def multiply3(x, y, z):
    return x * y * z

def calculate(self):
    choice = float(document.getElementById("calctype").value)

    if choice < 14:
        num1 = float(document.getElementById("num1").value)
        num2 = float(document.getElementById("num2").value)
        #Regner pluss
        if choice == 1:
            answer = add(num1, num2)
            outputvar = "{0} + {0} = {0}"
            printpage(outputvar.format(num1, num2, answer))

        #Regner minus
        elif choice == 2:
            answer = subtract(num1, num2)
            outputvar = "{0} + {0} = {0}"
            printpage(outputvar.format(num1, num2, answer))

        #regner gange
        elif choice == 3:
            answer = multiply(num1, num2)
            outputvar = "{0} + {0} = {0}"
            printpage(outputvar.format(num1, num2, answer))

        #Regner deling
        elif choice == 4:
            answer = divide(num1, num2)
            outputvar = "{0} + {0} = {0}"
            printpage(outputvar.format(num1, num2, answer))

        elif choice == 5:
            printpage(math.sqrt(add(multiply(num1, num1), multiply(num2, num2))))
        
        elif choice == 6:
            answer = divide(multiply(num1, num2), 2)
            outputvar = "Arealet av trekanten er {0}"
            printpage(outputvar.format(answer))

        elif choice == 7:
            answer = multiply(divide(num2, 100), num1)
            outputvar = "{0} prosent av {0} er {0}"
            printpage(outputvar.format(num1, num2, answer))

        elif choice == 8:
            printpage("omkretsen av firkanten er", add(add(num1, num2), add(num1, num2)))

        elif choice == 9:
            printpage("Arealet av firkanten er", multiply(num1, num2))

        elif choice == 10:
            printpage(math.sqrt(subtract(pow(num2, 2), pow(num1, 2))))

        elif choice == 11:
            printpage(subtract(180, add(num1, num2)))

        elif choice == 12:
            printpage(multiply(num1, num2))

        elif choice == 13:
            printpage(multiply(divide(num1, num2), 100))

    elif 13<choice<23:

        num1 = document.getElementById("calctype").value

        if choice == 14:
            printpage( num1, " kvadratrot = ", math.sqrt(num1))

        elif choice == 15:
            printpage( "En sirkel med radius ", num1, " har et diameter på ", add(num1, num1))

        elif choice == 16:
            printpage("En sirkel med diameter", num1, "har en radius av", divide(num1, 2))

        elif choice == 17:
            printpage( "Omkrets av en sirkel med ", num1," diameter er", multiply(num1, z))

        elif choice == 18:
            printpage( "Omkrets av en sirkekl med", num1, "radius er", multiply(multiply(num1, 2), z))

        elif choice == 19:
            printpage( "Areal av en sirkel med", num1, "radius er", multiply(multiply(num1, num1), z))

        elif choice == 20:
            printpage("Areal av en sirkel med", num1, "diameter er", multiply(pow(divide(num1, 2), 2), z))

        elif choice == 21:
            printpage(pow(num1, 3))

        elif choice == 22:
            printpage(math.factorial(int(num1)))

    elif choice>22:
        num1 = float(document.getElementById("num1").value)
        num2 = float(document.getElementById("num2").value)
        num3 = float(document.getElementById("num3").value)

        if choice == 23:
            printpage("Omkretsen av trekanten er", add3(num1, num2, num3))

        elif choice == 24:
            printpage(subtract(360, add3(num1, num2, num3)))

        elif choice == 25:
            printpage(multiply3(num1, num2, num3))

        elif choice == 26:
            printpage(multiply(divide(multiply(num1, num2), 2), num3))

def translate_english(event):
    input_text = document.querySelector("#english")
    english = input_text.value
    output_div = document.querySelector("#output")
    output_div.innerText = arrr.translate(english)
