import React from "react"
import nav_data from "../router/nav";
import {NavLink, useLocation} from "react-router-dom"

function Nav() {
    let {pathname} = useLocation()
    pathname = pathname.split('/')
    // ["", "share", "1"]
    // console.log(pathname)

    return (
        <nav className={"nav"}>
            {
                nav_data.map((item, index) => {
                    let url = item.url.split('/')
                    return (
                        <NavLink
                            key={index}
                            to={item.url}
                            exact={item.exact}
                            activeClassName={"active"}
                            /*
                            // 由于设置了精准匹配，需要自定义是否选中规则，否则匹配不上
                            isActive={() => {
                                return url[1] === pathname[1] && pathname[2] > 0
                            }}*/
                        >
                            {item.txt}
                        </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default Nav
