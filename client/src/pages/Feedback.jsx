import React from "react";
import { Output, Input } from "../components";

function Feedback() {
  return (
    <div>
      <Output target="Feedback" hidden={true}/>
      <div className="mb-[150px]"></div>
      <Input placeholder="Please give us a feedback. " target="Feedback" />
    </div>
  );
}

export default Feedback;
