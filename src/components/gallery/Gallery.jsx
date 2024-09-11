
import Container from 'react-bootstrap/esm/Container'
import GalleryProducts from './product/GalleryProducts'
import Aside from './aside/aside'
import Footer from '../footer/Footer' 

function Gallery() {
    return (
        <Container>
            <div className='d-flex'>
                <GalleryProducts />
                <Aside/>
            </div>
            <Footer></Footer>
        </Container>
    )
}

export default Gallery