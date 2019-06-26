import React from 'react'
import scss from './scss.module.scss'
import axios from "axios"
class SwiperHeader extends React.Component {
    render() {
        return (
            <div>
                <ul className={this.state.fixed?scss.SwiperHeader_ulfixed:scss.SwiperHeader_ul} ref="SwiperHeader_ul">
                    {
                        this.state.datalist.map((item,index)=>
                            <li key={item.categoryId} className={scss.SwiperHeader_li} onClick={()=>this.props.myevent(item.categoryId)}>{item.categoryName}</li>
                        )
                    }
                </ul>
            </div>
            )
    }
    
    state = {
        datalist: [],
        imgHeight: 40,
        fixed:false
    }
    componentDidMount() {
        axios.get("/icym.php?method=icy.getIconCategoryList&appId=4").then(res=>{
            // console.log(res.data.data.list)
            this.setState({
                datalist:res.data.data.list
            })
        })
        window.onscroll = this.handScroll
    }
    handScroll = ()=>{
        // console.log(document.documentElement.scrollTop)
        // console.log(this.refs.SwiperHeader_ul.offsetHeight)
        if(document.documentElement.scrollTop > this.refs.SwiperHeader_ul.offsetHeight){
            this.setState({
                fixed:true
            })
        }else{
            this.setState({
                fixed:false
            })
        }
    }
    
}
export default SwiperHeader