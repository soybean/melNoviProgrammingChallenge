import React from 'react';
import { useState } from 'react';
import type { CustomerDataType } from '../getData';
import Row from './Row';


interface CustomerDataTablePropsType {
    data: CustomerDataType[],
}

export default function CustomerDataTable(props: CustomerDataTablePropsType) {
    const [isExpanded, setIsExpanded] = useState(false);

    const onRowClick = () =>
    {
        console.log("On row click");
        setIsExpanded(!isExpanded);
    }
    const renderRows = () =>
    {
        return <tbody>
            {props.data.map((row, idx) => <Row rowData={row} onRowClick={onRowClick} isExpanded={isExpanded} key={idx}/>)}
        </tbody>
    }

   return( <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Occupation</th>
                <th># of cats</th>
                <th>H2O (L)</th>
                {!isExpanded && <th>Location</th>}
                {isExpanded && (
                    <>
                    <th>
                        Phone #
                    </th>
                    <th>
                    Favorite Color
                </th>
                <th>
                    What's best in life?
                </th>
                <th>
                    Education level
                </th>
                </>
                )}
                </tr>
            </thead>
            {renderRows()}
        </table> );

}