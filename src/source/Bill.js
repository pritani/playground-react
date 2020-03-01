import React from 'react'
class Bill extends React.Component{
    constructor(){
        super()
        this.state={
            serviceprovider:''
        }
        this.handleService=this.handleService.bind(this)
    }
    handleService(e){
        e.preventDefault()
const serviceprovider=[e.target.value]
this.setState({serviceprovider})
}
    render(){
        return(
            <div>
            <h2>Pay Bill for {this.state.serviceprovider}</h2>
            <input type='radio' name='user' value='vodafone' onClick={this.handleService}/>vodafone
    <input type='radio' name='user' value='airtel' onClick={this.handleService}/>airtel
    <input type='radio' name='user' value='jio' onClick={this.handleService}/>jio
            <form>
            <input type='text'  placeholder= {`enter your ${this.state.serviceprovider} number`}/>
            </form>
            </div>
        )
   
    }
}
export default Bill