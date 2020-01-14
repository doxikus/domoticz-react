import React from 'react';

function DeviceItem({ name, ...restProps }) {
    return <dd {...restProps}></dd>;
  }
export default DeviceItem;