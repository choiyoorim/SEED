import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navi from './Components/Navi';
import './Components/Navi.css';
import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login.js';
import Signup from './Components/Signup/Signup.js';
import SeeMain from './Components/See/SeeMain.js';
import LikeMain from './Components/Like/LikeMain.js';
import MyPageMain from './Components/MyPage/MyPage.js';
import Find from './Components/Find/Find.js';


const App = () =>{
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/see" component={SeeMain} />
          <Route path="/like" component={LikeMain} />
          <Route path="/mypage" component={MyPageMain} />
          <Route path="/find" component={Find} />
        </Switch>
      </BrowserRouter>
    </div>

  )
}

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Navi></Navi>
//       </div>
//     );
//   }
// }

export default App;
