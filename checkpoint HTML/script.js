// alert("it's just the beginnig ");
// console.log("it's just the beginnig");

// var x=5;
// var y=2;
// var z=x+y;
// alert(z); 

// var mystring="hello world";
// alert(mystring.length);

// var firstString="i like";
// var secondString=" pizza";
// var completeString=firstString+secondString;
// alert(completeString);

// var myString="hello there , this is a split test";
// var parts=myString.split(",");
// alert(parts);


//var i;
//for (i=0; i<=10; i++)
//{
    //alert(i);
//}

//var i=0;
//while(i<0){
  //  alert(i);
    //i++;
//}

// var myArray=[1,2,3,4];
// myArray.push(5);
// alert(myArray);

// var myArray=[1,2,3,4,5];
// myArray.pop();
// alert(myArray);
var text =document.getElementById("text")
function bold(){
  if( text.style.fontWeight=="bold")
  {
    text.style.fontWeight="normal"
  }
else {
  text.style.fontWeight="bold"
}
}

function italik(){
  if(text.style.fontStyle=="italic")
  {
text.style.fontStyle="normal"
  }
  else{
    text.style.fontStyle="italic"
  }
}
 function underline(){
   if(text.style.textDecoration=="underline") 
   {
     text.style.textDecoration="none";
   }
   else{
     text.style.textDecoration="underline"
   }
 }

 function change(){
   text.style.fontSize= document.getElementById("s").value 
 }
 function changer(){
   text.style.fontFamily=document.getElementById("a").value
 }