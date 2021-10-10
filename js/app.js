var timeout;
mouse = false;
function mousedown()
{
  timeout = setTimeout(function(){	mouse = true;callEvent(); }, 3000);
  
}
function mouseup()
{
	clearTimeout(timeout);
  mouse =false;
}
function callEvent()
{
 if(mouse)
 {
   // do whatever you want
   // it will continue executing until mouse is not released

   var text = document.getElementById("demo").innerHTML;
   var favDrink = prompt("Kamera Adını Giriniz", text);
 
   document.getElementById("demo").innerHTML = favDrink;
   
 }
 else
 return;
}

function myFunction() {
    var text = document.getElementById("demo").innerHTML;
    var favDrink = prompt("Kamera Adını Giriniz", text);
  
    document.getElementById("demo").innerHTML = favDrink;
  }









  var timeout;
  mouse = false;
  function mousedown()
  {
    timeout = setTimeout(function(){	mouse = true;callEvent(); }, 3000);
    
  }
  function mouseup()
  {
      clearTimeout(timeout);
    mouse =false;
  }
  function callEvent()
  {
   if(mouse)
   {
        var text = document.getElementById("demo").innerHTML;
     var favDrink = prompt("Kamera Adını Giriniz", text);
   
     document.getElementById("demo").innerHTML = favDrink;
     
   }
   else
   return;
  }