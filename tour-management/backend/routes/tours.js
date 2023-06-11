import express from 'express'
import { createTour, updateTour, deleteTour, getAllTour, getSingleTour, getTourBySearch, getFeaturedTours, getTourCount } from './../controllers/tourController.js'


const router = express.Router()

// create new tour
router.post('/', createTour)

// update tour
router.put('/:id', updateTour)

// delete tour
router.delete('/:id', deleteTour)

// get all tour
router.get('/', getAllTour)

// get single tour
router.get('/:id', getSingleTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTours', getFeaturedTours)
router.get('/search/getTourCount', getTourCount)

export default router
