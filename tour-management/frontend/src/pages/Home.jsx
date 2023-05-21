import React from 'react'
import Subtitle from '../shared/Subtitle'
import {Container, Row, Col} from 'reactstrap'
// import worldImg from '.././assets/images/world.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import '../styles/home.css'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="subtitle" />
              </div>
              <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam similique maxime nulla illo. Hic sunt provident temporibus ipsum nihil ipsa!
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="hero-box" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="hero-box" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="second-hero-box" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>

    {/* =============== Hero sectuion ============ */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>

          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* ========Featured Tour Section========== */}
    <section></section>
  </>
}

export default Home