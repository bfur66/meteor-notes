import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import ReactDOM from "react-dom";
import { Session } from "meteor/session";

import { routes, onAuthChange } from "../imports/routes/routes";
import "../imports/startup/simple-schema-configuraton";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
