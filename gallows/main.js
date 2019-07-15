let password = "bez pracy nie ma kolaczy";
password = password.toUpperCase();

let length = password.length;
let password1 = "";

for(i=0; i<length; i++)
{
    if(password.charAt(i)=="")password1 = passowrd1 + "";
    else password1 = password1 + "-";
}

function write_password()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

function start()
{   
    let one = "";
    for(i=0; i<34; i++)
    {
    one = one + '<div class="letter">A</div>';
    if((i+1)% 7 == 0) one = one + '<div style="clear:both;"></div>'
    document.getElementById("alphabeat").innerHTML = one;

    write_password();
}

}