/**
 * @param {string} moves 
 * @returns {boolean}
 */
function judgeCircle(moves){
    let location = 0;
    for (let i = 0; i < moves.length; i++) {
        let letter = moves[i];
        switch(letter){
            case "U":
                location++;
                break;
            case "D":
                location--;
                break;
            case "L":
                location--;
                break;
            case "R":
                location++;
                break;
            default:
                console.log("Not a Possible Movement.");
        };
    };

    if(location === 0){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
};

//TESTS
judgeCircle("UD"); //true
judgeCircle("LL"); //false
judgeCircle("UDLR"); //true
judgeCircle("UDLLRRR"); //false