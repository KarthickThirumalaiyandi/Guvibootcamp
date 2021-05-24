var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data = JSON.parse(this.response);
 for(i=0;i<data.length;i++)
 {
    countryname = data[i].name
    lat = data[i].latlng[0]
    loh = data[i].latlng[1]
   weatherapi(countryname,lat,loh)  
 }
}

function weatherapi(countrysh,lat1,log1)
{
  var url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat1 + '&lon=' + log1 + '&appid=2cbe302bd8c7b4ab7cfcf1bd03345772'
  var req1 = new XMLHttpRequest();
  req1.open('GET',url1,true);
  req1.send();
  req1.onload=function(){
      var weth = JSON.parse(this.response);  
    console.log(weth)
       console.log(countrysh + "     Temperature : " + weth["main"].temp_max)            
}
}


