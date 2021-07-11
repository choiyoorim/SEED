import React from 'react';
import Navi from '../../Components/Navi'
import './See.css'
import {Link} from 'react-router-dom';
import Layout from '../../Components/Layout';

function See(){
  return(
    <>
    <Layout>
        <Navi>
        </Navi>
        <p className = 'button'>
            <Link to='/shortwrite'>write</Link>
        </p>
    </Layout>
    </>
  )
}

export default See;