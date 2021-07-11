import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navi from '../Navi';
import './SeeMain.css';

function SeeMain() {
       return (
           <>
           <Navi></Navi>
           {/* 1. 핫한 칼럼 2. 좋아요 리뷰 기반 영화 추천 */}
           
           <div id="box1">
               <h2 class='seetitle'>최근 떠오르는 칼럼</h2>
           </div>

            <div id="box2">
               <h2 class='seetitle'>이런 영화를 추천드려요!</h2>
            </div>
           
            </>
       );
     }

   export default SeeMain;