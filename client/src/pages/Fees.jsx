import React from 'react'
import { Output, Input } from "../components";

function Fees() {
  return (
    <div>
      <Output target="Fees" />
      <div className="mb-[150px]"></div>
      <Input placeholder="Explain the fee structure. " target="Fees" />
    </div>
  );
}

export default Fees
