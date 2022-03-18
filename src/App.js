import SideBar from './Components/Sidebar/SideBar';
import MainArea from './Components/MainArea/MainArea';
import ListNote from './Components/ListNotes/ListNote';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <SideBar/>
      <Routes>
        <Route path="/"  element={<ListNote/>}/>
        <Route path="/edit"  element={<MainArea/>}/>

      </Routes>

    </>
  );
}

export default App;
