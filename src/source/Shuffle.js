import React from 'react'
class Shuffle extends React.Component{
    constructor(){
        super()
        this.state={
            numbers:[1,2,3,4,5,6,7,8,9],
        }
    }
    handleClick=()=>{
        this.setState(prevState=>({
            numbers:prevState.numbers.sort(function(){
                return 0.5-Math.random()
            })
        }))
    }
    render(){
        return(
            <div>
                <h1>Random's</h1>
                <ul>
                    {this.state.numbers.map((n,i)=>{
                        return <li key={i}>{n}</li>
                    })}
                    </ul>
                    <button onClick={this.handleClick}>Shuffle</button>
                </div>
        )
    }
    }
    export default Shuffle