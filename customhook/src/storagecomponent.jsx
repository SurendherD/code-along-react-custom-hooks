import React from 'react';
import useStorage from './customhooks';

const StorageComponent = () => {
  const [value, setValue] = useStorage('inputValue', '');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Type something:
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default StorageComponent;
