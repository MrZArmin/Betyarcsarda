lista = []
with open('melyseg.txt', 'r') as file:
    for sor in file:
        lista.append(sor.strip())
print(f'1.feladat\n A fájl adatainak száma: {len(lista)}')
tavolsag = int(input("2.feladat\n Adjon meg egy távolságértéket! "))
print(f'Ezen a helyen a felszín {lista[tavolsag-1]} méter mélyen van.')

nulla = 0
for sor in lista:
    if sor == '0':
        nulla += 1
print(f'3.feladat\n Az érintetlen terület aránya {round(nulla/len(lista)*100, 2)}%.')

elozo = '0'
godrok = []
egygodor = []
hatososhoz = []
hatoshozossz = []
for i, sor in enumerate(lista):
    if sor != '0':
        egygodor.append(sor)
    if sor == '0' and elozo != '0':
        godrok.append(egygodor)
        egygodor = [] 
    elozo = sor
with open('godrok.txt', 'w') as ki:
    for godor in godrok:
        print(" ".join(godor), file=ki)
ki.close()
print(f'5.feladat\n A gödrök száma: {len(godrok)}')    

adottgodor = []
print("6. feladat\na)")
if lista[tavolsag - 1] != '0':
    poz = tavolsag - 1
    while lista[poz] != '0':
        adottgodor.append(lista[poz])
        poz -= 1
    kezdő = poz + 2
    poz = tavolsag - 1
    while lista[poz] != '0':
        adottgodor.append(lista[poz])
        poz += 1
    záró = poz
    adottgodor.remove(lista[tavolsag-1])
    print(f'A gödör kezdete: {kezdő} méter, a gödör vége: {záró} méter.')
adottgodor = list(map(int, adottgodor))
print('b)')
poz = kezdő +1
while lista[poz] >= lista[poz-1] and poz <= záró:
    poz +=1
while lista[poz] <= lista[poz-1] and poz <= záró:
    poz +=1
if poz > záró:
    print('Folyamatosan mélyül')
else:
    print("Nem mélyül folyamatosan")


print(f'c)\nA legnagyobb mélysége {max(adottgodor)} méter.')

terfogat = 0
for i in adottgodor:
    v= i*10
    terfogat+=v   
print(f'd)\n A térfogata {terfogat} m^3.')

befogadas = 0
for i in adottgodor:
        v= (i-1)*10
        befogadas += v
print(f'd)\n A vízmennyiség {befogadas} m^3.')