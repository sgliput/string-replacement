window.replacer = window.replacer || {};

(function() {
	function ReplaceString(strOrig, strFind, strReplace) {
        const originalStringP = document.getElementById("originalString");
        const newStringP = document.getElementById("newString");
        const newString = strOrig.split(strFind).join(strReplace);
        newStringP.innerHTML = newString;
    }
    
    function showNewString() {
        const originalString = document.getElementById("original").value;
        const stringToRemove = document.getElementById("toRemove").value;
        const stringToInsert = document.getElementById("toInsert").value;
        ReplaceString(originalString, stringToRemove, stringToInsert)
    }
    
    window.replacer.init = function() {
        document.getElementById('btn').addEventListener("click", showNewString);
    };
})();
