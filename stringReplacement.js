//Function for replacing strFind with strReplace in the string strOrig
function ReplaceString(strOrig, strFind, strReplace){
    return strOrig.split(strFind).join(strReplace);
}

//Runs function using the strings typed after `node stringReplacement.js` in the command line
const newString = ReplaceString(process.argv[2], process.argv[3], process.argv[4]);

console.log(newString);
