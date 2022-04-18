import Homepage from '../views/homepage';
import Header from '../views/header';
import React from 'react';

function HomepagePresenter(props){
    return (
        <div>
            <Header/>
            <Homepage/>
        </div>
    
        );
}

export default HomepagePresenter;