import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navi.css'
import toc from './Logo/toc-white-18dp.svg'

class Navi extends Component {
    render(){
       return (
            <header>
                <div class="menu_wrapper">
                    <button type="button" class="btn_toc">
                    <img id= "toc_img" src={toc} width="30" height="30"/>
                    </button>
                    <Link to="/"><h1 class="logo">seed</h1></Link>
                    <nav>
                        <ul class="menu">
                            <Link to="/see"><li>SEE</li></Link>
                            <Link to="/like"><li>LIKE</li></Link>
                            <Link to="/mypage"><li>MY PAGE</li></Link>
                        </ul>

                        <Link to="/login"><button class="btn" id="loginBtn">Login</button></Link>
                        <Link to="/signup"><button class="btn" id="signupBtn">Sign up</button></Link>
                    </nav>
                    <div class="user">
                        {/* <p id = "user_name">Seed님</p> */}
                        {/* <img id = "user_img" src={require("frog-5319326_1920.jpg")} width="40" height="40"/> */}
                    </div>
                </div>
            </header>
       );
     }
   }

   export default Navi;