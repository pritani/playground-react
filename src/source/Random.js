import React from 'react'
class Random extends React.Component{
    constructor(){
        super()
        this.state={
            number:'',
            display:true
        }
        this.handleClick=this.handleClick.bind(this)
    }
handleClick(){
const number=Math.round(Math.random()*100)
this.setState({number:number,display:false})
setTimeout(()=>{
this.setState({display:true})
},2000)
}
render(){
        return(
            <div>
          
     {this.state.display?<button onClick={this.handleClick}>Generate</button>:<h2 class={'text-center'
    }>{this.state.number}</h2>}
            </div>
        )
    }

}
export default Random