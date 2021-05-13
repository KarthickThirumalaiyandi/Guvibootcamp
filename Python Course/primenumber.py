def primenumber(a):
    fl = True
    if a > 1:
        for x in range(2, a):
            if a % x == 0:
                fl = False
                break
    if fl:
        print("not prime")
    else:
        print("prime")

primenumber(7)