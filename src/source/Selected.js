import React from 'react'

class Selected extends React.Component{
    constructor(){
        super()
        this.state={
users:[
    {id:1,name:'arjun',isChecked:false},
    {id:2,name:'priya',isChecked:false},
    {id:3,name:'neha',isChecked:false},
    {id:4,name:'geeta',isChecked:false}
    ]
}
    }
    render(){
        return(
            <div>
                <UserList users={this.state.users}/>
            </div>
        )

    }
}
    function UserList(props){
        function handleChange(e){
            alert(`${e.target.value} was selected`)
        }
        return (
            <div>
                <h2>Listing Users-{props.users.length}</h2>
            <select onChange={handleChange}>
                    <option value=""> select</option>}
        {  
          
       props.users.map(user=>{
                        return (
                            <option key={user.id} value={user.name} >{user.name}   </option>
                        )
                    })
        }
        </select>
        </div>
    )
        
    }
export default Selected