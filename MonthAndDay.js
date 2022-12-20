let day=(Math.floor(Math.random()*31)+1);
let month=(Math.floor(Math.random()*6)+1);
console.log("Day Is:"+day);
console.log("Month Is:"+month);

if(day>20 && day<31 && month==3)
{
    console.log("True");
}
else if(day>1 && day<30 && month==4)
{
    console.log("True");
}
else if(day>1 && day<31 && month==5)
{
    console.log("True");
}
else if(day>1 && day<30 && month==6)
{
    console.log("True");
}
else if(day<20 && month==7)
{
    console.log("True");
}
else
{
    console.log("False");
}