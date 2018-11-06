import mapChooser from "../mapChooser.js";

describe("mapChooser", function(){
    it("returns an image file name based on input given to it", function () {
        let expected = "portland.png";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    it("returns default file name when no input is given", function() {
        let expexted = "none.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expexted);
    });
});