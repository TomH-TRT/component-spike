import React from "react";
import ReactDOM from "react-dom";
import Button from "./";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should have a btn component", () => {
  const wrapper = shallow(<Button name="Test" />);
  expect(wrapper.find("button")).toHaveLength(1);

  expect(wrapper.find("button").text()).toEqual("Test");
});
