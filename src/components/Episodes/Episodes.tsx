import React from "react";
import SeasonFirst from "../Seasons/SeasonFirst";
import SeasonTwo from "../Seasons/SeasonTwo";

export default function Episodes() {
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        marginRight: "5px",
        paddingBottom: "12px"
      }}
    >
      <SeasonFirst />
      <SeasonTwo />
    </div>
  );
}
