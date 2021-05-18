function primenum ()
{
    // program to print prime numbers between the two numbers

// take input from the user
//const lowerNumber = parseInt(Input('Enter lower number: '));
//const higherNumber = parseInt(Input('Enter higher number: '));

//console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = 2; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
}

primenum();