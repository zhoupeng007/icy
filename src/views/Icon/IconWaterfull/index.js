import React, { PureComponent } from 'react'
import axios from "axios"
import scss from './scss.module.scss'
import { PullToRefresh } from 'antd-mobile'
import ReactDOM from 'react-dom'
class IconWaterfull extends PureComponent {
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
                            axios.get(`/icym.php?method=icy.getCollocationList&appId=4&page=${this.state.page}&pageSize=10&categoryId=${this.state.id}`).then(res => {
                                this.setState({
                                    waterfulllist: [...this.state.waterfulllist, ...res.data.data.list],
                                    refreshing: false,
                                    page: this.state.pages++
                                })
                            })
                        }}
                    >
                        <ul className={scss.IconWaterfull_ul}>
                            {
                                this.state.waterfulllist.map((item, index) =>
                                    <li key={index} className={index === 1 ? scss.IconWaterfull_tsli : scss.IconWaterfull_li}>
                                        <img src={this.imagesrc(item.image.image)} alt="暂无此图片" className={index === 1 ? scss.IconWaterfull_tsimg : scss.IconWaterfull_img} />
                                        {
                                            item.type === 0 ?
                                                <div className={scss.IconWaterfull_bottom}>
                                                    <img src={this.imagesrc(item.avatar)} alt="暂无此图片" className={scss.IconWaterfull_bottom_img} />
                                                    <img src="https://image3.ichuanyi.cn/group3/M00/9E/46/CgAAGlhwadAEAAAAAAAAAM6Loeg797.png" alt="暂无此图片" className={scss.IconWaterfull_bottom_smallimg} />

                                                    <p className={scss.IconWaterfull_pu}>{item.username}</p>
                                                    <p className={scss.IconWaterfull_pi}>{item.introduce}</p>
                                                </div>
                                                : ''
                                        }
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
        waterfulllist: [],
        id: 0,
        refreshing: false,
        height: 0,
        page: 2,
        pages: 2,
    }
    componentDidMount() {
        // console.log(ReactDOM.findDOMNode(this.ptr).offsetTop)
        axios.get(`/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=${this.state.id}`).then(res => {
            this.setState({
                waterfulllist: res.data.data.list,
                height: document.documentElement.clientHeight - ReactDOM.findDOMNode(this.ptr).offsetTop + "px"
            })
        })
    }
    componentWillReceiveProps(props) {
        // console.log(props)
        this.setState({
            waterfulllist: props.waterfull,
            id: props.myid,
        })
    }
}

export default IconWaterfull