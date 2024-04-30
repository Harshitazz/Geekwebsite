import React from 'react'
import './Event.css'
import data from './eventData.json'

export default function Event() {
  return (
    <>
    <div className='heading event'>
        Events
    </div>
    <div className="subHeading">Embrace Innovation, Collaborate and Celebrate</div>
    <div className='center'>
    <form className="form">
    <label htmlFor="search">
        <input className="input" type="text" required placeholder="Search for events..." id="search" />
        <div className="fancy-bg"></div>
        <div className="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
        <button className="close-btn" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
        </button>
    </label>
</form>
</div>

<div className='container'>
  <div className="card" >
    <div className='row row-cols-1 row-cols-md-3'> {/* Use row-cols classes for responsive grid */}
      {data.map((detail,index) => (
        <div className='col-md-4 col-12' key={index} > {/* Each grid will take 1 column on extra small devices and 3 columns on medium devices and above */}
          <div className='grid grid-col-5'>
            <div className="card-body col-span-4">
              <img src={detail.image_url} className="card-img-top" alt={detail.eventName}/>
              <p className="card-date text-danger">{detail.date}</p>
              <h5 className="card-title text-white">{detail.eventName}</h5>
              <p className="card-text text-white">{detail.description}</p>
              <a href="#" className="btn btn-outline-danger button1">Go somewhere <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </>
  )
}
