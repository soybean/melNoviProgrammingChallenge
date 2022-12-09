
interface TableHeaderPropsType {
    isExpanded: boolean;
}
export default function TableHeader(props: TableHeaderPropsType) {
    return <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Occupation</th>
            <th># of cats</th>
            <th>H2O (L)</th>
            {!props.isExpanded && <th>Location</th>}
            {props.isExpanded && (
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
}