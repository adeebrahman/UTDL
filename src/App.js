import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage  from './Pages/HomePage.js';
import WorkshopPage from './Pages/WorkshopPage';
import DesignathonDescription from './Components/DesignathonDescription';
import DesignathonEventDetails from './Components/DesignathoneEventDetails';
import DesignathonFAQs from './Components/DesignathonFAQ';
import MeetTheTeam from './Pages/MeetTheTeamPage';


function App() {
  return (
    <Router>
       <Routes>

          <Route path="/Designathon" element={
            <>
              <DesignathonDescription/> <br/>
              <DesignathonEventDetails />
              <br/>
              <br/>
              <DesignathonFAQs/>
              <br/>
              <br/>
            </>
          } />
          <Route path="/Workshops" element={<WorkshopPage/>} />
          <Route path = "/Members" element={<MeetTheTeam/>}/>
          <Route path="/" element={<HomePage/>} />

      </Routes>
    </Router>
      
      
      
    
  );
}

export default App;
