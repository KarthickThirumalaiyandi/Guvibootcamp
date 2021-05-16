function getPositives(arr)
{
    var arr1 = []
    j=0;
    for (i=0;i<arr.length;i++)
    {
    //    console.log(arr[i])
        if(arr[i]>= 0)
        {
      //      console.log(arr[i])
            arr1[j] = arr[i] 
            j = j + 1  
        }
    }
    return arr1
}

var arr3 = []
var arr4 = [-5,10,-3,12,-9,5,90,0,1];
arr3 = getPositives(arr4)
console.log(arr3)