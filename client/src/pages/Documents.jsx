import React from 'react'
import { Output, Input } from "../components";

function Documents() {
  return (
    <div>
      <Output target="Documents" />
      <div className="mb-[150px]"></div>
      <Input
        placeholder="Checklist of required documents."
        target="Documents"
      />
    </div>
  );
}

export default Documents
