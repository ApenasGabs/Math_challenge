prime_list = []
for num in range(2,121):
    carry=0
    for numb in range (1, num+1):
        if num%numb == 0 :
            carry+=1
    if carry<=2:
        prime_list.append(num)
print(prime_list)