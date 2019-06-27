import React, {Component} from 'react'
import {withRouter} from 'react-router'
class Baokuan extends Component{
  state = {
    list: null
  }
  render(){
    return (<div>
        <div></div>
      {
        this.state.list?
        <div onClick={this.handleClick}>
          <div style={{marginTop:'5px'}}>
            <div>
              <img src={'https://image3.ichuanyi.cn/' + this.state.list.image.image} style={{
                width: 750
              }} alt="" />
            </div>
          </div>
        </div>
        :null
      }
    </div>)
  }
  componentWillReceiveProps(props){
    this.setState({
      list: props.list[2].list[0]
    })
  }
  handleClick=()=>{
    this.props.history.replace(`/icy/designer`)
  }
}

export default withRouter(Baokuan)