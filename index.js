const number = parseInt(prompt('Enter a positive number: '));
let isPrime = true;
if(number == 1) console.log(`${!isPrime}`);
else if(number > 1){
    if(number == 2)console.log(`${isPrime}`);
    else{
        for (let i = 2; i < number ; i++) {
            if (number % i == 0) {
                console.log(`${!isPrime}`);
                break;
            }else {
                console.log(`${isPrime}`);
            }
        }
    }    
}
else{console.log(`${!isPrime}`);}