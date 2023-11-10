import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function Home() {
  return (
    <div>
      <section className='home'>
        <div className="container home-inside">
          <h1 className='home-heading'>You got the travel plans, we got the travel vans.</h1>
          <p className='home-text'>Add adventure to your life by joining the #vanlife movement.  Rent the perfect van to make your perfect road trip.</p>
          <Link to='/vans' className='home-button'><Button className="home-button-to-vans" backgroundColor="rgba(255, 140, 56, 1)" colour="rgba(255, 255, 255, 1)">Find your van</Button></Link>
        </div>
      </section>
    </div>
  )
}
