num=int(input('Enter Integer :'))
temp_num = 0

while(num>0):
    reminder = num % 10
    temp_num = (temp_num * 10) + reminder
    num=num//10
print(temp_num)
