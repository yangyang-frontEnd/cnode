import React from "react"
import {useParams } from "react-router-dom"
 function Inner(params) {
     let {type,page} = useParams()
     console.log(useParams());
    return (<div>
        我是Inner
    </div>)
}
export default Inner