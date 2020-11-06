import React from "react"
function List(props){
    let {data} = props
    return (
        <ul>
            {data.map((item,index)=>{
                return (
                    <li key={index} >{item.title}</li>
                )
            })}
        </ul>
    )
}
export default List
