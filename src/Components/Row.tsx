import React from 'react';
import type { CustomerDataType } from '../getData';

interface RowPropsType {
    rowData: CustomerDataType;
    onRowClick: () => void;
    isExpanded: boolean;
}

export default function Row(props: RowPropsType) {
    return (
    <tr onClick={props.onRowClick}>
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
        {!props.isExpanded && <td>
            {props.rowData.location}
        </td>}
        {props.isExpanded && 
        <>
        <td>
            {props.rowData.phoneNumber}
        </td>
        <td>
            {props.rowData.favColor}
        </td>
        <td>
            {props.rowData.whatsBest}
        </td>
        <td>
            {props.rowData.educationLevel}
        </td>
        </>
        }
    </tr>);
}