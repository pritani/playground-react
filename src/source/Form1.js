import React from 'react'
class Form1 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        list :[
            {id:'1',name:'user1',email:'user1@gmail.com'},
        {id:'2',name:'user2',email:'user2@gmail.com'},
        {id:'3',name:'user3',email:'user3@gmail.com'}
        ],
        isSubmitted:false
      }
      this.handleSubmit=this.handleSubmit.bind(this)
      this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({isSubmitted:true})
        console.log(this.state.email) 
    }
    handleChange(e){
        const email=e.target.value
        this.setState((prevState)=>{
            return{
                list:prevState.list.filter(lis=>lis.email!=email)
            }
        })
    }
    
    render() {
      return (
        <div>
          <h1>Listing Users-{this.state.list.length}</h1>
          <table border='1'>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                </tr>
                </thead>
  <tbody>
    {
    this.state.list.map(item=>(
      <tr key ={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email} </td>
        </tr>
    ))
    }
    </tbody>
            </table>
            <h2>Form</h2>
            <form onSubmit={this.handleSubmit}>
              <input type='text' value={this.state.list.email} onChange={this.handleChange}/>
              <input type='submit' value='submit'/>
              </form>
              {this.state.isSubmitted && <Form1/>}
        </div>
      )
    }
}
  export default Form1