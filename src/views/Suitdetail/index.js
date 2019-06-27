import React from 'react'
import scss from './scss.module.scss'
// import DetailTop from './DetailTop'
import axios from 'axios';
import { Carousel, WingBlank } from 'antd-mobile';
import DetailWaterfull from './DetailWaterfull'
class Suitdetail extends React.Component {
    state = {
        detailtop: [],
        imgsrclist: [],
        DetailWaterfull:[],
        myid:''
    }
    render() {
        const item = this.state.detailtop
        return (
            <div className={scss.all}>
                <h1 className={scss.heaher_h1}>搭配详情</h1>
                <div className={scss.header_top}>
                    <div className={scss.header_top_top}>
                        <img src={this.imgsrc(item.avatar)} className={scss.header_top_top_img} />
                        <div className={scss.header_top_top_p}>
                            <p className={scss.header_top_top_p1}>{item.username}</p>
                            <p className={scss.header_top_top_p2}>{item.introduce}{item.height}cm{item.weight}kg</p>
                        </div>
                        <p className={scss.header_top_top_bottom}>  +  关注</p>
                    </div>
                </div>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        swipeSpeed="12"
                    >
                        {
                            this.state.imgsrclist.map((item, index) => (
                                <img src={item.image} key={index} alt="暂无此图片" style={{ width: '100%', height: "1000px", }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))
                        }
                    </Carousel>
                </WingBlank>
                <p className={scss.collectCount}><span>{item.collectCount}❤</span></p>
                <div className={scss.header_bottom}>
                    <p>▌推荐LOOK</p>
                    <DetailWaterfull DetailWaterfull={this.state.DetailWaterfull} myid={this.state.myid}></DetailWaterfull>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var id = this.props.history.location.pathname.split("/")[3]
        // console.log(id)
        axios.get(`/m.php?method=icy.getCollocationInfo&appId=4&collocationId=${id}`).then(res => {
            console.log(res.data.data)
            this.setState({
                detailtop: res.data.data,
                imgsrclist: res.data.data.images,
                myid:res.data.data.collocationId
            })
        })
        axios.get(`m.php?method=icy.getRecommendLook&appId=4&collocationId=${id}&page=1&pageSize=10`).then(res => {
            this.setState({
                DetailWaterfull: res.data.data.recommendLook,
            })
        })

    }
    imgsrc(src) {
        return "https://image3.ichuanyi.cn/" + src
    }

}
export default Suitdetail
