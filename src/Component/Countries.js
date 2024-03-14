import React from 'react';

const Countries = () => {
    return (
        <div>
            <div className='countrycontainer'>
                <div className='leftcontainer'>
                    img
                </div>
                <div className='rightcontainer'>
                    <div className='country'>
                        img
                        <span className='city'>city</span>
                        <a className='maplink'>View on Google Maps</a>
                    </div>
                    <div className='heading'>
                        <h1 className='title'>title</h1>
                    </div>
                    <div className='content'>
                        <h4> date - end date</h4>
                        <p>description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countries;
