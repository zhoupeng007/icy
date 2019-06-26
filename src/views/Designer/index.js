import React from 'react'
import axios from 'axios'
import Swipe from './swipe'
import Shejishi from './Shejishi'
import {connect} from 'react-redux'
class Designer extends React.Component{
  state = {
    list:[]
  }
  render(){
    return <div>
      <Swipe />
      <Shejishi list={this.state.list}/>
    </div>
  }
  componentWillMount(){
    axios.get('m.php?method=Userinfo.get&appId=4').then(res=>{
      console.log(res)
    })
    axios.get('icym.php?method=icy.getHome&appId=4&page=1&pageSize=20').then(res=>{
      this.setState({
        list:res.data.data.list
      })
    })
  }
}

const mapStateToProps = ()=>{
  return {

  }
}

export default connect(mapStateToProps)(Designer)