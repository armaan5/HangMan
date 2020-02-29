const qwerty = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m'
];

function matchIndicies(arr, target){
    let matches = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === target){
            matches.push(i);
        }
    }
    return matches;
};

function replaceWithLetter(indicies, letter, currWord) {
    for(var i = 0; i < indicies.length; i++){
        for(var j = 0; j < currWord.length; j++){
            if(indicies[i] == j){
                currWord[j] = letter;
            }
        }
    }
    return currWord;
};

export {qwerty, matchIndicies, replaceWithLetter};