
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



