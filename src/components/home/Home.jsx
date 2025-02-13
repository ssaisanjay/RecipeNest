import React from 'react'
import Categories from '../categories/Categories'
import Hero from '../hero/Hero'
import classes from './home.module.css'

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
        </div>
    )
}

export default Home