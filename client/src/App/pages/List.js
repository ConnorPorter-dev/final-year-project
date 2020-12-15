import React, { Component } from 'react';
import CodeComponent from './Components/CodeComponent';
import CustomCode from './Components/CustomCode';

const List = () => {
  const example = ["Line 1", "     Line 2", "     Line 3"]
  return (
    <div>
      <CodeComponent code="dont break please" />
      <CustomCode lines={example} />
    </div>
  )
}

export default List;