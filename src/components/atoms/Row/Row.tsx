import React, {FunctionComponent} from 'react';

interface Props {
    /**
     * Justify content
     * @default 'space-between'
     */
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    /**
     * Wrap or not
     */
    wrap?: boolean
}

export const Row: FunctionComponent<Props> = ({children, justify, wrap}) => (
    <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        justifyContent: justify ? justify : 'space-between',
        width: '100%'
    }}>
        {children}
    </div>
);

export default Row;