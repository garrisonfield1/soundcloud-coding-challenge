import useFetch from './components/useFetch';
import Loading from './Loading';
import { Suspense } from 'react';
import SwornMembers from './components/SwornMembers';
import './App.css';

function App() {
  
  const {isResolved, data} = useFetch('https://anapioficeandfire.com/api/houses')

  return (
    <div className="relative p-6 flex min-h-screen flex-col overflow-hidden inset-0 bg-[url(./assets/img/dragon.jpg)] bg-blend-overlay bg-center bg-cover bg-slate-700 h-screen ">
      <div className="overflow-y-scroll">
        <div className="overflow-y-scroll ">
          <Suspense fallback={<Loading />}>
            {
              isResolved && data.map((house, i) => {
                return (
                  <div key={house.name} className="rounded-lg border-2 border-white p-6 m-6" >
                    <h1 key={i} >{house.name}</h1>
                    <SwornMembers key={`${house.name}0`} {...house} />
                  </div>
                )
              })          
            }
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App;
