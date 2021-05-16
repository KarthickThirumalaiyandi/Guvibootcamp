function getLengthofWord(word1)
{
   // console.log(typeof(word1))
    if (typeof(word1) == 'undefined' || typeof(word1) == 'number')
    {
     //  console.log("hi")
        return -1
    }
    else
    {
        return word1.length
    }
}

var word = 9
res = getLengthofWord(word)
console.log(res)