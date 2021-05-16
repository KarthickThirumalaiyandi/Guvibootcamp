function frames(fr,sec)
{
    res = fr * (sec * 60);
    return res;
}

var fr1 = 10;
var sec1 = 25;

reslt = frames(fr1,sec1);
console.log(reslt);
