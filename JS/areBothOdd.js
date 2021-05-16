function areBothOdd(num1,num2)
{
    if (num1%2 !==0 && num2%2 !==0)
    {
        return true
    }
    else
    {
        return false
    }
}

var int1 = 0;
var int2 = 0;
res = areBothOdd(int1,int2);
console.log(res);