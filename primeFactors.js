function findSmallestPrimeFactor(number){
    let limit = Math.round(Math.sqrt(number)); //SquareRoot of Number
    let counter = 2;

    while(counter <= limit){
        if(number % counter == 0){
            return counter;
        };
        counter++;
    };

    return number;
};

function findPrimeFactors(number){
    let primeFactors = [];
    while(number > 1){
        smallestPrimeFactor = findSmallestPrimeFactor(number);
        primeFactors.push(smallestPrimeFactor);
        number /= smallestPrimeFactor;
    };

    return primeFactors;
};

//TEST(S)
console.log(findPrimeFactors(13195));           //Return an Array of Prime Factors [5, 7, 13, 29];
// console.log(findSmallestPrimeFactor(29));
