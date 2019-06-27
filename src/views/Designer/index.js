import React from 'react'
import axios from 'axios'
import Swipe from './swipe'
import Shejishi from './Shejishi'
import {connect} from 'react-redux'
import Baokuan from './baokuan'
import Xinpin from './Xinpin'
class Designer extends React.Component{
  state = {
    list:[]
  }
  render(){
    return <div>
      <Swipe />
      <Shejishi list={this.state.list}/>
      <Baokuan list={this.state.list}/>
      <Xinpin list={this.state.list}/>
    </div>
  }
  componentWillMount(){
    axios.get('m.php?method=Userinfo.get&appId=4').then(res=>{
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
const mapDispatchToProps = {
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Designer)