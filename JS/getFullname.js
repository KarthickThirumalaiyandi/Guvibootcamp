function getFullname(FirstN,LastN)
{
   // console.log(FirstN)
    //console.log(LastN)
    if (typeof(FirstN) == 'string' && typeof(LastN) == 'string')
    {
        return FirstN + ' ' + LastN
    }
    else
    {
        if (typeof(FirstN) == 'string' && typeof(LastN) == 'undefined')
        {
            return FirstN
        }
        else
        {
            if (typeof(FirstN) ==  'undefined' && typeof(LastN) == 'string')
            {
                return LastN
            }
            else
                 if (typeof(FirstN) == 'undefined' && typeof(LastN) =='undefined')
            {
                return '""'
            }


        }
    }
}

var FirstName 
var LastName 
res = getFullname(FirstName,LastName)
console.log(res)