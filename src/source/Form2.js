import React from 'react'
class Form2 extends React.Component {
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
      this.handleRemove=this.handleRemove.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
    }
    handleRemove(nam){
        const confirmRemove=prompt('Enter the name to confirm')
        if(confirmRemove==nam){
        this.setState((prevState)=>{
            return{
                list:prevState.list.filter(lis=>lis.name!=nam)
            }
        })
      }
        else if(confirmRemove!=nam){
                alert('invalid name')
                    }
          
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
                <th>action</th>
                </tr>
                </thead>
  <tbody>
    {
    this.state.list.map(item=>(
      <tr key ={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{<button onClick={()=>
      {this.handleRemove(item.name)}} value={item.name}>remove</button>} </td>
        </tr>
    ))
    }
    </tbody>
            </table>
            <form onSubmit={this.handleSubmit}>
              </form>
              {this.state.isSubmitted && <Form2/>}
        </div>
      )
    }
  }
  export default Form2
  