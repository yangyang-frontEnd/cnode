import React from "react"
import Nav from './component/nav'
import {Route, Switch} from "react-router-dom"
import router from "./router/router"

function App() {
    return (
        <div className="wrap">
            <Nav></Nav>
<Switch>
    {
        router.map((item,index)=>{
            return <Route path={item.path} key={index} exact={item.exact} render={(props)=>{
                // return  item.render({info,...props})
                return item.render(props)
            }}></Route>
        })
    }
</Switch>
        </div>
    )
}

export default App
