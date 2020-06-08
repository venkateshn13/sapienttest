import React from 'react';

/**
 * Interface for grid header props.
 */
interface IGridHeaderProps {
    headers: string[];
}

/**
 * Grid Header component.
 * @param props 
 */
export default function GridHeader(props: IGridHeaderProps) {
    const { headers } = props;

    return (
        <thead><tr style={{ backgroundColor: '#ff6600' }}>
            {
                headers && headers.map((header: string, index: number) =>
                    <td align="left" key={index}>
                        <span className="pagetop head">
                            {header}
                        </span>
                    </td>)
            }
        </tr></thead>
    );
}
