import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
      path: '/home',
      display: 'Home'
  },
  {
      path: '/about',
      display: 'About'
  },
  {
      path: '/tours',
      display: 'Tours'
  }
];

const quick__links2 = [
  {
      path: '/gallery',
      display: 'Gallery'
  },
  {
      path: '/login',
      display: 'Login'
  },
  {
      path: '/regiter',
      display: 'Register'
  }
];



const Footer = () => {
  const year = new Date ().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="footer" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, accusantium id?
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <li>
                    <a href="https://www.linkedin.com/in/abiodun-raheem" aria-label="linkedn" target="_blank" rel="noreferrer noopener"><i class="ri-linkedin-box-line"></i></a>
                  </li>
                </span>
                <span>
                  <li>
                    <a href="https://twitter.com/@abiodunraheem23" aria-label="twitter" target="_blank" rel="noreferrer noopener"><i class="ri-twitter-line"></i></a>
                  </li>
                </span>
                <span>
                  <li>
                    <a href="https://github.com/Abiodunraheem" aria-label="github" target="_blank" rel="noreferrer noopener"><i class="ri-github-line"></i></a>
                  </li>
                </span>
                <span>
                  <li>
                    <a href="https://medium.com/@raheemabiodun23" aria-label="medium" target="_blank" rel="noreferrer noopener"><i class="ri-medium-line"></i></a>
                  </li>
                </span>
                {/* <span>
                  <Link to='https://www.linkedin.com/in/abiodun-raheem'><i class="ri-linkedin-box-line"></i></Link>
                </span>
                <span>
                  <Link to='https://twitter.com/@abiodunraheem23'><i class="ri-twitter-line"></i></Link>
                </span>
                <span>
                  <Link to='https://github.com/Abiodunraheem'><i class="ri-github-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-medium-line"></i></Link>
                </span> */}
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className='footer__quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class='ri-map-pin-line'></i></span>
                      Address:
                    </h6>
                    <p className='mb-0 '>Lagos, Nigeria</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class='ri-mail-line'></i></span>
                      Email:
                    </h6>
                    <p className='mb-0 '>raheemabiodun23@gmail.com</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class='ri-phone-fill'></i></span>
                      Phone:
                    </h6>
                    <p className='mb-0 '>+234-806-0165-838</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">
              copyright &copy; {year}, design and develop by Abiodun Raheem. All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer