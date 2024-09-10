import Container from 'react-bootstrap/Container';
import Head from '../header/Head'
import Body from './Body';
import Footer from '../footer/Footer';

function Home() {
    return (
        <Container>
            <Head />
            <Body />
            <Footer/>
        </Container>
    )
}

export default Home