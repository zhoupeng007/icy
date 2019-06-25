import React from 'react'
import axios from 'axios'
class Designer extends React.Component{
  render(){
    return <div>
      designer
    </div>
  }
  componentDidMount(){
    axios.get('icym.php?method=icy.getHome&appId=4&page=1&pageSize=20').then(res=>{
      console.log(res)
    })
    axios.get('m.php?method=Userinfo.get&appId=4').then(res=>{
      console.log(res)
    })
  }
}

export default Designer