import React, {Component} from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Register from './pages/register/register'
import Forgot from './pages/forgot/forgot'
//应用根组件

export default class App extends Component {


    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* 路由 key对应value       前台路由value对应组件component   后台路由value对应回调函数 */}
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgot" component={Forgot} /> 
                    <Route path="/" component={Admin} />
                </Switch>
            </HashRouter>
        )
    }

}