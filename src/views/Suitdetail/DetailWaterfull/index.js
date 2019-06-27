import React, { PureComponent } from 'react'
import axios from "axios"
// import scss from '../../Icon/IconWaterfull/scss.module.scss'
import scss from './scss.module.scss'
import { PullToRefresh } from 'antd-mobile'
import ReactDOM from 'react-dom'
import { withRouter } from "react-router"
class DetailWaterfull extends PureComponent {
    ptr = null
    render() {
        return (
            <div>
                <div className={scss.IconWaterfull_div}>
                    <PullToRefresh
                        damping={60}
                        ref={el => this.ptr = el}
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                        }}
                        direction={'up'}
                        refreshing={this.state.refreshing}
                        onRefresh={() => {
                            this.setState({ refreshing: true })
                            axios.get(`m.php?method=icy.getRecommendLook&appId=4&collocationId=${this.state.id}&page=${this.state.page}&pageSize=10`).then(res => {
                                var pages = JSON.parse(JSON.stringify(this.state.page))
                                // console.log(pages)
                                this.setState({
                                    DetailWaterfull: [...this.state.DetailWaterfull, ...res.data.data.recommendLook],
                                    refreshing: false,
                                    page: pages++
                                })
                            })
                        }}
                    >
                        <ul className={scss.IconWaterfull_ul}>
                            {
                                this.state.DetailWaterfull.map((item, index) =>
                                    <li key={index} className={index === 1 ? scss.IconWaterfull_tsli : scss.IconWaterfull_li} onClick={() => this.handeClick(item.link)}>
                                        <img src={this.imagesrc(item.image.image)} alt="暂无此图片" className={index === 1 ? scss.IconWaterfull_tsimg : scss.IconWaterfull_img} />
                                        <div className={scss.IconWaterfull_bottom}>
                                            <img src={this.imagesrc(item.avatar)} alt="暂无此图片" className={scss.IconWaterfull_bottom_img} />
                                            <img src="https://image3.ichuanyi.cn/group3/M00/9E/46/CgAAGlhwadAEAAAAAAAAAM6Loeg797.png" alt="暂无此图片" className={scss.IconWaterfull_bottom_smallimg} />

                                            <p className={scss.IconWaterfull_pu}>{item.username}</p>
                                            <p className={scss.IconWaterfull_pi}>{item.introduce}</p>
                                        </div>
                                    </li>
                                )
                            }

                        </ul>

                    </PullToRefresh>
                </div>
            </div>

        )

    }
    imagesrc(src) {
        return "https://image3.ichuanyi.cn/" + src
    }
    state = {
        DetailWaterfull: [],
        id: 1476334430,
        refreshing: false,
        height: 0,
        page: 2,
        refdataillist: []
    }
    handeClick = (myid) => {
        const id1 = myid.split("=")[1]
        const id2 = id1.split("&")[0]
        // console.log(id2)
        // console.log(this.props)
        // console.log(this.props.match.params.id)
        this.props.history.replace(`/icy/suitDetail/${id2}`)
        window.location.reload();
    }
    componentDidMount() {
        // console.log(this.props)
        // console.log(ReactDOM.findDOMNode(this.ptr).offsetTop)
        axios.get(`/m.php?method=icy.getRecommendLook&appId=4&collocationId=${this.state.id}&page=${this.state.page}&pageSize=10`).then(res => {
            this.setState({
                DetailWaterfull: res.data.data.recommendLook,
                height: document.documentElement.clientHeight - ReactDOM.findDOMNode(this.ptr).offsetTop + 1000 + "px"

            })
        })
    }
    componentWillReceiveProps(props) {
        // console.log(props.DetailWaterfull)
        this.setState({
            DetailWaterfull: props.DetailWaterfull,
            id: props.myid,
        })
    }
}

export default withRouter(DetailWaterfull)