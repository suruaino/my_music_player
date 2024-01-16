import Header from './components/Header/Header'
import Details from './components/Main/Son_details/Details'
import Modes from './components/Main/Song_modes/Modes'
import Time from './components/Main/Song_time/Time'
import Controls from './components/Main/Song_controls/Controls'
import './App.css'

function App() {

  return (
    <div className='app_main'>
  
     <Header />
     <Details />
     <Modes />
     <Time />
     <Controls />
    </div>
  )
}

export default App
