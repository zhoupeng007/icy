import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import App from '../App'
import {Provider} from 'react-redux'
import Designer from '../views/Designer'
import Icon from '../views/Icon'
import Goods from '../views/Goods'
import store from './../Redux/store'
import Suitdetail from './../views/Suitdetail'
const router = (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/icy/designer" render={()=>
              <Designer>
                
              </Designer>
          }/>
          <Route path="/icy/icon" component={Icon}/>
          <Route path="/icy/suitDetail" component={Suitdetail}/>
          <Route path="/icy/goods" render={()=>
            <Goods />
          }/>
          <Redirect from="/" to="/icy/designer" />
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router  