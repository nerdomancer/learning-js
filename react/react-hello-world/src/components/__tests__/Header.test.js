import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", function() {
  let mounted;
  beforeEach(() => mounted = shallow(<Header />));

  it("renders without crashing", () => {
    let mounted = shallow(<Header />);
  });

  it("renders a logo", () => {
    let logo = mounted.find("img[src='images/wired-brain-coffee-logo.png']");
    expect(logo.length).toBe(1);
  });
});

