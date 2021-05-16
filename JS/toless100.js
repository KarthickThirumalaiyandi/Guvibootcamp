function toless100(a,b)
{
    c = a + b 
    if (c > 100)
    {
        return false;
    }
    else
    {
        return true;
    }
}
 var in1 = 51;
 var in2 = 50;
 res = toless100(in1,in2)
 console.log(res)