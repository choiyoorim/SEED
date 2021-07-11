import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navi from '../Navi';
import './MyPage.css';

function MyPage() {
       return (
           <>
           <Navi></Navi>
           <p id="paragraph">This is My Page.</p>
            </>
       );
     }

   export default MyPage;