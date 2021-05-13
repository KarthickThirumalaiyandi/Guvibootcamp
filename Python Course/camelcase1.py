import camelcase
name = []
for i in range(5):
    name1 = input("Enter name")
    name.append(name1)

c = camelcase.CamelCase()
for i in name:
    print(c.hump(i))