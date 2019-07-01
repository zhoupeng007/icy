import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import App from '../App'
import {Provider} from 'react-redux'
import Designer from '../views/Designer'
import Icon from '../views/Icon'
import Goods from '../views/Goods'
import store from './../Redux/store'
import Suitdetail from './../views/Suitdetail'
import Search from '../views/Search'
import Sousuo from '../views/Search/Sousuo'
import Detail from '../views/Detail'
// const Auth={
//   isSousuo(){
//     return true
//   }
// }
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
          <Route path="/icy/me" render={()=>
            <Redirect to="/icy/designer" />
          }/>
          <Route path="/icy/goods" render={()=>
            <Goods />
          }/>
          <Route path='/icy/sousuo' component={Sousuo}/> 
          <Route path='/icy/goodsdetail' component={Detail}/>
          <Route path='/icy' component={Search}/>
          
          {/* <Route path='/icy' render={()=>
              Auth.isSousuo?
              <Search/>:
              <Redirect to="/icy/search"/>
          }/> 
          */}
           
          <Redirect from="/" to="/icy/designer" />
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router  