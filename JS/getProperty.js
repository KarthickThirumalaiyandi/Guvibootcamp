function getProperty(obj,keyv)
{
    if (typeof(obj[keyv]) == 'undefined')
    {
        console.log('NA')
    }
    else
    {
        console.log(obj[keyv])
    }
}

var obj1 = {'BMW':'X6'};
getProperty(obj1,'BMW')