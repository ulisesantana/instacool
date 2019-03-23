import React, {FunctionComponent} from 'react';

interface Props {
  /**
   * Justify content
   * @default 'center'
   */
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  /**
   * Row width in %
   * @default 'auto'
   */
  width?: number
  /**
   * Wrap or not
   */
  wrap?: boolean
}

export const Column: FunctionComponent<Props> = ({children, justify, width, wrap}) => (
  <div style={{
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify ? justify : 'center',
    width: width ? `${width}%` : 'auto'
  }}>
    {children}
  </div>
);

export default Column;