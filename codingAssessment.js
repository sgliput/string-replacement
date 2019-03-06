
function ReplaceString(strOrig, strFind, strReplace) {
    const originalStringP = document.getElementById("originalString");
    const newStringP = document.getElementById("newString");
    //Function that does the actual replacing of strFind with strReplace
    const newString = strOrig.split(strFind).join(strReplace);
    console.log(newString);
    //Insert original string and new string into paragraphs
    originalStringP.innerHTML = `Original String: ${strOrig}`;
    newStringP.innerHTML = `New String: ${newString}`;
}

function showNewString() {
    //Captures current values in the input fields
    const originalString = document.getElementById("original").value;
    const stringToRemove = document.getElementById("toRemove").value;
    const stringToInsert = document.getElementById("toInsert").value;
    //Runs function using input values
    ReplaceString(originalString, stringToRemove, stringToInsert)
}

const button = document.querySelector("#btn");
//Runs function on button click
button.addEventListener("click", showNewString);