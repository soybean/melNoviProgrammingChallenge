import type { CustomerDataType } from '../getData';

interface RowPropsType {
    rowData: CustomerDataType;
    onRowClick: (d: CustomerDataType) => void;
}

export default function Row(props: RowPropsType) {
    return (
    <tr onClick={() => {props.onRowClick(props.rowData)}}>
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
    </tr>);
}