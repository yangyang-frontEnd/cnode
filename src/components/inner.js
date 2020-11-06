import React, {Fragment, useState,useEffect} from "react"
import List from "./list";
import FooterNav from "./footerNav";
import getData from "../http";
import {useParams} from "react-router-dom"

function Inner() {
    let {type, page} = useParams()
    let [data, setData] = useState([])
    let [isLoad, setLoad] = useState(true)

    useEffect(()=>{
        if (isLoad){
            getData(type,page).then((res)=>{
                setData(res.data.data)
                setLoad(false)
            })
        }
    },[isLoad, page, type])

    useEffect(()=>{
        setLoad(true)
    },[type,page])

    return (
        <div>
            {
                !isLoad ? <p>请求数据加载中...</p> :
                    (<Fragment>
                        <List data={data}/>
                        <FooterNav/>
                    </Fragment>)
            }
        </div>
    )
}

export default Inner
