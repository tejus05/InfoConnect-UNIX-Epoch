import React from 'react'
import { Output, Input } from '../components';

function Process() {
  return (
    <div>
      <Output target="Process" />
      <div className="mb-[150px]"></div>
      <Input placeholder="Guide me through a process" target="Process" />
    </div>
  );
}

export default Process
