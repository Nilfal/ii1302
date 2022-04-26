import Homepage from '../views/homepage';
import firstHeader from '../views/firstHeader';
import Footer from '../views/footer'
import React from 'react';

function HomepagePresenter(props){
    return (
        <div>
            <firstHeader/>
            <Homepage/>
            <Footer/>
        </div>
    
        );
}

export default HomepagePresenter;