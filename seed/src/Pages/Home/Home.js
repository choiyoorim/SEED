import React from 'react';
import Layout from '../../Components/Layout';
import Navi from '../../Components/Navi';
import './Home.css';

const Home = () => {
    return(
        <>
         <Layout>
             <Navi>
             </Navi>
             <p className = 'Button'>
                 Hello
             </p>
         </Layout>

        </>
    );
}

export default Home;
