function ReplaceString(strOrig, strFind, strReplace){
    return strOrig.split(strFind).join(strReplace);
}

const newString = ReplaceString(process.argv[2], process.argv[3], process.argv[4]);



console.log(newString);
