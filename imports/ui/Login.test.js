import { Meteor } from "meteor/meteor";
import React from "react";
import expect from "expect";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Login } from "./Login";

if (Meteor.isClient) {
  describe("Login", function() {
    it("should show error messages", function() {
      const error = "this is not working";
      const wrapper = shallow(<Login loginWithPassword={() => {}} />);

      wrapper.setState({ error });
      expect(wrapper.find("p").text()).toBe(error);

      wrapper.setState({ error: "" });
      expect(wrapper.find("p").length).toBe(0);
    });
  });
}
