import React from 'react'
import asideData from './asideData'
import './aside.css'
function Aside() {
  return (
    <div className='mt-5 ms-3 w-50 border border-2 rounded-4 sticky-top aside-gallery'>
      <h4 className='ms-2 mt-3 mb-4'>filters</h4>
      {asideData.map(({ title }) => <React.Fragment key={title}>
        <div className='mb-4 mt-4 text-center'>
          <h5>{title}</h5>
        </div>
        <div className='border w-75 mx-auto'></div>
      </React.Fragment>)}
    </div>
  )
}

export default Aside