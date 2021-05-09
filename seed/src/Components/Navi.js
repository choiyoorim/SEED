import React, { Component } from 'react';
import './Navi.css'
import toc from './Logo/toc-white-18dp.svg'
class Navi extends Component {
    render(){
       return (
            <header>
                <div class="menu_wrapper">
                    <button type="button" class="btn_toc">
                    //<img id= "toc_img" src={toc} width="30" height="30"/>
                    </button>
                    <h1 class="logo">Seed Logo</h1>
                    <nav>
                        <ul class="menu">
                            <li><a href="/See/see_main.js">See</a></li>
                            <li><a href="/Like/like_main.js">Like</a></li>
                            <li><a href="/Mypage/mypage.js ">MyPage</a></li>
                        </ul>
                    </nav>
                    <div class = "user">
                        <p id = "user_name">Seed님</p>
                        {/* <img id = "user_img" src={require("frog-5319326_1920.jpg")} width="40" height="40"/> */}
                    </div>
                </div>
            </header>
       );
     }
   }

   export default Navi