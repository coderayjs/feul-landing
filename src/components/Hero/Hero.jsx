import React from 'react';
import './Hero.css'
import PriceCard from './PriceCard'
import logo from '../../assets/img/logo.svg'

const Hero = () => {
    return (
        <section className='Hero position-relative'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='hero-bg'>
                        <div className='hero'>
                            <p className='big-text'>Be a part of the future- <br/>A Diesel Evolution</p>
                            <p className='sub-text'>Now operating across Nigeria…</p>
                        </div>
                        <PriceCard/>
                        <div className='container'> 
                            <button className='btn btn-primary d-sm-block d-md-none getbtn'>ORDER NOW
                            <img className="btn-order" src={logo} alt="" height={25} width={25}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );    
}

export default Hero;
