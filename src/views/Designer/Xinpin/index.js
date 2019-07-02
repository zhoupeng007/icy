import React from 'react'
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper'

class Xinpin extends React.Component{
  state = {
    list: null,
    title:null
  }
  render(){
    return (
      <div>
        <div style={{marginTop : '50px'}}>
          <div className="home-line"></div>
          <div>
            <div>
              <div className={css.sectiontitle}>
                <div className={css.fleft}>
                  {
                    this.state.title?
                    <p className={css.tille}>{this.state.title}</p>
                    :null
                  }
                  <p className={css.line}></p>
                </div>
                <div className={css.flaft}>
                  <p className={css.more}>查看更多</p>
                </div>
                <div className={css.qfd}></div>
              </div>
            </div>
            {
              this.state.list?
              <div style={{marginLeft:'20px',position:'relative'}}>
                <div className="swiper-container xppxinpin">
                  <div className="swiper-wrapper">
                    {
                      this.state.list.map(item =>
                        <div className="swiper-slide" style={{marginRight:'20'}} key={item.goodsId}>
                          <div style={{position:'relative',width:'300px',overflow:'hidden'}}>
                            <div style={{overflow:'hidden'}}>
                              <div style={{overflow:'hidden',height:'370px'}}>
                                <img src={'https://image3.ichuanyi.cn/' + item.image.image} alt="" style={{width:'370px',height:'370px',display:'block'}} className={css.juzhong}/>
                              </div>
                            </div>
                            <div style={{position:'relative'}}>
                              <div className={css.goodinfo}>
                                <p style={{color: '#333',fontSize: '24px',marginTop: '18px',textAlign:'center'}}>
                                  {item.name}
                                </p>
                                <p style={{color: '#333',fontSize: '24px',marginTop: '6px',textAlign:'center'}}>
                                  ￥{item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
              :null
            }
          </div>
        </div>
      </div>
    )
  }
  componentWillReceiveProps(props){
    //  console.log(props.list[props.sj])
    this.setState({
      list: props.list[props.sj].list,
      title: props.list[props.sj].title
    },()=>{
      new Swiper('.xppxinpin', {
        slidesPerView: 2.5,
        spaceBetween: 30,
      });
    })
  }
}

export default Xinpin

// https://image3.ichuanyi.cn/Files/14/b7/1a/14b71aa46ab9878aa1e157cb698a169a52b3fcfc_263117.jpg