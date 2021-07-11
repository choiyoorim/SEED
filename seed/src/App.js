import './App.css';
import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import './Components/Navi.css'

import{
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import See from './Pages/See/See'
import Write from './Pages/See/Write';
import Like from './Pages/Like/Like';
import Mypage from './Pages/Mypage/MyPage';
import Home from './Pages/Home/Home';
import ShortWrite from './Pages/See/ShortWrite';

const App = () =>{
  return(
    <HashRouter>
        <Route exact path ="/" component={Home}/>
        <Route path="/see" component={See}/>
        <Route path="/write" component={Write}/>
        <Route path="/like" component={Like}/>
        <Route path="/mypage" component={Mypage}/>
        <Route path="/shortwrite" component={ShortWrite}/>
    </HashRouter>
  );
>>>>>>> e7ddcada45d664cd03d312048ca308a5243faedb
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
