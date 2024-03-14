import React from 'react';

const Countries = (props) => {
    return (
        <div>
            <div className='countrycontainer'>
                <div className='leftcontainer'>
                    <img className='leftimg' alt="images" src={props.details.imageUrl} />
                </div>
                <div className='rightcontainer'>
                    <div className='country'>
                        <img className='countryimg' alt='location'  src={props.placeholder} />
                        <span className='city'>{props.details.location}</span>
                        <a className='maplink'href={props.details.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className='heading'>
                        <h1 className='title'>{props.details.title}</h1>
                    </div>
                    <div className='content'>
                        <h4>{props.details.startDate} - {props.details.endDate}</h4>
                        <p>{props.details.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countries;
