import React from 'react';
import Tabbar from './Component/Tabbar'
import './App.scss'
import 'swiper/dist/css/swiper.css'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className='page-wrapper'>
      {
        props.children
      }
      {
        props.isShow?
        <Tabbar />
        :null
      }
        
    </div>
  );
}
const subscribe= (state)=>{
  return{
    isShow:state.isShow
  }
}
export default connect(subscribe)(App);
