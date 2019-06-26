import React from 'react'
import axios from 'axios';
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
class Goods extends React.Component{
  render(){
    return <div>
      <div className={css.goods_bigPic}>
        <img src="https://image3.ichuanyi.cn/ai-admin/48d7f2758092e683ba59122bbaf5cc1b.jpg"/>
        <div className={css.goods_bigPic_oneDiv}>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%BF%9E%E8%A1%A3%E8%A3%99&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
          <a href="http://icy.design/icy/search?keyword=%E8%A1%AC%E8%A1%AB&sortType=0&appId=4"></a>
        </div>
      </div>
      <img src="https://image3.ichuanyi.cn/ai-admin/c031cfb79942ead5c0a82c3f6d214a45.jpg" className={css.goods_banner}/>
      <div className={css.goods_qbdp}>
          <p >全部单品</p>
          <div className={css.goods_qbdp_select}>
              <div className={css.goods_qbdp_top}>
                <div className={css.goods_qbdp_size}>
                  <div>

                  </div>
                </div>
                <div className={css.goods_qbdp_clothType}>

                </div>
              </div>
              <div className={css.goods_qbdp_bottom}></div>
          </div>
      </div>
    
  </div>
  }

  componentDidMount() {
    new Swiper(this.swiperID, {
        pagination: {
            el: this.paginateID,
        },
    });
}
  
}

export default Goods