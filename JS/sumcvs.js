function sumcvs(s)
{
    var arr = []
    arr = s.split(",")
 //   console.log(arr)
    var sum = 0
 for (var i=0;i<arr.length;i++)
 {
    sum = sum + parseFloat(arr[i])
 }
    console.log(sum)
}

sumcvs('1.5,2.3,3.1,4,5.5,6,7,8,9,10.9');