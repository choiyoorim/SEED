import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navi from '../Navi';
import './LikeMain.css';

function LikeMain() {
       return (
           <>
           <Navi></Navi>
           <p id="paragraph">This is Like Page.</p>
            </>
       );
     }

   export default LikeMain;