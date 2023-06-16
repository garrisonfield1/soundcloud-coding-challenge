import useFetch from './components/useFetch';
import useHouseAndMembersArray from './components/useHouseAndMembers';
import test from './components/test';
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pending, setPending ] = useState(true)

  const data = useFetch('https://anapioficeandfire.com/api/houses')
  const houseAndMembers = useHouseAndMembersArray(data.data)
  const lastIndex = houseAndMembers.length - 1;
  const fullArray = houseAndMembers.map((house, i) => {
    async function stuff(){
      await test(house.swornMembers)
    }
    if(i === lastIndex ) setPending(false) 
    return {
      house: house, 
      swornMembers: house.swornMembers ? stuff() : null
    }
  })

  console.log('houseAndMembers ', houseAndMembers)
  console.log('fullArray ', fullArray)
  
  return (
    <div className="App">
      <header className="App-header">      
          {pending ? fullArray.map( (house) => <div key={house.house} > {house.house}</div>) : <div> nerp </div> }
      </header>        
    </div>
  )
}

export default App;
