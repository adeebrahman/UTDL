import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage  from './Pages/HomePage.js';
import DesignathonDescription from './Components/DesignathonDescription';
import DesignathonEventDetails from './Components/DesignathoneEventDetails';
import DesignathonFAQs from './Components/DesignathonFAQ';
import WorkshopIntro from './Components/WorkshopIntro'
import WorkshopCalendar from './Components/WorkshopCalendar';
import WorkshopList from './Components/WorkshopList';


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
          <Route path="/Workshops" element={
          <>
            <WorkshopIntro/>
            <br/>
            <br/>
            <br/>
            <WorkshopCalendar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <WorkshopList/>
            <br/>
            <br/>
          </>
          
          } />
          <Route path="/" element={<HomePage/>} />

      </Routes>
    </Router>
      
      
      
    
  );
}

export default App;
