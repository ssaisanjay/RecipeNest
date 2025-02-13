import React from 'react'
import classes from './navbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div className={classes.container}>
         <div className={classes.wrapper}>
            <Link to='/' className={classes.left}>
               Cook<p>Measure</p>
            </Link>
         </div>
      </div>
   )
}

export default Navbar