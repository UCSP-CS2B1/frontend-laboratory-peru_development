//Place your javascript code related with HTML and CSS here
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


function out_factorial(){
    var input = document.getElementById("userInput_").value;
    var n_input = parseInt(input);
    var n_output = factorial(n_input);
    alert(n_output);
    
}

function factorial(number) {
    var total = 1;
    for (i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}

function myFunction() {
  var stuff = document.getElementById("user-input");
  var text = stuff.elements[0].value;
  document.getElementById("user-output").innerHTML = text;
}



