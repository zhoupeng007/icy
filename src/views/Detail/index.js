import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import axios from 'axios'
import css from './index.module.scss'
class Detail extends React.Component{
    state = {
        imgHeight: '748px',
        datalist:[]
      }
      componentDidMount() {
        // simulate img loading
        axios.get(`/icym.php?method=goods.getInfo&appId=4&goodsId=27021599158394242`).then(res=>{
            console.log(res.data.data.photoAlbum);
            this.setState({
                datalist:res.data.data.photoAlbum
            })
        })
      }
    render(){
        return <div>
                <div className={css.detail_xitop}>
                <div className={css.detail_boxTopOneLeft} onClick={()=>this.handleClickReturn()}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADUklEQVRYw+3ZT4jVVRTA8c+MzyhbTEWWC6kWRVFMRG1aOGQTSf5lLBMpSmjhaZG1qMBaSwUhIURwopCKIihbmGlpSWgqunVhhJGJWKRYEmlMSS1+t3hN897MvPfmMdEceFx+v3vuPd9z3r3n3Ptejw5IZl6EJ/AgrsF32IwNEXGqEzZ6OgB5NbbhxlG6f8DyiNjXrp3eNiHnYk+B/BJLcRnmYy+uwM7MvKtd0JYjmpmzC8x1OIh7IuLHuv4aXsNqnMXCiNjdVdDM7MPnuAWHMD8iTo+iNwOb8BB+Ls60tAwmDJqZs/AxBnAEd0TEiSb6M/AOVuIMFkTEwYnandAazcwL8F6BPF4idKLZmIg4r8oGm9GHTzLz1kkDLZF5A4twCosi4uvxjI2I3/EAPsQlBfbmjoNmZg9exirVWlsSEYcmYigihrEC23E5Ps3Mmzod0efwKIYxFBEHJgI5AvY+7MTsAnt9R0Azcx3W4Tzuj4hdrUDWwZ7DkCprzCmw1441rumuz8xHVLkQVkfEW+1Ajpj7YlX2mIejGIiI4xMGzcxl+AAz8FREbOgUZJ2NPnyG2/AV5kXEyXGDZuZA8XYWXoiIZzoNWWdrNnbjBk2KR+8oA/tVaWQW3sazkwUJJYJ34xj6sa1EunFEyyFjP+ZiC+4tCXvSpWyofapssAuLI+LXf4EWL/YUrw5gMCLOdgOyjqG/MPSNDFRvUZip2jj9qvq9tNuQUIrIQtVpaxleKcXm7zW6EYM4qTqOnWzFUIdg92O5qrisURUbPZm5BolzuLPVqtNpycwVeFeVHpf34snSt3aqQEJEvI+ny+P6murqACszc9UoY55vt2yOJWUTPTZK14WlnVPDeryEBQ3m2TSZkEWuUq3Hhr7UImJjZu5QXdDqC8DjqjrcTTmCF0e8+xY7ahARh3H4Hy5kDnUZEr6PiFdH62jrutxNmQadBp3qUmt3gszcisVjqH0REQPt2Pn/RLROlkTER/UvMnMxtnZi8v9MRKdBp0GnCMdwK6B/lHZmF0CvLG3Du1qz9HS0tIOZuR2/NdAbjyO1zLy0CcNff0bsbQX0dazFw+XTjtyO02PoHMObjTobfvUR8Y3qJ/At+KlN0Gbyi6ooDEbEmUZKfwLQ3xUDZNiwdgAAAABJRU5ErkJggg==" style={{marginLeft:'40px',marginTop:'40px'}}/>
                </div>
                <div className={css.detail_xitop_middle}>
                    商品详情
                </div>
                <div className={css.tupian1}></div>
                <div className={css.tupian2}></div>
            </div>
        <WingBlank>
            <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            style={{width:'750px',height:'730px',marginTop:'35px'}}
            >
            {this.state.datalist.map(val => (
                <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img
                    src={'https://image3.ichuanyi.cn/'+val.image}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: '750px' });
                    }}
                />
                </a>
            ))}
            </Carousel>
        </WingBlank>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    }
}
export default Detail;