import React from 'react'
import { Output, Input } from "../components";

function Handbook() {
  return (
    <div>
      <Output target="Handbook" />
      <div className="mb-[150px]"></div>
      <Input placeholder="Generate a handbook" target="Handbook" />
    </div>
  );
}

export default Handbook;