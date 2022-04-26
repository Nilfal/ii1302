import Homepage from '../views/homepage';
import FirstHeader from '../views/firstHeader';
import Footer from '../views/footer'
import React from 'react';

function HomepagePresenter(props){
    return (
        <div>
            <FirstHeader/>
            <Homepage/>
            <Footer/>
        </div>
    
        );
}

export default HomepagePresenter;