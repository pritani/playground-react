import React from 'react'
import axios from 'axios'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{}
        }
}
componentDidMount(){
    const id=this.props.match.params.id
    console.log(id)
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
        const user=response.data
        this.setState({user})
    })
    .catch(err=>{
        alert(err)
    })
}
    render(){
        console.log(this.state.user.name)
        return(
            <div>
                <h2>User Show-{this.props.match.params.id}</h2>
                <p>{this.state.user.name}-{this.state.user.email}</p>
            </div>
        )
    }
}
export default UserShow