import SwornMember from "./SwornMember";

const SwornMembers = ({name, swornMembers}) => {
  
  if(swornMembers.length){
    return (
      <div>
      {
        swornMembers.map((url, i) => {
          return (
            <SwornMember key={name + i} url={url} />
          )
        })
      }
      </div>
    )
  }
  return <div className="col-span-1 ..." >This house has no sworn members</div>
  
}
                
export default SwornMembers;