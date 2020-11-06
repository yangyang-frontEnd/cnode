import React from "react"
import Nav from "./components/nav";
import {Switch, Route} from "react-router-dom"
import router from "./router/router";

function App() {
    return (
        <div className="wrap">
            <Nav/>
            <Switch>
                {
                    router.map((item, index) => {
                        return (<Route
                            key={index}
                            path={item.path}
                            exact={item.exact}
                            render={item.render}
                        />)
                    })
                }
            </Switch>
        </div>
    )
}

export default App
