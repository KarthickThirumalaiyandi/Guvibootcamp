def Fibona(a):
    if a <= 1:
        return(a)
    else:
        return((Fibona(a-1) + Fibona(a-2)))

for j in range(5):
    print(Fibona(j))