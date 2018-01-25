import { Meteor } from "meteor/meteor";
import React from "react";
import expect from "expect";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PrivateHeader from "./PrivateHeader";

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe("PrivateHeader", function() {
    it("should set button text to logout", function() {
      const wrapper = mount(<PrivateHeader title="Test Title" />);
      const buttonText = wrapper.find("button").text();

      expect(buttonText).toBe("Logout");
    });
  });
}
