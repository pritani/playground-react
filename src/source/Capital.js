import React from 'react'
class Capital extends React.Component{
    constructor(){
        super()
        this.state={
            content:''
        }
        this.handleCapital=this.handleCapital.bind(this)
    }
    handleCapital(e){
        e.preventDefault()
        e.target.value=(''+e.target.value).toUpperCase()
        const content=e.target.value
        this.setState=({content})
    }
    render(){
        return(
            <div>
                <h1>Display in Caps</h1>
                <form>
                    <input type='text' rows='5' cols='33' onInput={this.handleCapital}/>
                    </form>
                </div>
        )
    }
}
export default Capital