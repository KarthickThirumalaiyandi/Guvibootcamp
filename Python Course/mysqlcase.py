import mysql.connector
mydb = mysql.connector.connect(
    host="localhost",
    user='root',
    password='digt123',
    database="dbtest"
)

mycus = mydb.cursor()
mycus.execute("insert into products values(003,'Wheat',10,'2015-02-15','2021-05-14 10:30:00',' ')")
mydb.commit()
print(mycus.rowcount, "record Inserted.")

mycus.execute('SELECT * FROM products')
myresult=mycus.fetchall()

for i in myresult:
    print(i)