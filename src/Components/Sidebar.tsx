import type { CustomerDataType } from '../getData';

interface SidebarPropsType {
    rowData: CustomerDataType | undefined;
    isExpanded: boolean;
    onToggle: (d: CustomerDataType | undefined) => void;
}

export default function Sidebar(props: SidebarPropsType) {
    if (props.isExpanded && props.rowData) {
        return (
            <div className="sidebar expanded">
                <h1>{props.rowData.name}</h1>
              <strong>Phone number</strong>
              <p>{props.rowData.phoneNumber}</p>
    
              <strong>
                  Favorite color
              </strong>
              <p>{props.rowData.favColor}</p>
    
              <strong>What's best in life?</strong>
              <p>{props.rowData.whatsBest}</p>
              <strong>Education level</strong>
              <p>{props.rowData.educationLevel}</p>
              <button onClick={() => {props.onToggle(props.rowData)}}>
                Collapse
              </button>
            </div>
          );
    }
    return <></>;
    
}