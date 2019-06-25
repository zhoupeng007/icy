import React from 'react'
import {NavLink} from 'react-router-dom'
import css from './Tabbar.module.scss'

class Tabbar extends React.Component{
  render(){
    return <div className={css.Tabbar}>
      <div className={css.bf}></div>
      <NavLink to="/icy/designer" className={css.navlink} replace activeClassName={css.tabselect}><span>STYLE</span></NavLink>
      <NavLink to="/icy/icon" className={css.navlink} replace activeClassName={css.tabselect}><span>ICON</span></NavLink>
      <NavLink to="/icy/goods" className={css.navlink} replace activeClassName={css.tabselect}><span>SHOP</span></NavLink>
      <NavLink to='/icy/me' className={css.navlink} replace activeClassName={css.tabselect}><span>ME</span></NavLink>
    </div>
  }
}

export default Tabbar