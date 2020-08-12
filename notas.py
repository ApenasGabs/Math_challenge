my_list = []
teste = int(input('Digite um numero entre 2 a 120  '))

if( (teste/2) == 0 or (teste/5) == 0 or (teste/7) == 0):
    print ('Este numero não é um numero primo')
else:
    print('este é um numero primo')
    if( (teste%2) == 0 or (teste%5) == 0 or (teste%7) == 0):
    print ('Este numero não é um numero primo')
else:
    print('este é um numero primo')

my_list = [None]*121
for num in range(2,121):
    for numb in range (2, num):
        if num%numb == 0 :
            my_list.append(num)
            print(my_list)
