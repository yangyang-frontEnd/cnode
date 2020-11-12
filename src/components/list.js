import React from "react"
import {useSelector} from "react-redux"
function List(){
    let data = useSelector(state=>{
        return state.data
    })
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
