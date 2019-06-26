import React from 'react'
import scss from './scss.module.scss'
import axios from "axios"
class SwiperHeader extends React.Component {
    render() {
        return (
            <div>
                <ul className={scss.SwiperHeader_ul}>
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
    }
    componentDidMount() {
        axios.get("/icym.php?method=icy.getIconCategoryList&appId=4").then(res=>{
            // console.log(res.data.data.list)
            this.setState({
                datalist:res.data.data.list
            })
        })
        window.scroll = function(){
            console.log("111")
        }
    }
    
}
export default SwiperHeader