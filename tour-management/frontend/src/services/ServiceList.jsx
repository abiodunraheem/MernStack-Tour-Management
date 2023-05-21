import React from 'react'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate weather',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ullam.'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ullam.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ullam.'
    },
]

const ServiceList = () => {
  return <>
  {
    serviceData.map((item, index) => <Col lg='3' key={index}>
        <ServiceCard item={item} />
    </Col>)
  }
  </>
}

export default ServiceList