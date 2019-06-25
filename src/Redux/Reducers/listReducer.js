const listReducer = (prevState=[],action)=>{
  // console.log(action)
  let {type,payload} = action
  switch(type){
    case 'getList':
      return [...prevState,...payload]
    default:
      return prevState
  }
  // return newstate
}
export default listReducer