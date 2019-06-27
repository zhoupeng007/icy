import React from 'react'
import Swiper from 'swiper/dist/js/swiper'
import axios from 'axios'
import './index.scss'

class Swipe extends React.Component{
  state = {
    datalist: []
  }
  render() {
    return <div>
      <div className="swiper-container xppswiper">
        <div className="swiper-wrapper">
          {
            this.state.datalist.map(item=>
              <div className="swiper-slide" key={item.bannerId} style={{width: "750px"}}>
                <img src={'https://image3.ichuanyi.cn/' + item.image} alt="" style={{
                  width: '750px',
                  height: '700px'
                }}/>
              </div>
            )
          }
        </div>
        <div className="swiper-pagination" style={{bottom:'30px'}}></div>
    </div>

    </div>
  }
  componentDidMount(){
    axios.get('icym.php?method=icy.getHome&appId=4&page=1&pageSize=20').then(res=>{
      this.setState({
        datalist: res.data.data.list[0].list
      },()=>{
        new Swiper('.xppswiper', {
          pagination: {
            el: '.swiper-pagination',
            bulletClass : 'xppswiperfy',
            bulletActiveClass: 'xppswiperfy-bullet-active'
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          loop:true
        });
      })
    })
  }
}
// https://image3.ichuanyi.cn/ai-admin/eee6bb09366cf2ae76761ff909527e02.jpg

export default Swipe
