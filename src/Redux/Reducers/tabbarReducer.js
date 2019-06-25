const tabbarReducer = (prevState=true,action)=>{
  // console.log(action)
  let {type,payload} = action
  switch(type){
    case 'ShowTabbar':
      return payload
    case 'HideTabbar':
      return payload
    default:
      return prevState
  }
  // return newstate
}
export default tabbarReducer