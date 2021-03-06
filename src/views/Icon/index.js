import React from 'react'
import SwiperHeader from './SwiperHeader'
import IconWaterfull from './IconWaterfull'
import 'antd/dist/antd.css'
import axios from "axios"
class Icon extends React.Component {
  state = {
    waterfulllist: [],
    id:0
  }
  render() {
    return <div>
      <SwiperHeader myevent={this.handeleClick}></SwiperHeader>
      <IconWaterfull waterfull={this.state.waterfulllist} myid={this.state.id}></IconWaterfull>
    </div>
  }
  handeleClick = (data) => {
    // console.log(data)
    axios.get(`/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=${data}`).then(res => {
      this.setState({
        waterfulllist: res.data.data.list,
        id:data
      })
      // console.log(res.data.data.list)
    })
  }

}

export default Icon