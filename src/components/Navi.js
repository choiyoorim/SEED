import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SideBar } from './SideBar';
import { BrowserRouter as Route } from 'react-router-dom';
import See from '../See/see_main';
import Like from '../Like/like_main';
import Mypage from '../Mypage/mypage_main';
import './Navi.css';
import '../components/color.css'
import user from '../components/frog-5319326_1920.jpg';

function Navi() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () =>setSidebar(!sidebar);

  return (
    <div class="main_container">
      <div class="navi_wrapper">
        {/* 아이콘 컬러 전체 변경 기능 */}
        <IconContext.Provider value={{ color: 'var(--seed-yelow)', size: '20px' }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div>
            <h1 class="logo">Seed Logo</h1>
            <ul class="menu">
              <li><Link to="/See/see_main.js">See</Link></li>
              <li><Link to="/Like/like_main.js">Like</Link></li>
              <li><Link to="/Mypage/mypage_main.js ">MyPage</Link></li>
            </ul>
            <div class = "user">
              <p id = "user_name">Seed님</p>
              <img id = "user_img" src={user} width="40" height="40"/>
            </div>
          </div>
        

          {/* 사이드바 */}
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} onClick={showSidebar}>
            <div class="navbar-toggle">
              <Link to="#" className="close-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            </div>
            <div class="nav_user_info">
              <img id = "sideBar_user_img" src={user} width="50" height="50"/>
              <div className="sideBar_user_name"><p>seed님</p></div>
              <span className ="sideBar_sub user-info"><p>구독자 23</p></span>
              <span className="sideBar_like user-info"><p>좋아요 103</p></span>
            </div>
            <div class="nav_sidebar_menu">
              <ul className="nav-menu-items" onClick={showSidebar}>
                {/* SideBar를 순서대로 담기*/}
                {SideBar.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span><p>{item.title}</p></span>
                      </Link>
                    </li>
                    );
                  })}
              </ul>
            </div>
            <div class="nav_bottom">
              <u>로그아웃</u>
            </div>
          </nav>
        </IconContext.Provider>
        
      </div>
      <Route path="/See" exact={true} component={See} />
      <Route path="/Like" component={Like} />
      <Route path="/Mypage" component={Mypage} />
    </div>
    
  );
}
export default Navi;