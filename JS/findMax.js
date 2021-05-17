function findMax(obj1)
{
    return Math.max.apply(null,obj1)
}

var val
var arr = [-5,10,-3,12,-9,5,90,0,1]
val = findMax(arr)
console.log("Max: ",val)