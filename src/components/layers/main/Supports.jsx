import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Supports() {
  return (
    <>
    <div className="grid-3 mb-5 pt-4">
                <div>
                    <div className='ms-5  ps-5'>
                        <img src="freeShipping.png" alt="pic" className='w-25 h-25 ms-5 ' />
                    </div>
                    <h3 className='text-center'>free shipping world wide</h3>
                    <p className='text-center'>shipped to any location globally whithout any shipping fees.</p>
                </div>
                <div>
                    <div className='ms-5 ps-5'>
                        <img src="support.png" alt="pic" className='w-25 h-25 ms-5 ' />
                    </div>
                    <h3 className='text-center'>money back generate</h3>
                    <p className='text-center'>legally compliant money back guarantees for products.</p>
                </div>
                <div>
                    <div className='ms-5 ps-5'>
                        <img src="customersupport.png" alt="pic" className='w-25 h-25 ms-5  ' />
                    </div>
                    <h3 className='text-center'>customer support 24/7</h3>
                    <p className='text-center'>providing assistance and guidance to customers to solve problems and improve their.</p>
                </div>
            </div>
            <hr />
            </>
  )
}

export default Supports