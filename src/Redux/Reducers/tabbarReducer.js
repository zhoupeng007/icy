const ShowTabbar = (prevState = true,action)=>{
  let {type,payload} = action
  switch (type) {
    case 'ShowTabbar':
        return payload
    case 'HideTabbar':
        return payload
    default:
        return prevState
  }
}

export default ShowTabbar