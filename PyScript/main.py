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
            outputvar = "{0} + {1} = {2}"
            printpage(outputvar.format(num1, num2, answer))

        #Regner minus
        elif choice == 2:
            answer = subtract(num1, num2)
            outputvar = "{0} - {1} = {2}"
            printpage(outputvar.format(num1, num2, answer))

        #regner gange
        elif choice == 3:
            answer = multiply(num1, num2)
            outputvar = "{0} * {1} = {2}"
            printpage(outputvar.format(num1, num2, answer))

        #Regner deling
        elif choice == 4:
            answer = divide(num1, num2)
            outputvar = "{0} / {1} = {2}"
            printpage(outputvar.format(num1, num2, answer))

        elif choice == 5:
            printpage(math.sqrt(add(multiply(num1, num1), multiply(num2, num2))))
        
        elif choice == 6:
            answer = divide(multiply(num1, num2), 2)
            outputvar = "Arealet av trekanten er {0}"
            printpage(outputvar.format(answer))

        elif choice == 7:
            answer = multiply(divide(num2, 100), num1)
            outputvar = "{0} prosent av {1} er {2}"
            printpage(outputvar.format(num1, num2, answer))

        elif choice == 8:
            answer = add(add(num1, num2), add(num1, num2))
            outputvar = "omkretsen av firkanten er {0}"
            printpage(outputvar.format(answer))

        elif choice == 9:
            answer = multiply(num1, num2)
            outputvar = "Arealet av firkanten er {0}"
            printpage(outputvar.format(answer))

        elif choice == 10:
            answer = math.sqrt(subtract(pow(num2, 2), pow(num1, 2)))
            printpage(answer)

        elif choice == 11:
            answer = subtract(180, add(num1, num2))
            printpage(answer)

        elif choice == 12:
            answer = multiply(num1, num2)
            printpage(answer)

        elif choice == 13:
            answer = multiply(divide(num1, num2), 100)
            printpage(answer)

    elif 13<choice<23:

        num1 = float(document.getElementById("num1").value)

        if choice == 14:
            answer = math.sqrt(num1)
            outputvar = "{0} kvadratrot = {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 15:
            answer = add(num1, num1)
            outputvar = "En sirkel med radius {0} har et diameter på {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 16:
            answer = divide(num1, 2)
            outputvar = "En sirkel med diameter {0} har en radius på {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 17:
            answer = multiply(num1, z)
            outputvar = "Omkrets av en sirkel med {0} diameter er {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 18:
            answer = multiply(multiply(num1, 2), z)
            outputvar = "Omkrets av en sirkekl med {0} radius er {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 19:
            answer = multiply(multiply(num1, 2), z)
            outputvar = "Omkrets av en sirkekl med {0} radius er {1}"
            printpage(outputvar.format(num1, answer))
            printpage( "Areal av en sirkel med", num1, "radius er", multiply(multiply(num1, num1), z))

        elif choice == 20:
            answer = multiply(pow(divide(num1, 2), 2), z)
            outputvar = "Areal av en sirkel med {0} diameter er {1}"
            printpage(outputvar.format(num1, answer))

        elif choice == 21:
            answer = pow(num1, 3)
            printpage(answer)

        elif choice == 22:
            answer = math.factorial(int(num1))
            printpage(answer)

    elif choice>22:
        num1 = float(document.getElementById("num1").value)
        num2 = float(document.getElementById("num2").value)
        num3 = float(document.getElementById("num3").value)

        if choice == 23:
            answer = add3(num1, num2, num3)
            outputvar = "Omkretsen av trekanten er {0}"
            printpage(outputvar.format(answer))

        elif choice == 24:
            answer = subtract(360, add3(num1, num2, num3))
            printpage(answer)

        elif choice == 25:
            answer = multiply3(num1, num2, num3)
            printpage(answer)

        elif choice == 26:
            answer = multiply(divide(multiply(num1, num2), 2), num3)
            printpage(answer)
