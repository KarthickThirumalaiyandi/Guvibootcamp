function countPositivesSumNegatives(arr)
{
    var arr2 =[];
    j=0;
    k=0;
    for (i=0;i<arr.length;i++)
    {
        if (arr[i] < 0)
        {
            j = j + 1
        } 
        else
        {
            if (arr[i]>=0)
            {
                k = k + 1
            }
        }

    }
       arr2 [0] = k
       arr2 [1] = j 
       
       return arr2


}

var arr1 =[-5,10,-3,12,-9,5,90,0,1];
arr3 = countPositivesSumNegatives(arr1);

console.log(arr3);