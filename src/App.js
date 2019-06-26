import React from 'react';
import Tabbar from './Component/Tabbar'
import './App.scss'
import 'swiper/dist/css/swiper.css'

function App(props) {
  return (
    <div className='page-wrapper'>
      {
        props.children
      }
      <Tabbar />
    </div>
  );
}

export default App;
