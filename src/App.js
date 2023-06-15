// import useFetch from './components/useFetch';
import useFetchMembersURLs from './components/useFetchMembers';
// import logo from './logo.svg';
import './App.css';

function App() {

  const houseAndMembers = useFetchMembersURLs('https://anapioficeandfire.com/api/houses')
  
  console.log('houseAndMembers ',houseAndMembers)

  return (
    <div className="App">
      <header className="App-header">      
          {/* {
            houseAndMembers.status === '200 fetched' ? houseAndMembers.data.map( (house, index) => {
              return (
                <>
                  <div key={house.house} >{house.house}</div>
                  {house.swornMembers.length ? 
                    house.swornMembers.map( member => <div>{member}</div>  )  
                    : 
                    <div>This house has no sworn members</div>
                  }
                </>
              )
            })
          : <img src={logo} className="App-logo" alt="logo" /> 
          } */}
      </header>        
    </div>
  );
}

export default App;
