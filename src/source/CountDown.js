import React from 'react'
class CountDown extends React.Component{
    constructor(){
    super()
    this.state={
        count:10
    }
    this.handleClick=this.handleClick.bind(this)
}
handleClick(){
    const time=setInterval(()=>{
        if(this.state.count>0){
            this.setState((prevState)=>{
                return{
                    count:prevState.count-1
                }
            })
        }
            else{
                clearInterval(time)
            }
            
         }, 1000)
}
    render() {
        return(
            <div>
          <h1  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> {this.state.count===10?this.handleClick():''}{this.state.count} seconds</h1>
                </div>

        )
            }
        }
        export default CountDown