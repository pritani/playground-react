import React from 'react'
import axios from 'axios'
class GetUser extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            id:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)

    }
    handleSubmit(e){
        e.preventDefault()
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then((response)=>{
            const users=response.data
            console.log(users)
            this.setState({users})
        })
       .catch((err)=>{
           this.setState({
               users:{}
           })
            alert(err)
        })
    }
        handleChange(e){
        const id=e.target.value
        this.setState({id})
        }
    render(){
        return(
            <div>
            
            <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.users.id} onChange={this.handleChange}/>
            <input type='submit'/>
            </form>
            <h1>Get User info</h1>
            <p>{this.state.id}{this.state.name}</p>
          
            </div>
        )
    }
        }
        export default GetUser