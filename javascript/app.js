// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    let n = numbers.length();
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


// Param number: single integer
// Returns a single integer
function factorial(number) {
    var total = 1;
    for (i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
    
    var a = 0, b = 1, temp;
    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;

  }

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
    var number;
    number = eval(expression);
    if(number > 0)
        return number;
    else
        return -1;
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
