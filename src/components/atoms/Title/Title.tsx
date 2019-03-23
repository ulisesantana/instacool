import React, {FunctionComponent} from 'react';

export const AbsoluteCenter: FunctionComponent = ({children}) => (
  <div style={{
    alignItems: 'center',
    display: 'flex',
    height: 'available',
    justifyContent: 'center'
  }}>
    {children}
  </div>
);

export default AbsoluteCenter;