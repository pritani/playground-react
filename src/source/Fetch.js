import React from 'react'
import axios from 'axios'
class Fetch extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
    
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
       .catch((err)=>{
            alert(err)
        })
    }

      
    render(){
        return(
        <div>
        <h1>Listings Users</h1>
        
        <ul>
        {this.state.users.map(function(user){
            return<li key={user.id}>{user.name}</li>
        })}
        </ul>
        <button onClick={this.handleClick}> fetch User</button>
        
        </div>
        )
    }

}
export default Fetch