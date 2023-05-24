import React from 'react'
import Subtitle from '../shared/Subtitle'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import '../styles/home.css'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/NewsLetter'

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
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    {/* ==========Experience Section======================= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>
                with our all experience <br /> we will serve you
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Fugiat, deleniti. Cum omnis autem dolores amet?
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="experience" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ==========Gallery section=============== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customer tour gallery</h2>
          </Col>

          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ==============Testimonial section=================== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">What ourfans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>

    <NewsLetter />
  </>
}

export default Home