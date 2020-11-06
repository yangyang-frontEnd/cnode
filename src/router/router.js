import React from "react"
import {Redirect} from "react-router-dom"
import Inner from "../components/inner";
import Page404 from "../components/Page404";

const types = ["all", "good", "share", "dev", "ask", "job"]

const router = [
    {
        path: "/",
        exact: true,
        render() {
            return <Redirect to={"/all/1"}/>
        }
    },
    {
        path: "/:type/:page",
        exact: true,
        render(props) {
            let {pathname} = props.location
            // console.log(props.location)
            /*
            * {pathname: "/dev/1", search: "", hash: "", state: null, key: "20m5wh"}
                hash: ""
                key: "20m5wh"
                pathname: "/dev/1"
                search: "" // ? 后参数
                state: null
                __proto__: Object
            * */
            pathname = pathname.split('/')
            if (types.includes(pathname[1])) {
                if (pathname[2] > 0) {
                    return <Inner/>
                }
            }
            return <Page404/>
        }
    },
    {
        path: '/:type',
        exact: true,
        render(props) {
            let {pathname} = props.location
            pathname = pathname.split('/')
            if (types.includes(pathname[1])) {
                return <Redirect to={`/${pathname[1]}/1`}/>
            }
            return <Page404/>
        }
    },
    {
        path: "",
        exact: true,
        render() {
            return <Page404/>
        }
    }
]

export default router
