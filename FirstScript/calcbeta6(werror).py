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

#Printer menyen
print("velg regnemåte")
print("1. pluss (2 siffer)")
print("2. minus (2 siffer)")
print("3. gange (2 siffer)")
print("4. dele (2 siffer)")
print("5. pytagoras")
print("6. kvadratrot")
print("7. diameter av en sirkel via radius")
print("8. radius av en sirkel via diameter")
print("9. omkrets av en sirkel via diameter")
print("10. omkrets av en sirkel via radius")
print("11. areal av en sirkel via radius")
print("12. areal av en sirkel via diameter")
print("13. omkrets av trekant")
print("14. areal av trekant")
print("15. prosent av")
print("16. omkrets av firkant")
print("17. areal av firkant")
print("18. regne ut manglene side av trekant")
print("19. vinkel i trekant")
print("20. vinkel i firkant")
print("21. volum av prisme med firkantet grunnflate")
print("22. volum av prisme med trekantet grunnflate")
print("23. volum av prisme med sirklet grunnflate")
print("24. volum av kule")
print("25. brøk til prosent")
print("26. Faktor")

while True:
    #Tar imot hva du vil gjøre
    choice = input("skriv(1/2/3/4/5/6/7/8/9/10/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26): ")

    if choice:
        #Tar inputen imot og redirecter den til hvilket type regning du vil
        #Tar å gir verdi til num1 og num2 så man kan regne det ut
        if choice in ('0'):
            if choice == '0':
                print("error")

        elif choice in ('1', '2', '3', '4'):
            num1 = float(input("skriv tall nummer 1: "))
            num2 = float(input("skriv tall nummer 2: "))

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
            num1 = float(input("Grunnlinje: "))
            num2 = float(input("Høyde: "))

            #Regner pytagoras
            if choice == '5':
                print(math.sqrt(add(multiply(num1, num1), multiply(num2, num2))))

        elif choice in ('6'):
            num1 = float(input("skriv tall du vil ha kvadrat rot av: "))

            if choice == '6':
                print( num1, " kvadratrot = ", math.sqrt(num1))

        elif choice in ('7'):
            num1 = float(input("Skriv radius: "))

            if choice == '7':
                print( "En sirkel med radius ", num1, " har et diameter på ", add(num1, num1))

        elif choice in ('8'):
            num1 = float(input("Skriv diameter: "))

            if choice == '8':
                print("En sirkel med diameter", num1, "har en radius av", divide(num1, 2))

        elif choice in ('9'):
            num1 = float(input("Skriv diameter av sirkelen: "))

            if choice == '9':
                print( "Omkrets av en sirkel med ", num1," diameter er", multiply(num1, z))

        elif choice in ('10'):
            num1 = float(input("Skriv radius av sirkelen: "))

            if choice == '10':
                print( "Omkrets av en sirkekl med", num1, "radius er", multiply(multiply(num1, 2), z))

        elif choice in ('11'):
            num1 = float(input("Skriv in radius av sirkelen: "))

            if choice == '11':
                print( "Areal av en sirkel med", num1, "radius er", multiply(multiply(num1, num1), z))

        elif choice in ('12'):
            num1 = float(input("Skriv in diameteret av sirkelen: "))

            if choice == '12':
                print("Areal av en sirkel med", num1, "diameter er", multiply(pow(divide(num1, 2), 2), z))

        elif choice in ('13'):
            num1 = float(input("Grunnlinje: "))
            num2 = float(input("Høyde: "))
            num3 = float(input("hypotenus: "))

            if choice == '13':
                print("Omkretsen av trekanten er", add3(num1, num2, num3))

        elif choice in ('14'):
            num1 = float(input("høyde: "))
            num2 = float(input("lengde: "))

            if choice == '14':
                print("arealet av trekanten er", divide(multiply(num1, num2), 2))

        elif choice in ('15'):
            num1 = float(input("tallet du vil ha prosent av: "))
            num2 = float(input("Prosent uten % tegnet: "))

            if choice == '15':
                print(num2, "prosent av", num1, "er", multiply(divide(num2, 100), num1))

        elif choice in ('16'):
            num1 = float(input("Langside: "))
            num2 = float(input("kortside: "))

            if choice == '16':
                print("omkretsen av firkanten er", add(add(num1, num2), add(num1, num2)))

        elif choice in ('17'):
            num1 = float(input("Langside: "))
            num2 = float(input("Kortside: "))

            if choice == '17':
                print("Arealet av firkanten er", multiply(num1, num2))

        elif choice in ('18'):
            num1 = float(input("Grunnlinje/høyde (den du har): "))
            num2 = float(input("Hypotenus: "))

            if choice == '18':
                print(math.sqrt(subtract(pow(num2, 2), pow(num1, 2))))

        elif choice in ('19'):
            num1 = float(input("vinkel 1: "))
            num2 = float(input("vinkel 2: "))

            if choice == '19':
                print(subtract(180, add(num1, num2)))

        elif choice in ('20'):
            num1 = float(input("Vinkel 1: "))
            num2 = float(input("Vinkel 2: "))
            num3 = float(input("Vinkel 3: "))

            if choice == '20':
                print(subtract(360, add3(num1, num2, num3)))

        elif choice in ('21'):
            num1 = float(input("Side 1: "))
            num2 = float(input("Side 2: "))
            num3 = float(input("Side 3: "))

            if choice == '21':
                print(multiply3(num1, num2, num3))

        elif choice in ('22'):
            num1 = float(input("Side 1: "))
            num2 = float(input("Side 2: "))
            num3 = float(input("Side 3: "))

            if choice == '22':
                print(multiply(divide(multiply(num1, num2), 2), num3))

        elif choice in ('23'):
            num1 = float(input("diameter: "))
            num2 = float(input("høyde: "))

            if choice == '23':
                print(multiply(num1, num2))

        elif choice in ('24'):
            num1 = float(input("Radius: "))

            if choice == '24':
                print(pow(num1, 3))

        elif choice in ('25'):
            num1 = float(input("øverste tall: "))
            num2 = float(input("Nederste tall: "))

            if choice == '25':
                print(multiply(divide(num1, num2), 100))

        elif choice in ('26'):
            num1 = input("tallet ditt: ")

            if choice == '26':
                print(math.factorial(int(num1)))

        elif choice > '26':
            print("error")
    else:
        print('error')
