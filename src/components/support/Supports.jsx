
import 'bootstrap/dist/css/bootstrap.min.css';
import supportData from './supportData';
import React from 'react';
function Supports() {
    return (
        <>
            <div className="grid-3 mb-5 pt-4">
                {
                    supportData.map(({ image, header, title }) => <React.Fragment key={title}>
                        <div>
                            <div className='ms-5  ps-5'>
                                <img src={image} alt={title} className='w-25 h-25 ms-5 ' />
                            </div>
                            <h3 className='text-center'>{header}</h3>
                            <p className='text-center'>{title}</p>
                        </div>
                    </React.Fragment>
                    )
                }

            </div>
            <hr />
        </>
    )
}

export default Supports