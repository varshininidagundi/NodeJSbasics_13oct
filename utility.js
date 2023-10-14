//create random function and return random no
const randomnumber=()=>{
    let randomnumber=Math.floor((Math.random()*2));
    if(randomnumber == 1){
        const num=randomnumber3();
        if(num== 0){
            return 4;
        }
        else{
            return 8;
        }
    }
    else{
        return 0;
    }
}

const randomnumber3=()=>{
    let randomnumber3=Math.floor((Math.random()*2));
    return randomnumber3;
}
//export default{randomnumber}
module.exports={ randomnumber}