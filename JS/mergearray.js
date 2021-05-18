function mergearray(arr1,arr2)
{
    var res1 = []
    for (var i=0;i<arr1.length;i++)
    {
        res1.push(arr1[i])
    }

    for (var j=0;j<arr2.length;j++)
    {
        res1.push(arr2[j])
    }

    return res1
}
var inres = [1,4,5]
var inres1 = [2,3,6]
var result = mergearray(inres,inres1);
console.log(result)