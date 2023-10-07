"use client";

import React, { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input
      type="checkbox"
      className="h-4 w-4"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
