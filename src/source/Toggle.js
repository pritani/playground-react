import React from 'react'
class Toggle extends React.Component{
    constructor(){
        super()
        this.state={
        isOn:true
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState)=>{
            return {
                isOn:!prevState.isOn
            }
        })
    }

render(){
    return(
        <div>
        {this.state.isOn?(document.body.style.backgroundColor='white'):(document.body.style.backgroundColor='black')}
        <button onClick={this.handleClick}>{this.state.isOn?'Switch to Black':'Switch to White'}</button>
        </div>
    )
}
}
export default Toggle