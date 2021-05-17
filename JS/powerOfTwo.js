function powerOfTwo(num)
{
    var pw = []
    for (i=0;i<=num;i++)
    {
        pw[i] = Math.pow(2,i)
        //console.log(pw[i])
    }
    return pw
}
var res = []
    res = powerOfTwo(2);
    console.log(res)

