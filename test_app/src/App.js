import React, {Component} from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Register from './pages/register/register'
import Forgot from './pages/forgot/forgot'
//admin子页面
import Link from './pages/admin/game/link'
//应用根组件

export default class App extends Component {


    render() {
        return (
            < BrowserRouter >
                <Switch exact={true} >
                    {/* 路由 key对应value       前台路由value对应组件component   后台路由value对应回调函数 */}
                    <Route path="/login" component={Login} />
                     <Route path="/register" component={Register} />
                    <Route path="/forgot" component={Forgot} /> 
                    <Route path="/" component={Admin} />
                </Switch>
                    <Route path = "/admin/game/link" component={Link}/>
            </BrowserRouter>
        )
    }

}

