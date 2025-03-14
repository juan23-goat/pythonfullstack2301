#1
preco = int(input("informe o seu preço:"))
desconto = int(input("me informe o seu desconto:"))
if desconto <  0 :
    desconto = int(input("informe um desconto valido:"))
    print("preço final:",preco - desconto)

else:
 print("preço final:",preco - desconto)


 print() 
 print()


#2
peso1 = float(input("Digite seu peso:"))
altura2 = float(input("Digite sua altura:"))
if altura2 > 2.40 :
    input("coloque sua altura verdadeira:")
    print("IMC:", peso1 / altura2**2)
else:
 print("IMC:", peso1 / altura2**2)
print()
print()


#3
nome = input ("nome:")
idade = int(input("Sua idade:"))
experiencia = input("tem experiencia? (Sim/nao):"). lower()
if idade >= 18:
  print("voce esta Elegivel ao cargo!!")
else:
  print("nao está elegivel ao cargo")
 
print()
print()


#4
acessos = {
    "1": "acesso restrito",
    "2": "acesso parcial",
    "3": "acesso total"
}


nivel = input("Digite seu nível de acesso (1, 2, 3): ")

if nivel in acessos:
    print(f"Você tem {acessos[nivel]}.")
else:
    print("Nível de acesso inválido.")

print()
print()

5# 

celsius = input("Me fale sua temperatura para a conversao:")
Fahrenheit = float(celsius)* 9/5 + 32   
print(Fahrenheit)

print()
print()

6#
numero = int(input("Digite um número inteiro: "))

# Verificando se o número é par ou ímpar
if numero % 2 == 0:
    print(f"O número {numero} é par.")
else:
    print(f"O número {numero} é ímpar.")

print()
print()


#7  caucule de frete 

peso = int (input("informe o peso do produto(em kg):"))
if peso < 0:
 peso = int(input("infome um peso valido:"))
if peso <= 5 :
  print("o valor de seu frete foi 10 reais.")
elif peso > 10:
 print("o valor de seu frete é 30 reais.")
else :
 print("o valor de seu frete foi 20 reais.")
