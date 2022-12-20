let num1=Math.floor(Math.random() * 900)+100;
let num2=Math.floor(Math.random() * 900)+100;
let num3=Math.floor(Math.random() * 900)+100;
let num4=Math.floor(Math.random() * 900)+100;
let num5=Math.floor(Math.random() * 900)+100;

console.log("Num1:"+num1);
console.log("Num2:"+num2);
console.log("Num3:"+num3);
console.log("Num4:"+num4);
console.log("Num5:"+num5);

//For Maximum Number
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log(num1 +":Is Greater");
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log(num2 +":Is Greater");
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log(num3 +":Is Greater");
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log(num4 +":Is Greater");
}
else
{
    console.log(num5 +":Is Greater")
}

//For Minimum Number
if(num1<num2 && num1<num3 && num1<num4 && num1<num5)
{
    console.log(num1 +":Is Smaller");
}
else if(num2<num1 && num2<num3 && num2<num4 && num2<num5)
{
    console.log(num2 +":Is Smaller");
}
else if(num3<num1 && num3<num2 && num3<num4 && num3<num5)
{
    console.log(num3 +":Is Smaller");
}
else if(num4<num1 && num4<num2 && num4<num3 && num4<num5)
{
    console.log(num4 +":Is Smaller");
}
else
{
    console.log(num5 +":Is Smaller")
}