import React from 'react'
import css from './index.module.scss'
import axios from'axios'
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'
class Search extends React.Component{
    state={
        datalist:[],
        mount:1,
        word:this.props.location.search.split('=')[1],
        
    }
    render(){
        return <div className={css.searchBig}>
            <div className={css.search_boxTop}>
                <div className={css.search_boxTopOne}>
                    <div className={css.search_boxTopOneLeft} onClick={()=>this.handleClickReturn()}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAASCAQAAABYrf4PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfgCR0KIQ4TQ+EjAAAA8UlEQVQ4y7XTMUtCYRSH8ee9VxpcnOIOuQYt4hA0t1wEg3Cx2XI4k2BbW5/g0uJywKUcHQwy/AQOTSE6ODgICYGS6NIQBA2CGDi+5/kCPw78D+xNQ03hqWAvcMSIgSGhh/Q4YWlGaIYuOYaUjAhN88wZEwryZULoAW3OmRHLpy/gH6EhLYosiGXqD9gh1KFcsaYgY5/A7hUJVb65kHe/wJbQe275oSR93wA4AK3zwC9l6fgHwIHe0AQq8mQBgNNT3gipScMGgIA7QhI7AAKOgVc7AFL0yfOinn9h21CunWZ45HKzLINWRJvRRmSNiA+Z/wFrQTdv4BvJHgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wOS0yOVQxMDozMzoxNCswODowMM0HNp0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDktMjlUMTA6MzM6MTQrMDg6MDC8Wo4hAAAAAElFTkSuQmCC" alt="search"style={{marginLeft:'40px',marginTop:'40px'}}/>
                    </div>
                    {/* 点击input框显示Sousuo组件 */}
                    <div className={css.search_boxTopOneMiddle}>
                        <span style={{width:'100px',height:'40px',display:'inline-block',background:'#d8b3a1',position:'absolute',top:'30px',textAlign:'center',fontSize:'24px',lineHeight:'40px',marginLeft:'10px'}}>
                            {decodeURI(this.state.word)} X
                        </span>
                        <input type="text"className={css.search_boxTopOneMiddleInput} onClick={this.handleClick}/>
                        <div></div>
                    </div>
                    <div className={css.search_boxTopOneRight}>搜索</div>
                </div>
                <div className={css.search_boxTopTwo}>
                     <ul>  
                        <li >默认</li>
                        <li  onClick={()=>this.handleClick()}>最新上架</li>
                        <li  onClick={()=>this.handleClicksale()}>销量</li>
                        <li  onClick={()=>this.handleClickprice()}>价格</li>
                    </ul>
                </div>
            </div>
            <div className={css.search_img}>
                {/* <ul>
                    {
                        this.state.datalist.map(item=>{
                            return <li key={item.goodsId}>
                                <img src={'https://image3.ichuanyi.cn/'+item.image.image}/>
                                <div>
                                    <p >{item.name}</p>
                                    <p style={{marginTop:'-20px',lineHeight:'40px'}}>{'￥'+item.price}</p>
                                </div>
                            </li>
                        })
                    }
                </ul> */}
                <PullToRefresh
                  damping={60}
                  ref={el => this.ptr = el}
                  style={{
                    height: '3000px',
                    overflow: 'auto',
                    width:'100%',
                    display:'flex',
                    flexWrap:'wrap' ,
                    // border:'2px solid black'
                  }}
                  cancelable={'false'}
                  direction={'up'}
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                    this.setState({ refreshing: true });
                    axios.get(`/m.php?method=icy.goodsSearch&appId=4&page=${this.state.mount}&pageSize=20&sortType=0&keywords[]=${this.state.word}`).then(res=>{
                      
                      this.setState({
                        refreshing: false,
                        datalist:[...this.state.datalist,...res.data.data.list],
                        page:this.state.page+1,
                        mount:this.state.mount+1,
                        height:document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop+"px"
                      })
                      
                    })
                    // setTimeout(() => {
                  
                    //   this.setState({ 
                       
                    //     datalistpic:[...this.state.datalistpic]
                    //   });
                    // }, 1000);
                  }}
                >
                  {this.state.datalist.map((item,index) => (
                    <div key={index} style={{width:'50%',height: 'auto',float:'left'}}>
                        <img src={'https://image3.ichuanyi.cn/'+item.image.image} alt="search" className={css.goods_imgss} style={{width:'100%'}}/>
                        <p className={css.goods_p}>{item.name}</p>
                        <div style={{fontSize:'28px',textIndent:'20px'}}>{'￥'+item.price}</div>
                    </div>
                  ))}
      </PullToRefresh>
               
            </div>
            
        </div>
    }
    handleClick=()=>{
        console.log(this.props)
        this.props.history.push(`/icy/sousuo`)
    }
    handleClickReturn(){
        this.props.history.go(-1)
    }
    handleClick(){
        axios.get(`/m.php?method=icy.goodsSearch&appId=4&page=${this.state.mount}&pageSize=20&sortType=4&keywords[]=${this.state.word}`).then(res=>{
            console.log(res.data.data.list)
            this.setState({
                datalist:res.data.data.list
            })
        })
    }
    handleClicksale(){
        axios.get(`/m.php?method=icy.goodsSearch&appId=4&page=${this.state.mount}&pageSize=20&sortType=1&keywords[]=${this.state.word}`).then(res=>{
            console.log(res)
            this.setState({
                datalist:res.data.data.list
            })
        })
    }
    handleClickprice(){
        axios.get(`/m.php?method=icy.goodsSearch&appId=4&page=${this.state.mount}&pageSize=20&sortType=2&keywords[]=${this.state.word}`).then(res=>{
            this.setState({
                datalist:res.data.data.list
            })
        })
    }
    componentDidMount(){
        var str = decodeURI(this.state.word)
        var arr = {'keyword':str}
        var age = localStorage.getItem('name')
        console.log(age)
        if(age){
            console.log(age)
            age = JSON.parse(age)
            age.push(arr)
            age = JSON.stringify(age)
            localStorage.setItem('name',age)
        }else{
            age = [arr]
            age = JSON.stringify(age)
            localStorage.setItem('name',age)
        }
        
        axios.get(`/m.php?method=icy.goodsSearch&appId=4&page=${this.state.mount}&pageSize=20&sortType=0&keywords[]=${this.state.word}`).then(res=>{
            // console.log(res.data.data.list)
            console.log(this.props.location.search.split('=')[1])
            this.setState({
                datalist:[...this.state.datalist,...res.data.data.list],
                word:this.props.location.search.split('=')[1],
                mount:this.state.mount+1,
            
            })
        })
    }
}
export default Search