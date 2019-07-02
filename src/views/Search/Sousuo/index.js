import React from "react"
import css from './index.module.scss'
import axios from 'axios'
import {connect} from 'react-redux'
class Sousuo extends React.Component{
    state={
        datalisthot:[],
        // isshow:true
        datalist:[]
    }
    render(){
        return <div>
            <div className={css.sousuo_xitop}>
                <div className={css.sousuo_boxTopOneLeft} onClick={()=>this.handleClickReturn()}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAASCAQAAABYrf4PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfgCR0KIQ4TQ+EjAAAA8UlEQVQ4y7XTMUtCYRSH8ee9VxpcnOIOuQYt4hA0t1wEg3Cx2XI4k2BbW5/g0uJywKUcHQwy/AQOTSE6ODgICYGS6NIQBA2CGDi+5/kCPw78D+xNQ03hqWAvcMSIgSGhh/Q4YWlGaIYuOYaUjAhN88wZEwryZULoAW3OmRHLpy/gH6EhLYosiGXqD9gh1KFcsaYgY5/A7hUJVb65kHe/wJbQe275oSR93wA4AK3zwC9l6fgHwIHe0AQq8mQBgNNT3gipScMGgIA7QhI7AAKOgVc7AFL0yfOinn9h21CunWZ45HKzLINWRJvRRmSNiA+Z/wFrQTdv4BvJHgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wOS0yOVQxMDozMzoxNCswODowMM0HNp0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDktMjlUMTA6MzM6MTQrMDg6MDC8Wo4hAAAAAElFTkSuQmCC" style={{marginLeft:'40px',marginTop:'40px'}}/>
                </div>
                <div className={css.sousuo_xitop_middle} onClick={()=>this.handleClickShow()}>
                    <input type="text" placeholder="连衣裙"  />
                    <span className={css.sousuo_xitop_input}></span>
                </div>
                <div className={css.sousuo_boxTopOneRight}>搜索</div>
            </div>
            <div className={css.sousuo_zjss} isshow={this.state.isshow}>
                <div style={{width:'100%',
                height:'106px'}}>
                    <p>最近搜索</p>
                    <div className={css.shanchu} onClick={this.handleClick}></div>
                </div>
                {
                    this.state.datalist?
                    <div className={css.sousuobox}>
                   
                    {
                        this.state.datalist.map(item=>{
                            return <a href="#" key={item.keyword}>{item.keyword}</a>
                        })
                    }

                </div>
                :null
                }
                
            </div>
            <div className={css.sousuo_rmss}>
                <div style={{width:'100%',
                height:'106px'}}>
                    <p>热门搜索</p>
                </div> 
                <div className={css.sousuobox}>
                    {
                        this.state.datalisthot.map(item=>{
                            return <a href="#" key={item.keyword}>{item.keyword}</a>
                        })
                    }
                    
                </div>
            </div>
           
        </div>
    }
    // handleClick(){
    //     this.setState({
    //         isshow:false
    //     })
    // }
    handleClickReturn(){
        this.props.history.go(-1)
    }
    handleClickShow(){

    }
    componentDidMount(){
        axios.get(`/m.php?method=icy.getHotSearch&appId=4`).then(res=>{
            console.log(res.data.data.hotSearch)
            this.setState({
                datalisthot:res.data.data.hotSearch
            })
        })
    }
    componentWillMount(){
        this.props.Hide()
        var datalist3=localStorage.getItem("name")
        var zh=JSON.parse(datalist3)
        console.log(datalist3)
        this.setState({
            datalist:zh
        })
    }
    componentWillUnmount(){
        this.props.Show()
    }
}
const subscribe = ()=>{

}
const dispatch = {
  Show:()=>({
    type:'ShowTabbar',
    payload:true
  }),
  Hide:()=>({
    type:'HideTabbar',
    payload:false
  })
}

export default connect(subscribe,dispatch)(Sousuo);