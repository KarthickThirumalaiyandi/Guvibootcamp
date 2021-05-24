var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data = JSON.parse(this.response);
    //console.log(data)

    //content = document.getElementById("content");
    //let list = "<ul>"

 // for(i=0;i<data.length;i++)
  //  {
    //console.log(data[0])
    //console.log(data[0].name)
    //console.log(data[0].altSpellings[0])
//    console.log(data[0].latlng[0])
 //   console.log(data[0].latlng[1])
  //  console.log(data[i].name);
    // document.getElementById("id").innerHTML = data[i].name;
   //}
  // list += "<li>" + data[i].name + "</li>";
//}
//list +="</ul>"
//content.innerHTML = list;
//countrysh = data[0].altSpellings[0]
//content = document.getElementById("content");
//var list1
 for(i=0;i<data.length;i++)
  {
    //console.log(data[i])
     //countryname = data[i].altSpellings[0]
     countryname = data[i].name
   // countrysh = data[i].altSpellings[0]
    //lat = parseInt(data[i].latlng[0])
    //loh = parseInt(data[i].latlng[1])
    //console.log(lat)
    //console.log(loh)
    lat = data[i].latlng[0]
    loh = data[i].latlng[1]
    weatherapi(countryname,lat,loh)
 }
 //content.innerHTML = list1;
}

function weatherapi(countrysh1,lat1,log1)
{
  //console.log(lat1)
  //console.log(log1)
  var url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat1 + '&lon=' + log1 + '&appid=2cbe302bd8c7b4ab7cfcf1bd03345772'
  var req1 = new XMLHttpRequest();
  req1.open('GET',url1,true);
  req1.send();
  req1.onload=function(){
      var weth = JSON.parse(this.response);
   //  if (weth["name"]==countrysh1)
    //  {
        console.log(countrysh1 + " " + weth["main"].temp_max)
    //    let list = "<ul>"
     //   list += "<li>" + countrysh1 + " " + weth["main"].temp_max + "</li>";
      //  list +="</ul>"
      //console.log(countryname+ weth)
      // }
     // return list;
}
}