import { useState } from 'react';
import type { CustomerDataType } from '../getData';
import Row from './Row';
import TableHeader from "./TableHeader";
import Sidebar from './Sidebar';


interface CustomerDataTablePropsType {
    data: CustomerDataType[],
}

export default function CustomerDataTable(props: CustomerDataTablePropsType) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedRow, setSelectedRow] = useState<CustomerDataType | undefined>();

    const onRowClick = (rowData: CustomerDataType | undefined) =>
    {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setSelectedRow(rowData);
        }
        else {
            setSelectedRow(undefined);
        }
    }
    const renderRows = () =>
    {
        return <tbody>
            {props.data.map((row, idx) => <Row rowData={row} onRowClick={onRowClick} key={idx} />)}
        </tbody>
    }

   return (
       <>
       <table>
           <TableHeader/>
           {renderRows()}
       </table>
       <Sidebar rowData={selectedRow} isExpanded={isExpanded} onToggle={onRowClick}/>
       </>
       
    );
}