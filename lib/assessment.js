
function ReplaceString(strOrig, strFind, strReplace) {
    const originalStringP = document.getElementById("originalString");
    const newStringP = document.getElementById("newString");
    const newString = strOrig.split(strFind).join(strReplace);
    console.log(newString);
    originalStringP.innerHTML = `Original String: ${strOrig}`;
    newStringP.innerHTML = `New String: ${newString}`;
}

const button = document.querySelector("#btn");
console.log(button);

function showNewString() {
    const originalString = document.getElementById("original").value;
    const stringToRemove = document.getElementById("toRemove").value;
    const stringToInsert = document.getElementById("toInsert").value;
    ReplaceString(originalString, stringToRemove, stringToInsert)
}

button.addEventListener("click", showNewString);