import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", function () {
  
  // Arrange
  let mounted; 
  beforeEach(() => mounted = shallow(<App />));

  it("renders without crashing", () => {
    mounted = shallow(<App />);
  });
});