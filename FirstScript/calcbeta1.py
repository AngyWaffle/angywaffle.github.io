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

#Printer menyen
print("velg regnemåte")
print("1. pluss (2 siffer)")
print("2. minus (2 siffer)")
print("3. gange (2 siffer)")
print("4. dele (2 siffer)")

while True:
    #Tar imot hva du vil gjøre
    choice = input("skriv(1/2/3/4): ")

    if choice:
        #Tar inputen imot og redirecter den til hvilket type regning du vil
        #Tar å gir verdi til num1 og num2 så man kan regne det ut

        if choice in ('1', '2', '3', '4'):
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
