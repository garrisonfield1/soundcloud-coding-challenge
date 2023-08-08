import useFetch from './useFetch'

const SwornMember = ({url}) => {
  const {isResolved, data} = useFetch(url)

  return(
    <div className="grid grid-cols-2">
      <span>{data.name}</span>
      <span>{data.died ? false : 'Dead'}</span>
    </div>
  )
}

export default SwornMember;