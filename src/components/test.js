const test = async (memberURLArray) => {
  const promises = await memberURLArray.map( url => {
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
  
}

export default test;