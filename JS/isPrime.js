function isPrime(num)
{
    var n1 
    var j
    for (j=2;j<num;j++)
    {
        n1 = num%j
        if(n1==0)
        {
            break;
            return true
        }    
    }
    
    

}

function printprimes(nprime)
{
var i = 2 
var n = 0
while (n < nprime)
{
    if(isPrime(i))
    {
        console.log(n,"->",i)
    n++
    }
    i++
}
}

printprimes(100);