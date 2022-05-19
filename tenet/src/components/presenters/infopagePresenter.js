import Informationpage from '../views/informationpage';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function infoPresenter(props){
    return (
        <div>
            <Header/>
            <Informationpage/>
            <Footer />
        </div>
    
        );
}

export default infoPresenter;