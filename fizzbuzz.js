function fizzBuzz(number){
    let array = [];
    for(let i = 1; i <= number; i++){
        let temp = "";
        if(i % 3 === 0){
            temp += "Fizz";
        };
        if(i % 5 === 0){
            temp += "Buzz";
        };
        if(temp === ""){
            temp += i;
            array.push(temp);
        } else {
            array.push(temp);
        };
    };

    return array;
};

//TESTS
console.log(fizzBuzz(5)); //Return an Array ['1', '2', ..., 'Buzz'];
console.log(fizzBuzz(15)); //Return an Array ['1', '2', ..., 'FizzBuzz'];