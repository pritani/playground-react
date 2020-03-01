import React from'react'
import {Link} from 'react-router-dom'
function Assignments(props){
    return(
        <div>
            <h1>listing Assignments</h1>
            <ul>
                <li><Link to="/assignments/random">Random</Link></li>
                <li><Link to="/assignments/radio">Radio</Link></li>
                <li><Link to="/assignments/selected">Selected</Link></li>
                <li><Link to="/assignments/capital">Capital</Link></li>
                <li><Link to="/assignments/checkbox">Checkbox</Link></li>
                <li><Link to="/assignments/dropcolor">Dropcolor</Link></li>
                <li><Link to="/assignments/fetch">Fetch</Link></li>
                <li><Link to="/assignments/bill">Bill</Link></li>
                <li><Link to="/assignments/count">Count</Link></li>
                <li><Link to="/assignments/form1">Form1</Link></li>
                <li><Link to="/assignments/form2">Form2</Link></li>
                <li><Link to="/assignments/getUser">GetUser</Link></li>
                <li><Link to="/assignments/selectunselect">SelectCheckbox</Link></li>
                <li><Link to="/assignments/listtable">ListTable</Link></li>
                <li><Link to="/assignments/shuffle">shuffle</Link></li>
                <li><Link to="/assignments/catch">Catch</Link></li>
                <li><Link to="/assignments/toggle">Toggle</Link></li>
                <li><Link to="/assignments/removebutton">RemoveButton</Link></li>
                <li><Link to="/assignments/autofill">AutoFill</Link></li>

            </ul>
        </div> 
    )
}
export default Assignments