//Find Largest Palindrome in a 2 Three Digit Product
function findLargestPalindromeProduct(){
    let upperbound = 999;
    let status = 1;
    while(upperbound > 900){
        console.log(upperbound);
        if(status){
            let result = isPalindrome(upperbound * upperbound);
            if(result){
                return upperbound * upperbound;
            };
            status = 0;
        } else {
            let result = isPalindrome((upperbound - 1) * upperbound);
            if(result){
                return upperbound - 1 * upperbound;
            };
            status = 1;
            upperbound -= 1;
        }
    };
};

function isPalindrome(number){
    let numString = number.toString();
    let indexLength = numString.length - 1;
    let midPoint = Math.ceil(numString.length / 2) - 1;

    for(let i = 0; i <= midPoint; i++){
        if(numString[i] !== numString[indexLength - i]){
            return false;
        };

        if(i === midPoint){
            return true;
        };
    };
};


//TEST(S)
console.log(findLargestPalindromeProduct()); //Return: 906609
// console.log(isPalindrome(906609)); //Return: true or false