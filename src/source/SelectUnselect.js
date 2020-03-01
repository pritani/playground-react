import React from 'react'
class Select extends React.Component{
    constructor(){
        super()
        this.state={
users:[
    {id:1,name:'priyanka',checked:false},
    {id:2,name:'girish',checked:false},
    {id:3,name:'latha',checked:false}
]
        }
    }
    render()
    {
        return(
            <div>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}
function handleClick(user){
    if(user.checked===false){
        user.checked=true
        alert(`you have selected user ${user.id}`)
    }
    else if(user.checked===true){
        user.checked=false
    alert(`you have unselected user ${user.id}`)
    }
}
function UserList(props){
    return(
        <div>
        <ul>
        {
        props.users.map(user=>{
            return<li key={user.id}>
            <input type="checkbox" id={`check${user.id}`} onChange={()=>handleClick(user)}/>{user.name}</li>
        })}
        </ul>
        </div>
    )
}
export default Select