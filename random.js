let passwordBox=document.querySelector("input");
let  length1=12;
document.querySelector("button").addEventListener("click",createpassword);

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="?/><`~@#$%^&*()_+{}|[]\+=";
const allchares=uppercase+lowercase+number+symbol;

function createpassword()
{
    console.log("function")
    let password="";
    while(length1>password.length)
    {
        console.log(password);
        password+=allchares[Math.floor(Math.random()*allchares.length)];
    }
    console.log(password)

    passwordBox.value=password;
}



