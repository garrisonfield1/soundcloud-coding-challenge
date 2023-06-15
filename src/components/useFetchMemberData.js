

const useFetchMemberData = (urlArrays) => {
  
  const stuff = urlArrays.map(member => {
    

    // const memberData = async function(){
    //   const data = await fetch(member)
    //   const json = await data.json()
    //   console.log(json)
    //   return <div>{json.data}</div>
    // }
    // return memberData()
  })
  console.log('stuff ', stuff)
}


export default useFetchMemberData