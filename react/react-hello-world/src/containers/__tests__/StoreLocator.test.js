import React from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import axios from "axios";

describe("StoreLocator", function() {
  let mounted;

  beforeEach(() => {
    mounted = shallow(<StoreLocator />);
  }); 

  it("renders without crashing", () => {
    let mounted = shallow(<StoreLocator />);
  });
  
  it("calls axios.get in #componentDidMount", () => {
    return mounted.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalled();
    });
  });

  it("calls axios.get with correct url", () => {
    return mounted.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/data/stores.json");
    });
  });

  it("updates the state with result from the api", () => {
    return mounted.instance().componentDidMount().then(() => {
      expect(mounted.instance().state.shops.length).toBe(1);
      expect(mounted.state()).toHaveProperty("shops", [{
        location : "test location",
        address : "test address"
      }]);
    });
  });

  it("renders a Header", () => {
    let mountedHeader = mounted.find("Header");
    expect(mountedHeader.length).toBe(1);
  });

  it("renders buttons", () => {
    return mounted.instance().componentDidMount()
    .then(() => {
      expect(axios.get).toHaveBeenCalled();
    })
    .then(() => {
      let mountedButtons = mounted.find("Button");
      expect(mountedButtons.length).toBe(1);
    });    
  });

  it("renders a map", () => {
    let mountedMap = mounted.find("Map");
    expect(mountedMap.length).toBe(1);
  });
});

describe("Choose map", function() {
  let mounted;

  beforeEach(() => {
    mounted = shallow(<StoreLocator />);
  });

  it("updates the state.currentMap using the location passed to it", () => {
    let mockEvent = {target:{value:"testland"}};
    mounted.instance().chooseMap(mockEvent);
    expect(mounted.instance().state.currentMap).toBe("testland.png");
  });
});