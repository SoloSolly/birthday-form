/*
var malename= ["kwasi","kwadwo", "kwabena","kwaku", "yaw","kofi","kwame"];
var femalename= ["akosua", "adowa","abenaa", "akua","yaa","afua","ama"];


function getInputvalue(){
    var birthdaydate = new Date(document.getElementById("birthday").value);
    represent = birthdaydate.getday();
    
}

var represent, maleoutput, femaleoutput;
var clicked;
var clickedd;
function genderclicked(){
    getInputvalue();
    if(clicked===true){
        maleoutput=malename[represent];
        alert(maleoutput);
    }else if(clicked===false){
        clickedd === true;
    }else if(clickedd===true){
        femaleoutput = femalename[represent];
        alert(femaleoutput);
    }else{
        clicked === true;
    }
}
function maletabclicked(){
    clicked=true;
}
function femaletabclicked(){
    clickedd=true;
}

*/

function  getDay(name){
    var year=(document.getElementById("year").value); 
    var CC=parseInt(year.slice(0,1));
    var YY=parseInt(year.slice(2,3));
    var MM=parseInt(document.getElementById("month").value);
    var DD=parseInt(document.getElementById("date").value);

    if (year==="" || year <1 || month ==="" || month <1 || month>12 || date==="" || date <1 || date >31){
    alert("check your inputs and try again!")}
    else{
        var day= Math.floor((((CC/4) -2*CC-1) +((5*YY/4)) + ((26*(MM+1)/10)) + DD) %7);
            return day
    }
}

function getGender(){
    var radio = document.getElementsByName("gender");
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }

}

function getName(){
    var dayname=["SUNDAY", "MONDAY", "TUESDAY","WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    var female = ["AKOUSA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"];
    var male = ["KWASI", "KWADWO", "KWABENA", "KWAKU", "YAW","KOFI","KWAME"];


    if (getGender()==="female")
    {
        alert ("your akan name is " + female[getDay(name)]);
    }
    else if (getGender()==="male"){
        alert("Your Akan name is " + male[getDay(name)]);
    }
    
    else{
        alert("try again")
    }



}
