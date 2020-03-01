import React from 'react'
class DropColor extends React.Component{
    constructor(){
        super()
        this.state={
colors:['red','green','black','yellow','pink']
}
    }
    
    render(){
        return(
            <div>
                <ColorList colors={this.state.colors}/>
            </div>
        )
    }
}

function ColorList(props){
    function handleChange(e){
        const value=e.target.value
    
       // console.log(value)
       document.body.style.backgroundColor=value 

      //  alert(`${e.target.value} was selected`)
    
    }
   return(
       <div>
        <select onChange={handleChange} >>
            <option value="">select</option>
            {
props.colors.map((colo,i)=>{
    return(
    <option key={i} value={colo}  style={{backgroundColor:colo}}>{colo}</option>
    )
})
            }
            </select>
        </div>
   ) 
}
export default DropColor
