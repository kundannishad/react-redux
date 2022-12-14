import './App.css';
import User from "./components/User"
//import { Home } from './components/Home';

import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';


function App() {
  return (
    <div className="App">
     <User data={{name:"kundan Kumar",age:30}}></User>

      <HeaderContainer></HeaderContainer>
     <HomeContainer></HomeContainer>
    
    </div>
  );
}

export default App;
