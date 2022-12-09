import { useState } from 'react';
import type { CustomerDataType } from '../getData';
import Row from './Row';
import TableHeader from "./TableHeader";


interface CustomerDataTablePropsType {
    data: CustomerDataType[],
}

export default function CustomerDataTable(props: CustomerDataTablePropsType) {
    const [isExpanded, setIsExpanded] = useState(false);

    const onRowClick = () =>
    {
        setIsExpanded(!isExpanded);
    }
    const renderRows = () =>
    {
        return <tbody>
            {props.data.map((row, idx) => <Row rowData={row} onRowClick={onRowClick} isExpanded={isExpanded} key={idx} />)}
        </tbody>
    }

   return (
       <table>
           <TableHeader isExpanded={isExpanded} />
           {renderRows()}
       </table>
    );
}