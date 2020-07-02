import LandingPage from "../../src/components/LandingPage";
import React from "react";
import ReactDOM from "react-dom";

describe("LandingPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
