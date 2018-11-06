import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";
import { isRegExp } from "util";
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";

describe("Button", function() {
    let mounted;
    beforeEach(() => mounted = shallow(<Button />));

    it("renders without crashing", () => {
      let mounted = shallow(<Button />);
    });

    it("renders a button", () => {
        let buttons = mounted.find(".location-button");
        expect(buttons.length).toBe(1);
    });
});


describe("When a location is passed to it", function() {
    let mounted;
    let props;

    beforeEach(() => {
        props = {
            location: "Location1"
        };
        mounted = shallow(<Button {...props}/>)
    });

    it("displays the location", () => {
        let buttonWithLocationName = mounted.find(".location-button");
        expect(buttonWithLocationName.text()).toBe("Location1");
    });

    // TODO
    // it("has the value of the location", () => {
    //     let buttonWithLocationName = mounted.find(".location-button");
    //     console.log(mounted.debug());
        
    //     expect(buttonWithLocationName.value).toBe("Location1");
    // });
});

describe("When location is not passed to it", function() {
    let mounted;
    let props;

    beforeEach(() => {
        props = {
            location: undefined
        };
        mounted = shallow(<Button {...props}/>)
    });

    it("displays the default location", () => {
        let buttonWithLocationName = mounted.find(".location-button");
        expect(buttonWithLocationName.text()).toBe("All Locations");
    });
});

describe("click", function() {
    it("calls a callback function passed to it", function() {
        let mockCallback = jest.fn();
        let mounted = shallow(<Button handleClick={mockCallback} />);
        let buttonWithLocationName = mounted.find(".location-button");
        buttonWithLocationName.simulate("click");
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});