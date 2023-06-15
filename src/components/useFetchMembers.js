import useFetch from "./useFetch"
// import useState from 'react';

const useFetchMembersURLs = (url) => {
  const {status, data} = useFetch(url)
  // const [loadingStatus, setLoadingStatus ] = useState('idle')

  // console.log('data ', data)
  
  // array of sworn members 
  async function getMembers(memberArray){
    const promises = memberArray.map( memberURL => fetch(memberURL).then(r => r.json()) )
    const memberData = await Promise.allSettled(promises)
     console.log('memberData ', memberData)

    const finalArrayFiltered = memberData.map( member => {
      const printGuy = {
        member: member.name, 
        deceased: member.died ? true : false,
        mannerOfDeath: member.died ? member.died : null,
        url: member.url
      }
      // console.log('printGuy ', printGuy)
      return printGuy
    })
    return  finalArrayFiltered
  }

  // create an array of objects of house name
  const houseArray = data.map( (houseName) => {
    const house = {
      house: houseName.name, 
      swornMembers: houseName.swornMembers.length ? getMembers(houseName.swornMembers) : null 
    }
    return house
  })
  return houseArray 
}

export default useFetchMembersURLs