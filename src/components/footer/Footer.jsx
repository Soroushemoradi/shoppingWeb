import './Footer.css'
import FooterContactUs from './FooterContactUs'
import FooterLastNews from "./FooterLastNews"
import FooterSubscribe from './FooterSubscribe'

function Footer() {
    return (
        <>
            <div className='grid-3 footer'>
                <FooterLastNews/>
                <FooterContactUs />
                <FooterSubscribe/>
            </div>
        </>
    )
}

export default Footer