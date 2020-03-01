import React from 'react'
class ListTable extends React.Component{
    constructor(){
        super() 
        this.state={
            users:[
                {id:1,name:'priyanka',email:'priyaka@gmail.com'},
                {id:2,name:'priya',email:'priya@gmail.com'},
                {id:3,name:'neha',email:'neha@gmail.com'},
            ],
            isList:true
        }
        
    }
    handleChange=(e)=>
    {
        console.log(e.target.value)
        const isList=e.target.value=='list'?true:false
      
        this.setState({isList})
    }
    render(){
        return(
            <div>
                <h2>Listing Users-{this.state.users.length}</h2>
                <form onChange={this.handleChange}>
             <input type='radio' name='us' value='list' checked={this.state.isList} />List
             <input type='radio' name='us' value='table'/>Table
</form>
{
    this.state.isList?
    <ul>
    {
        this.state.users.map((user)=>{
            return(
                <li key={user.id}>{user.id}-{user.name}-{user.email}</li>
            )
        })
    }
    </ul>
:
<table border='1'>
<thead>
<tr>
<th>Id</th>
<th>Name</th>
<th>email</th>
</tr>
</thead>
<tbody>
{
    this.state.users.map((user)=>{
        return(
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            </tr>
        )
    })
}
    </tbody>
    </table>
}

      </div>
        )
    }
}
export default ListTable