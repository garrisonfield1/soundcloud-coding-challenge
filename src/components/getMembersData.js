// async function getMembersDataArray(memberURLArray) {
  // const getMembersDataArray = async function(memberURLArray){
const getMembersDataArray = async (memberURLArray) => {

  
  const promises = memberURLArray.map( url => {
    return fetch(url)
    .then(r => r.json())
    .then( member => {
      return {
        member: member.name, 
        deceased: member.died ? true : false,
        mannerOfDeath: member.died ? member.died : null,
        url: member.url
      }
    })
    .catch(err => console.error(err))
    
  })

  const stuff = await Promise.all(promises).then(results => {
    console.log('results ', results)
    return results
  });
  return stuff
  // const arrayResults = Promise.all( memberURLArray.map((url) => fetch(url)
  // .then( r => r.json() )
  // .catch( err => {console.error('error at fetch.loop ', err)})
  // ))
  // return arrayResults;
  
  // const membersDataArray = memberURLArray.map( house => {
  //   const memberData = Promise.all(memberURLArray.map(url => fetch(url) ))
  //   .then(responses => Promise.all( responses.map( res => {
  //     return res.json() 
  //   }
  //   ) ) )
  //   .then( member => {
  //     return {
  //       member: member.name, 
  //       deceased: member.died ? true : false,
  //       mannerOfDeath: member.died ? member.died : null,
  //       url: member.url
  //     }
  //   })
  //   return memberData;    

  //   if (!house.swornMembers) return house;
  //   const memberData = Promise.all(house.swornMembers.map(url => fetch(url) ))
      // .then(responses => Promise.all( responses.map( res => {
      //   return res.json() 
      // }
      // ) ) )
      // .then( memberData => {
      //   memberData.map( member => {
      //     const swornMember = {
      //       member: member.name, 
      //       deceased: member.died ? true : false,
      //       mannerOfDeath: member.died ? member.died : null,
      //       url: member.url
      //     }
      //     return swornMember
      //   })
      // })
    // return memberData;
  // })
  // return membersDataArray;

  // })
  // console.log('membersDataArray ', membersDataArray)
  // return membersDataArray
}

export default getMembersDataArray;