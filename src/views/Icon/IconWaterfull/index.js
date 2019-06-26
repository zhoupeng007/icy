import React, { PureComponent } from 'react'
import axios from "axios"
import scss from './scss.module.scss'
class IconWaterfull extends PureComponent {
    render() {
        return (
            <div>
                <div className={scss.IconWaterfull_div}>
                    <ul className={scss.IconWaterfull_ul}>
                        {
                            this.state.waterfulllist.map((item, index) =>
                                index % 2 === 0
                                    ? <li key={item.collocationId} className={scss.IconWaterfull_li}>
                                        <img src={this.imagesrc(item.image.image)} alt="暂无此图片" className={scss.IconWaterfull_img} />
                                        <div className={scss.IconWaterfull_bottom}>
                                            <img src={this.imagesrc(item.avatar)} alt="暂无此图片" className={scss.IconWaterfull_bottom_img} />
                                            <img src={this.imagesrc(item.identityIcon.image)} alt="暂无此图片" className={scss.IconWaterfull_bottom_smallimg} />
                                            <p className={scss.IconWaterfull_pu}>{item.username}</p>
                                            <p className={scss.IconWaterfull_pi}>{item.introduce}</p>
                                        </div>
                                    </li>
                                    : ''
                            )
                        }
                    </ul>
                    <ul className={scss.IconWaterfull_ul}>
                        {
                            this.state.waterfulllist.map((item, index) =>
                                index % 2 !== 0
                                    ? <li key={item.collocationId+"c"} className={index === 1 ? scss.IconWaterfull_tsli : scss.IconWaterfull_li}>
                                        <img src={this.imagesrc(item.image.image)} alt="暂无此图片" className={index === 1 ? scss.IconWaterfull_tsimg : scss.IconWaterfull_img} />
                                        {
                                            item.type === 0?
                                            <div className={scss.IconWaterfull_bottom}>
                                                <img src={this.imagesrc(item.avatar)} alt="暂无此图片" className={scss.IconWaterfull_bottom_img} />
                                                {/* <img src={this.imagesrc(item.identityIcon.image)} alt="暂无此图片" className={scss.IconWaterfull_bottom_smallimg} /> */}
                                                <p className={scss.IconWaterfull_pu}>{item.username}</p>
                                                <p className={scss.IconWaterfull_pi}>{item.introduce}</p>
                                            </div>
                                            :''

                                        }
                                    </li>
                                    : ''
                            )
                        }
                    </ul>
                </div>
            </div>
        )

    }
    imagesrc(src) {
        return "https://image3.ichuanyi.cn/" + src
    }
    state = {
        waterfulllist: [],
        id: 0
    }
    componentDidMount() {
        axios.get(`/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=${this.state.id}`).then(res => {
            this.setState({
                waterfulllist: res.data.data.list,
            })
        })
    }
    componentWillReceiveProps(props) {
        // console.log(props)
        this.setState({
            waterfulllist: props.waterfull
        })
    }
}

export default IconWaterfull