function fibonacci(){
    limit = 30; //Value Does Not Exceed 4 Million
    let array = [1, 2];
    for(let i = 0; i < limit; i++){
        array.push(array[i] + array[i+1]);
    };

    return array;
};

//TESTS
console.log(fibonacci()); //Return Array of Fibonacci Numbers