//variable, constants, file run calling fun
//import randomnumber from "./utility.js";
let{ randomnumber }= require("./utility.js"); 
const randnumber = randomnumber();//imported random number from utility file
console.log(randnumber)
console.log("usecase 1");
if(randnumber === 0){
    console.log("employee in absent")
}
else{
    console.log("employee in present")
}
console.log("usecase 2");
let wageperhr =20
let hr =8
if (randnumber === 1){
    const employeewage = 20*8;
    console.log(employeewage)
}
else{
    console.log("0")
}

console.log("usecase 3");
const randnumber3 =randomnumber3();
//imported random number from utility file for thre instances
console.log(randnumber3)
let fulltimehrs=8;
let parttimehrs=4;
if(randnumber3 == 0)
{
    console.log("employee is absent")
    const employeewage = 0;
    console.log("employeewadges", employeewage)
}
else if(randnumber3 == 1){
    console.log("employee is present and full time")
    var employeewage = fulltimehrs*wageperhr;
    console.log("employeewage",employeewage)
}
else if(randnumber3 == 2){
    console.log("employee is present and part time")
    var employeewage = parttimehrs*wageperhr;
    console.log("employeewage",employeewage)
}
else{
    console.log("invalid")
}
//case 4
console.log("usecase 4 \nIn this case we use switch statement")
switch(randnumber3){
    case 0:
        console.log("employee is absent");
        var employeewage = 0;
        console.log("employeewadges", employeewage);
        break;
    case 1:
        console.log("employee is present and full time")
        var employeewage = fulltimehrs*wageperhr;
        console.log("employeewage",employeewage)
        break;
    case 2:
        console.log("employee is present and part time")
        var employeewage = parttimehrs*wageperhr;
        console.log("employeewage",employeewage)
        break;
}
console.log("USECASE 5 \ncalculating wages for 1 month")
//usecase 5
days_in_month=20;
if(randnumber3 == 0)
{
    console.log("employee is absent")
    var employeewage = 0;
    var employeewage_permon=0;
    console.log("employeewadges per day", employeewage,"\nwage per month", employeewage_permon)
}
else if(randnumber3 == 1){
    console.log("employee is present and full time")
    var employeewage = fulltimehrs*wageperhr;
    var employeewage_permon=employeewage*20;
    console.log("employeewadges per day", employeewage,"\nwage per month", employeewage_permon)
}
else if(randnumber3 == 2){
    console.log("employee is present and part time")
    var employeewage = parttimehrs*wageperhr;
    var employeewage_permon=employeewage*20;
    console.log("employeewadges per day", employeewage,"\nwage per month", employeewage_permon)
}
else{
    console.log("invalid")
}
console.log("USE CASE 6 \n total working hour calculation")
