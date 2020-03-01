import React from'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Assignments from './Assignments'
import Random from './source/Random'
import RadioButton from './source/Radio' 
import Selected from './source/Selected'
import Capital from './source/Capital'
import Check from './source/Checkbox'
import DropColor from './source/DropColor'
import Fetch from './source/Fetch'
import Bill from './source/Bill'
import CountDown from './source/CountDown'
import Form1 from './source/Form1'
import Form2 from './source/Form2'
import GetUser from './source/getUser'
import Select from './source/SelectUnselect'
import ListTable from './source/ListTable'
import Shuffle from './source/Shuffle'
import Catch from './source/CatchEven'
import Toggle from './source/Toggle'
import RemoveButton from './source/RemoveButton'
import UsersList from './component/UserList'
import UserShow from './component/UserShow'
//import AutoFill from './source/Autofill'
function App(props){
    
    return(
        <BrowserRouter>
        <div>
            <h1>Hello React</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/assignments">Assignments</Link>
            <Link to="/users">Userslist</Link>



            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/assignments/radio" component={RadioButton}/>
            <Route path="/assignments/random" component={Random}/>
           <Route path="/assignments/selected" component={Selected}/>
           <Route path="/assignments/capital" component={Capital}/>
           <Route path="/assignments/checkbox" component={Check}/>
           <Route path="/assignments/dropcolor" component={DropColor}/>
           <Route path="/assignments/fetch" component={Fetch}/>
           <Route path="/assignments/bill" component={Bill}/>
           <Route path="/assignments/count" component={CountDown}/>
           <Route path="/assignments/form1" component={Form1}/>
           <Route path="/assignments/form2" component={Form2}/>
           <Route path="/assignments/getUser" component={GetUser}/>
           <Route path="/assignments/selectunselect" component={Select}/>
           <Route path="/assignments/listtable" component={ListTable}/>
           <Route path="/assignments/shuffle" component={Shuffle}/>
           <Route path="/assignments/shuffle" component={Shuffle}/>
           <Route path="/assignments/catch" component={Catch}/>
           <Route path="/assignments/toggle" component={Toggle}/>
           <Route path="/assignments/removebutton" component={RemoveButton}/>
          {/* <Route path="/assignments/autofill" component={AutoFill}/> */}
           <Route path="/users" component={UsersList} exact={true}/>
           <Route path="/users/:id" component={UserShow}/>

           


            <Route path="/assignments" component={Assignments} exact={true}/>


        </div>
        </BrowserRouter>
    )
}
export default App
