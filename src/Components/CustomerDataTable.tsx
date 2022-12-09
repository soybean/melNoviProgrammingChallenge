import React from 'react';
import type { CustomerDataType } from '../getData';
import Row from './Row';


interface CustomerDataTablePropsType {
    data: CustomerDataType[],
}

export default function CustomerDataTable(props: CustomerDataTablePropsType) {

    const renderRows = () =>
    {
        return <tbody>
            {props.data.map(row => <Row rowData={row}/>)}
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
                <th>Avg daily water consumption (L)</th>
                <th>Location</th>
                </tr>
            </thead>
            {renderRows()}
        </table> );

}