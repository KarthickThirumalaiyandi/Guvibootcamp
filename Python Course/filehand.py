import num2word
with open('digt.txt', 'r') as reader:
    line1 = reader.readline()
words = num2word.word(line1)
strwt = line1 + ' ' + words
print(strwt)
reader.close()
with open('digt.txt', 'w') as wrt:
    wrt.write(strwt)
wrt.close()