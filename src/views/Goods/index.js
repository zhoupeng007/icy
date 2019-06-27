import React from 'react'
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'
import axios from 'axios'
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
    height:0

  }
  render(){
    return <div className={css.big}>
      <div className={css.goods_bigPic}>
        <img src="https://image3.ichuanyi.cn/ai-admin/48d7f2758092e683ba59122bbaf5cc1b.jpg"/>
        <div className={css.goods_bigPic_oneDiv}>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%BF%9E%E8%A1%A3%E8%A3%99&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4" alt="暂无此图片"></a>
        </div>
      </div>
      <img src="https://image3.ichuanyi.cn/ai-admin/c031cfb79942ead5c0a82c3f6d214a45.jpg" className={css.goods_banner}/>
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
                      console.log(res.data)
                      this.setState({
                        refreshing: false,
                        datalistpic:[...this.state.datalistpic,...res.data.data.list],
                        page:this.state.page+1,
                        height:document.documentElement.clientHeight-ReactDOM.findDOMNode(this.ptr).offsetTop+"px"
                      })
                    })
                    // setTimeout(() => {
                  
                    //   this.setState({ 
                       
                    //     // datalistpic:[...this.state.datalistpic]
                    //   });
                    // }, 1000);
                  }}
                >
                  {this.state.datalistpic.map((item,index) => (
                    <div key={index} style={{width:'50%',height: 'auto',float:'left'}}>
                        <img src={'https://image3.ichuanyi.cn/'+item.image.image} className={css.goods_imgss} style={{width:'100%'}}/>
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

  componentDidMount() {
      axios.get('/icym.php?method=icy.getGoodsCategoryList&appId=4').then(res=>{
        console.log(res.data.data.filters.sizes)
        this.setState({
          datalist:res.data.data.filters.sizes,
          datalist2:res.data.data.filters.categories,
          datalist3:res.data.data.filters.elements,
          datalist4:res.data.data.filters.upNew,
          datalist5:res.data.data.filters.sales,
          datalist6:res.data.data.filters.prices     
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

      axios.get(`/icym.php?method=icy.getGoodsList&appId=4&page=${this.state.page}&pageSize=5&sortType=0`).then(res=>{
        console.log(res.data.data.list)
        
        this.setState({
          datalistpic:[...this.state.datalistpic,...res.data.data.list],
          page:this.state.page+1
        })
      })
      




   
}
  
}

export default Goods