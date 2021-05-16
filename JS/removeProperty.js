function removeProperty(obj1,key)
{
    delete obj1[key];
    if (typeof(obj1) == 'object')
    {
        console.log('undefined')
    }

}

var obj = {'mykey' : 'BMW'}
removeProperty(obj,"mykey")