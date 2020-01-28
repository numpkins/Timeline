let title = document.getElementById("t0");
let date1 = document.getElementById("d1");
let date2 = document.getElementById("d2");
let date3 = document.getElementById("d3");
let date4 = document.getElementById("d4");
let date5 = document.getElementById("d5");
let date6 = document.getElementById("d6");


function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}
