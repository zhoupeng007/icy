import React from 'react'
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {withRouter} from 'react-router'
// import { createConnection } from 'net';
import {NavLink} from 'react-router-dom'
import Sousuo from '../Search/Sousuo'
import {Redirect} from 'react-router-dom'
class Goods extends React.Component{
  ptr=null;
  state={
    datalist:[],
    datalist2:[],
    datalist3:[],
    datalist4:[],
    datalist5:[],
    datalist6:[],
    datalistpic:[],
    data:[111,222,333,444],
    page:1,
    refreshing:true,
    height:0,
    datalistli:["衬衫","连衣裙","半身裙","短裤","阔腿裤","牛仔裤","T恤","卫衣","针织衫","风衣","西装","西裤"],
    img:null
  }
  render(){
    return <div className={css.big}>
      <div className={css.goods_xitop}>
        {/* 点击input框显示Sousuo组件 */}
        <div className={css.goods_xitop_middle}>
          <input type="text" placeholder="连衣裙" onClick={this.handleClick} />
          <span className={css.goods_xitop_input}></span>
        </div>
        <div className={css.tupian1}></div>
        <div className={css.tupian2}></div>
      </div>
      <div className={css.goods_bigPic}>
        <img src="https://image3.ichuanyi.cn/ai-admin/48d7f2758092e683ba59122bbaf5cc1b.jpg" alt="goods"/>
        <div className={css.goods_bigPic_oneDiv}>
            {
              this.state.datalistli.map(item=>{
                return <li key={item}><NavLink to={'/icy/search?keyword='+item} ></NavLink></li>
              })
            }
          
        </div>
      </div>
      <img src="https://image3.ichuanyi.cn/ai-admin/5af93e4a2ef479eb6fb461543c84463f.gif" alt="goods" className={css.goods_banner}/>
      <div className={css.goods_qbdp}>
          <p >全部单品</p>
          <div className={css.goods_qbdp_select}>
              <div className={css.goods_qbdp_top}>
                {/* size部分轮播 */}
                <div className={css.goods_qbdp_size}>  
                  <div className={css.goods_qbdp_size_ab}>               
                  <div className="swiper-container goodsswiper">
                      <div className="swiper-wrapper">
                       {
                         this.state.datalist.map(item=>{
                           return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'18px'}}>
                             {item.name}
                           </div>
                         })
                       }
                      </div>
                  </div>  
                  </div>              
                </div>
                {/* clothType部分轮播 */}
                <div className={css.goods_qbdp_clothType}>
                    <div className="swiper-container mySwipers swiper">
                          <div className="swiper-wrapper">
                          {
                            this.state.datalist2.map(item=>{
                              return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'24px'}}>
                                {item.name}
                              </div>
                            })
                          }
                          </div>
                      </div>
                </div>
                <div className={css.goods_qbdp_element}>
                    <div className="swiper-container mySwipers3 swiper3">
                              <div className="swiper-wrapper">
                              {
                                this.state.datalist3.map(item=>{
                                  return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'24px'}}>
                                    {item.name}
                                  </div>
                                })
                              }
                              </div>
                    </div>
                </div>

                <div className={css.goods_qbdp_sx}>
                    <div className="swiper-container mySwipers4 swiper4">
                              <div className="swiper-wrapper">
                              {
                                this.state.datalist4.map(item=>{
                                  return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'24px'}}>
                                    {item.name}
                                  </div>
                                })
                              }
                              </div>
                    </div>
                </div>
                <div className={css.goods_qbdp_sales}>
                    <div className="swiper-container mySwipers5 swiper5">
                              <div className="swiper-wrapper">
                              {
                                this.state.datalist5.map(item=>{
                                  return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'24px'}}>
                                    {item.name}
                                  </div>
                                })
                              }
                              </div>
                    </div>
                </div>
                <div className={css.goods_qbdp_prices}>
                    <div className="swiper-container mySwipers6 swiper6">
                              <div className="swiper-wrapper">
                              {
                                this.state.datalist6.map(item=>{
                                  return <div className="swiper-slide" key={item.name} style={{width:"55px",height:"50px",float:'left',textAlign:'center',lineHeight:'50px',fontSize:'24px'}}>
                                    {item.name}
                                  </div>
                                })
                              }
                              </div>
                    </div>
                </div>
                <div className={css.goods_qbdp_zhpx}>
                    <div>
                          <ul>  
                              <li>综合排序</li>
                              <li>销量排序</li>
                              <li>上新排序</li>
                              <li>价格排序</li>
                          </ul>
                    </div>
                </div>
              </div>
              <div className={css.goods_qbdp_bottom}>
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
                    axios.get(`/icym.php?method=icy.getGoodsList&appId=4&page=${this.state.page}&pageSize=5&sortType=0`).then(res=>{
                      
                      this.setState({
                        refreshing: false,
                        datalistpic:[...this.state.datalistpic,...res.data.data.list],
                        page:this.state.page+1,
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
                  {this.state.datalistpic.map((item,index) => (
                    <div key={index} style={{width:'50%',height: 'auto',float:'left'}}>
                        <img src={'https://image3.ichuanyi.cn/'+item.image.image} alt="goods" className={css.goods_imgss} style={{width:'100%'}}/>
                        <p className={css.goods_p}>{item.name}</p>
                        <div style={{fontSize:'28px',textIndent:'20px'}}>{'￥'+item.price}</div>
                    </div>
                  ))}
      </PullToRefresh>
                    {/* {
                      this.state.datalistpic.map(item=>{
                        return <div key={item.goodsId} className={css.goods_imgs} style={{width:'50%'}}>
                          <img src={'https://image3.ichuanyi.cn/'+item.image.image} className={css.goods_imgss}/>
                          <p className={css.goods_p}>{item.name}</p>
                          <div style={{fontSize:'28px',textIndent:'20px'}}>{'￥'+item.price}</div>
                        </div>
                      })
                    } */}
                      
              </div>
          </div>
      </div>
    
  </div>
  }
  // handleInput(){
  //   console.log(this.props)
  //   console.log("lala")
  //   this.setState({
  //     isshow:false
  //   })
  //   // if(isshow){
  //   //   return 
  //   // }
  //   // return <
    
  // }
  handleClick = ()=>{
    console.log(this.props)
    this.props.history.push('/icy/sousuo')
  }
  componentDidMount() {
      axios.get('/icym.php?method=icy.getGoodsCategoryList&appId=4').then(res=>{
        // console.log(res.data.data.filters.sizes)
        // console.log(res.data)
        this.setState({
          datalist:res.data.data.filters.sizes,
          datalist2:res.data.data.filters.categories,
          datalist3:res.data.data.filters.elements,
          datalist4:res.data.data.filters.upNew,
          datalist5:res.data.data.filters.sales,
          datalist6:res.data.data.filters.prices , 
          img:res.data.data.banners[1].image.image
        },()=>{
          new Swiper('.goodsswiper', {
            slidesPerView : 6,
          });
          this.swiper= new Swiper('.mySwipers',{
            slidesPerView : 5,
          })
          this.swiper3= new Swiper('.mySwipers3',{
            slidesPerView : 5,
          })
          this.swiper4= new Swiper('.mySwipers4',{
            slidesPerView : 5,
          })
          this.swiper5= new Swiper('.mySwipers5',{
            slidesPerView : 5,
          })
          this.swiper6= new Swiper('.mySwipers6',{
            slidesPerView : 4,
          })
        })
      })
      console.log(this.ptr)
      axios.get(`/icym.php?method=icy.getGoodsList&appId=4&page=${this.state.page}&pageSize=5&sortType=0`).then(res=>{
        // console.log(res.data.data.list)
        
        this.setState({
          datalistpic:[...this.state.datalistpic,...res.data.data.list],
          page:this.state.page+1
        })
      })
      
      // axios.get(`/icym.php?method=icy.getGoodsCategoryList&appId=4`).then(res=>{
      //   console.log(res.data.data.banners[1].image.image)
      //   this.setState({
      //     img:res.data.data.banners[1].image.image
      //   })
      // })



   
}
// headleList=(id)=>{
//   return `icy/serch/${id}`
// }
}

export default withRouter(Goods)