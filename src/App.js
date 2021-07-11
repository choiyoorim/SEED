import './App.css';
import Navi from './components/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mytext from './components/pages/mytext';
import Subs from './components/pages/subs';
import News from './components/pages/news';

import See from './See/see_main';
import Like from './Like/like_main';
import Mypage from './Mypage/mypage_main';

function App() {
  return (
    <Router>
      <Navi></Navi>
        {/* <Switch>
          <Route path="/Mytext" exact component={Mytext} />
          <Route path="/Subs" component={Subs} />
          <Route path="/News" component={News} />
        </Switch> */}
    </Router>
  );
}
export default App;