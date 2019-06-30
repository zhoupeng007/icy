import React from 'react'
import css from './index.module.scss'

class Xinpin1 extends React.Component{
  state = {
    list:null
  }
  render(){
    return (  
      <div>
        <div className="home-line"></div>
        {
          this.state.list?
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
              this.state.list.list.map(item => 
                <div style={{marginBottom:'20px'}} key={item.contentId}>
                  <header className={css.headerr}>
                    <div className={css.beforee}></div>
                    <div style={{width:'750px',height:'421px'}}>
                      <img src={'https://image3.ichuanyi.cn/' + item.banner.image} alt=""
                        style={{width:"750px"}}
                      />
                    </div>
                  </header>
                  <div style={{marginLeft:'20px',position:'relative'}}>
                <div className="swiper-container xppxinpin">
                  <div className="swiper-wrapper">
                    {
                      item.goods.map(item =>
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
                </div>
              )
            }
          </div>
          :null
        }
      </div>
    )
  }
  componentWillReceiveProps(props){
    // console.log(props.list[props.sj])
    this.setState({
     list: props.list[props.sj]
    })
  }
}

/*,()=>{
      new Swiper('.xppxinpin', {
        slidesPerView: 2.5,
        spaceBetween: 30,
      });
    } */
export default Xinpin1