import React from 'react'
import axios from 'axios'
class Autofill extends React.Component{
    constructor(){
        super()
        this.state={ 
            username:'',
            name:'',
            email:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
    }
    handleBlur(){
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${this.state.username}`)
        .then(response=>{
            console.log(response.data)
            if(response.data[0]){
                const  name=response.data[0].name
                const email=response.data[0].email
                this.setState({name,email})
            }
        })
        .catch(err=>{
            alert(err)
        })
    }
    handleChange(e){
    //  const username=e.target.value
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        console.log(this.state.name,this.state.email)
        return(
            <div>
<h2>Autofill</h2>
       <p> UserName <input type='text'  name='username' value={this.state.username} onBlur={this.handleBlur}
        onChange={this.handleChange} /></p>
        <p> Name <input type='text'  name='name' value={this.state.name} 
        onChange={this.handleChange} /></p>
        <p> email <input type='text'  name='email' value={this.state.email} 
        onChange={this.handleChange} /></p>
                </div>
        )
    }


}
export default Autofill