
describe("String Replacer", function () {

    // inject the HTML fixture for the tests
    beforeEach(function () {
        var form = '<form class="search-form" id="form">' +
            '<input type="text" class="search" id="original" placeholder="Original String">' +
            '<input type="text" class="search" id="toRemove" placeholder="String to Remove">' +
            '<input type="text" class="search" id="toInsert" placeholder="String to Insert">' +
            '<button type="button" id="btn">Replace</button>' +
            '<p id="newString"></p></form>';

        document.body.insertAdjacentHTML(
            "afterbegin",
            form);
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        document.body.removeChild(document.getElementById("form"));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function () {
        window.replacer.init();
    });

    it('should return "redbird" for "bluebird"', function () {
        document.getElementById("original").value = "bluebird";
        document.getElementById("toRemove").value = "blue";
        document.getElementById("toInsert").value = "red";
        document.getElementById("btn").click();
        expect(document.getElementById("newString").innerHTML).toBe("redbird");
    });

    it('should return "The world is round and world-ish." for "The globe is round and globe-ish."', function () {
        document.getElementById("original").value = "The world is round and world-ish.";
        document.getElementById("toRemove").value = "world";
        document.getElementById("toInsert").value = "globe";
        document.getElementById("btn").click();
        expect(document.getElementById("newString").innerHTML).toBe("The globe is round and globe-ish.");
    });

    it(`should return "Rove's Rabour's Rost" for "Love's Labour's Lost"`, function () {
        document.getElementById("original").value = "Love's Labour's Lost";
        document.getElementById("toRemove").value = "L";
        document.getElementById("toInsert").value = "R";
        document.getElementById("btn").click();
        expect(document.getElementById("newString").innerHTML).toBe("Rove's Rabour's Rost");
    });

    it('should return "walk, walking, walked" for "click, clicking, clicked"', function () {
        document.getElementById("original").value = "walk, walking, walked";
        document.getElementById("toRemove").value = "walk";
        document.getElementById("toInsert").value = "click";
        document.getElementById("btn").click();
        expect(document.getElementById("newString").innerHTML).toBe("click, clicking, clicked");
    });

});