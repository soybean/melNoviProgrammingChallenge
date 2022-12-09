import React from 'react';
import type { CustomerDataType } from '../getData';

interface RowPropsType {
    rowData: CustomerDataType;
}

export default function Row(props: RowPropsType) {
    return (
    <tr>
        <td>
            {props.rowData.name}
        </td>
        <td>
            {props.rowData.email}
        </td>
        <td>
            {props.rowData.age}
        </td>
        <td>
            {props.rowData.occupation}
        </td>
        <td>
            {props.rowData.numberOfCats}
        </td>
        <td>
            {props.rowData.avgDailyWaterConsumption}
        </td>
        <td>
            {props.rowData.location}
        </td>
    </tr>);
}