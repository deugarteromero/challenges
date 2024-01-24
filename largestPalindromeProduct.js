//Find Largest Palindrome in a 2 Three Digit Product
function findLargestPalindromeProduct(){
    let largestPalindrome = 0;
    let number1 = 999;
    while(number1 > 99){
        let number2 = 999;
        while(number2 > 99){
            let product = number1 * number2;
            let result = isPalindrome(product);
            if(result){
                largestPalindrome = product > largestPalindrome ? product : largestPalindrome;
            };
            number2--;
        };
        number1--;
    };

    return largestPalindrome;
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