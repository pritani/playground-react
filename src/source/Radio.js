import React from 'react'
class RadioButton extends React.Component{
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
            <Radio users={this.state.users}/>
            </div>
        )
    }
}
function Radio(props){
return(
    <div>
            <ul>
        {  
       props.users.map(user=>{
                        return <li >
                        { <input type='radio' name='us' onClick={()=>{
                            alert('you selected '+user.name) }}/>}
                            {user.name}
                    </li>

                    })
        }
        </ul>
        </div>
    )
}
export default RadioButton