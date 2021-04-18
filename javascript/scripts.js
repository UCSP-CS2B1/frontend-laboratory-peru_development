//Place your javascript code related with HTML and CSS here


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

//Seccion factorial
function out_factorial(){
    var input = document.getElementById("user-input2").value;
    document.getElementById("result_fact").innerHTML = factorial(input);
    
}
function factorial(number) {
    var total = 1;
    for (var i = 1; i <= number; i++) {
        total = total*i;
    }
    return total;
}


//Seccion Fibonacci
function out_fibo(){
  var input = document.getElementById("fibo_input").value;
  document.getElementById("result_fibo").innerHTML = fibonacci(input);
  
}
function fibonacci(num) {
  var a = 0, b = 1, temp;
  while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
  }
  return b;
}


//Seccion Operacion
function out_eval() {
    var input = document.getElementById("eval_input").value;
    document.getElementById("result_eval").innerHTML = evaluation(input);
}
function evaluation(expression) {
  var number;
  number = eval(expression);
  if(number >= 0)
      return number;
  else
      return "Resultado negativo";
}

//Seccion Insertion Sort
/*function out_sort() {
    var input = document.getElementById("sort_input").value;
    //convertir entrada en array
    document.getElementById("result_sort").innerHTML = getSort(input);
}*/
/*function Array(val) {
    var Arr = [];
    
}*/
function insertion_sort(numbers) {
  let n = numbers.length;
  let pos, aux;
  for(let i=0; i < n; i++)
  {
      pos = i;
      aux = numbers[i];
      while( (pos > 0) && (numbers[pos-1] > aux) ) //en primera ocacion salta, en la segunda entra y compara actual con anterior
      {
          numbers[pos] = numbers[pos-1]; // cambio
          pos--; // para regresar y cambiar el valor del anterior
      }
      numbers[pos] = aux; // cambio2
  }
  return numbers;
}

function getSort() {
  var stuff = document.getElementById("user-input").elements[0].value;
  var len = stuff.length;
  var sortArray = [];
  //"4,2,1,3" (7 + 1) / 2 = 4
  var cont = 0;
  var temp = "";
  for (i = 0; i < len; i++)
  {
      if (stuff[i] == ',' ) {
          sortArray[cont] = parseInt(temp);
          temp = "";
          cont++;
      }
      else { 
        temp = temp + stuff[i];
      }
    }
   sortArray[cont] = parseInt(temp);

  var newArray = insertion_sort(sortArray);
  var cadena = "";
  for (i = 0; i < sortArray.length; i++)
  {
    cadena += newArray[i];
    if (i != sortArray.length - 1)
    {
      cadena += ',';
    }
  }

  //console.log(len);
  document.getElementById("user-output").innerHTML = cadena;
}