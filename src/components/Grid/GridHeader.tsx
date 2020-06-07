import React from 'react';

interface IGridHeaderProps {
    headers: string[];
}

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
