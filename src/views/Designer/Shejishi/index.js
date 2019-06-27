import React from 'react'
// eslint-disable-next-line
import css from './index.module.scss'

class Shejishi extends React.Component{
  state = {
    list: null
  }
  render(){
    return <div style={{marginTop:'20px'}}>
      {
        this.state.list?
        <div>
          <div>
            <img src={'https://image3.ichuanyi.cn/' + this.state.list.image.image} alt="" style={{
              width:"750px"
            }}/>
          </div>
        </div>
        :null
      }
    </div>
  }
  componentWillReceiveProps(props){
    this.setState({
      list: props.list[1].list[0]
    })
  }
}

export default Shejishi