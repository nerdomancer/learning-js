import React from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", function () {
    let mounted;
    beforeEach(() => mounted = shallow(<Map />));

    it("renders without crashing", () => {
        let mounted = shallow(<Map />);
    });

    it("contains an image", () => {
        let img = mounted.find("img");
        expect(img.length).toBe(1);
    });
});

describe("Default map", function () {
    let mounted;
    let props = {
        location : undefined,
        imageName : undefined
    };

    beforeEach(() => mounted = shallow(<Map {...props} />));

    it("renders default map when no input is given to it", () => {
        let defaultMap = mounted.find("img[src='images/none.png']");
        expect(defaultMap.length).toBe(1);
    });
});

describe("Selected map", function () {
    let mounted;
    let props = {
        location : "test",
        imageName : "testImage.png"
    };

    beforeEach(() => mounted = shallow(<Map {...props} />));
    it("renders map given to it", () => {
        let selectedMap = mounted.find("img[src='images/testImage.png']");
        expect(selectedMap.length).toBe(1);
    });
});
