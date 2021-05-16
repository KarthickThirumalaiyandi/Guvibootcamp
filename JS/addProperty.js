function addProperty(obj1,key)
{
    obj1[key] = true;
      
    console.log(obj1)
}

var obj = {mykey:"value"};

addProperty(obj,"mykey")
