import React from 'react'
class Catch extends React.Component{
    constructor(){
        super()
        this.state={
            number:'',
            evens:[]
        }
    }
    componentDidMount(){
        setInterval(()=>{
            const number=Math.round(Math.random()*100)
            this.setState({number})
            if(number%2===0){
                this.setState(prevState=>({
                    evens:prevState.evens.concat(number)
                }))
            }
        },1000)
    }
render(){
    return(
        <div>
            <h1>{this.state.number}</h1>
            <ul><h2>even</h2>
                {this.state.evens.map((num,i)=>{
                    return <li key={i}>{num}</li>
                })}
                </ul>
                </div>
    )
}
}
export default Catch