import arrr
from pyscript import document

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

while True:
    #Tar imot hva du vil gjøre
    choice = document.getElementById("calctype").value
    if choice:
        #Tar inputen imot og redirecter den til hvilket type regning du vil
        #Tar å gir verdi til num1 og num2 så man kan regne det ut
        if choice in ('1', '2', '3', '4'):
            #Regner pluss
            if choice == '1':
                print( num1, "+", num2, "=", add(num1, num2))

            #Regner minus
            elif choice == '2':
                print( num1, "-", num2, "=", subtract(num1, num2))

            #regner gange
            elif choice == '3':
                print( num1, "*", num2, "=", multiply(num1, num2))

            #Regner deling
            elif choice == '4':
                print( num1, "/", num2, "=", divide(num1, num2))

        elif choice in ('5'):
            print(math.sqrt(add(multiply(num1, num1), multiply(num2, num2))))

        elif choice in ('6'):
            num1 = float(input("skriv tall du vil ha kvadrat rot av: "))
            print( num1, " kvadratrot = ", math.sqrt(num1))

        elif choice in ('7'):
            num1 = float(input("Skriv radius: "))
            print( "En sirkel med radius ", num1, " har et diameter på ", add(num1, num1))

        elif choice in ('8'):
            num1 = float(input("Skriv diameter: "))
            print("En sirkel med diameter", num1, "har en radius av", divide(num1, 2))

        elif choice in ('9'):
            num1 = float(input("Skriv diameter av sirkelen: "))
            print( "Omkrets av en sirkel med ", num1," diameter er", multiply(num1, z))

        elif choice in ('10'):
            num1 = float(input("Skriv radius av sirkelen: "))
            print( "Omkrets av en sirkekl med", num1, "radius er", multiply(multiply(num1, 2), z))

        elif choice in ('11'):
            num1 = float(input("Skriv in radius av sirkelen: "))
            print( "Areal av en sirkel med", num1, "radius er", multiply(multiply(num1, num1), z))

        elif choice in ('12'):
            num1 = float(input("Skriv in diameteret av sirkelen: "))
            print("Areal av en sirkel med", num1, "diameter er", multiply(pow(divide(num1, 2), 2), z))

        elif choice in ('13'):
            num1 = float(input("Grunnlinje: "))
            num2 = float(input("Høyde: "))
            num3 = float(input("hypotenus: "))
            print("Omkretsen av trekanten er", add3(num1, num2, num3))

        elif choice in ('14'):
            num1 = float(input("høyde: "))
            num2 = float(input("lengde: "))
            print("arealet av trekanten er", divide(multiply(num1, num2), 2))

        elif choice in ('15'):
            num1 = float(input("tallet du vil ha prosent av: "))
            num2 = float(input("Prosent uten % tegnet: "))
            print(num2, "prosent av", num1, "er", multiply(divide(num2, 100), num1))

        elif choice in ('16'):
            num1 = float(input("Langside: "))
            num2 = float(input("kortside: "))
            print("omkretsen av firkanten er", add(add(num1, num2), add(num1, num2)))

        elif choice in ('17'):
            num1 = float(input("Langside: "))
            num2 = float(input("Kortside: "))
            print("Arealet av firkanten er", multiply(num1, num2))

        elif choice in ('18'):
            num1 = float(input("Grunnlinje/høyde (den du har): "))
            num2 = float(input("Hypotenus: "))
            print(math.sqrt(subtract(pow(num2, 2), pow(num1, 2))))

        elif choice in ('19'):
            num1 = float(input("vinkel 1: "))
            num2 = float(input("vinkel 2: "))
            print(subtract(180, add(num1, num2)))

        elif choice in ('20'):
            num1 = float(input("Vinkel 1: "))
            num2 = float(input("Vinkel 2: "))
            num3 = float(input("Vinkel 3: "))
            print(subtract(360, add3(num1, num2, num3)))

        elif choice in ('21'):
            num1 = float(input("Side 1: "))
            num2 = float(input("Side 2: "))
            num3 = float(input("Side 3: "))
            print(multiply3(num1, num2, num3))

        elif choice in ('22'):
            num1 = float(input("Side 1: "))
            num2 = float(input("Side 2: "))
            num3 = float(input("Side 3: "))
            print(multiply(divide(multiply(num1, num2), 2), num3))

        elif choice in ('23'):
            num1 = float(input("diameter: "))
            num2 = float(input("høyde: "))
            print(multiply(num1, num2))

        elif choice in ('24'):
            num1 = float(input("Radius: "))
            print(pow(num1, 3))

        elif choice in ('25'):
            num1 = float(input("øverste tall: "))
            num2 = float(input("Nederste tall: "))
            print(multiply(divide(num1, num2), 100))

        elif choice in ('26'):
            num1 = input("tallet ditt: ")
            print(math.factorial(int(num1)))

        elif choice > '26':
            print("error")
    else:
        print('error')
