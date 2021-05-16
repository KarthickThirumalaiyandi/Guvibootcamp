function divisionByFive(num1)
{
    res = num1%5
    if (res === 0)
    {
        resl = true
        return resl
    }
    else
    {
        res1 = false
        return res1
    }
}

result = divisionByFive(37);
console.log(result);
