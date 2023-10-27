// 1st question
let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));

// 2nd question
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    // console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
}

// 3rd question
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function() {
    var data1 = request1.response;
    var result2 = JSON.parse(data1);
    // console.log(result2)
    for(var i=0;i<result2.length;i++){
        console.log(result2[i].name.common)
        console.log(result2[i].region)
        console.log(result2[i].subregion)
        console.log(result2[i].population)




    }
}