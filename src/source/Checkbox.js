import React from 'react'
class Check extends React.Component{
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
<Checkbox users={this.state.users}/>
            </div>
    )
}
    }

function Checkbox(props){
    return(
        <div>
            <ul>
            
        {  
        props.users.map(user=>{
                        return <li key={user.id} >
                        { <input type='checkbox' onClick={()=>{
                            alert('you selected '+user.name) }}/>}

                        {user.name}</li>

                    })
        }
        </ul>
        </div>
    )
}
export default Check