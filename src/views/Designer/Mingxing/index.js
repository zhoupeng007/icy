import React from 'react'
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper'

class Mingxing extends React.Component{
  state = {
    list: []
  }
  render(){
    return <div>
      <div className="home-line"></div>
      <div>
        <div>
          <div className={css.sectiontitle}>
            <div className={css.fleft}>
              {
                this.state.list.title?
                <p className={css.tille}>{this.state.list.title}</p>
                :null
              }
              <p className={css.line}></p>
            </div>
            <div className={css.qfd}></div>
          </div>
        </div>
        {
          this.state.list.list?
          <div>
            {
              this.state.list.list.map(item=>
                <div key={item.username} className={css.item}>
                  <div className={css.headerr}>
                    <div>
                      <div className={css.headerrr}>
                        <img src={'https://image3.ichuanyi.cn/'+item.avatar} alt="" className={css.headerrrr}/>
                      </div>
                      <div className={css.desc}>
                        <div className={css.descc}>{item.username}</div>
                        <div className={css.country}>
                          <span className={css.doc}></span>
                          <span>{item.nationality}</span>
                        </div>
                        <div className={css.linee}></div>
                        <div className={css.descr}>{item.coBranding}</div>
                      </div>
                    </div>
                  </div>
                  {
                    this.state.list?
                    <div style={{marginLeft:'20px',position:'relative'}}>
                      <div className="swiper-container xppmx">
                        <div className="swiper-wrapper">
                          {
                            item.goodsImages.map(item =>
                              <div className="swiper-slide" key={item.goodsId}>
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
              )
            }
          </div>
          :null
        }
      </div>
    </div>
  }
  componentWillReceiveProps(props){
    console.log(props.list[props.sj])
    this.setState({
     list: props.list[props.sj]
    },()=>{
      new Swiper('.xppmx', {
        slidesPerView: 2.5,
        spaceBetween: 110,
      });
    })
  }
}

export default Mingxing