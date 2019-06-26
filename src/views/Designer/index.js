import React from 'react'
import axios from 'axios'
import Swipe from './swipe'
class Designer extends React.Component{
  render(){
    return <div>
      <Swipe />
    </div>
  }
  componentDidMount(){
    axios.get('m.php?method=Userinfo.get&appId=4').then(res=>{
      console.log(res)
    })
  }
}

export default Designer