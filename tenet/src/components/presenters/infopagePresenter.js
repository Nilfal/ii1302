import Informationpage from '../views/informationpage';
import Firstheader from '../views/firstHeader';
import React from 'react';

function infoPresenter(props){
    return (
        <div>
            <Firstheader/>
            <Informationpage/>
        </div>
    
        );
}

export default infoPresenter;