import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'

import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'


export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: 'smooth'
        });
    }


  return (
    <section className='container pt-4'>
        <div className='row'>
            <div className='col-auto pr-6' style={{width: 530}}>
                <h1 className='h2 font-weight-bold line-height-1 mb-3 mt-3'>
                    Forget Bussy Work,<br/>
                    Start Next Vacation.
                </h1>

                <p className='mb-4 font-weight-light text-gray-500 w-75' style={{lineHeight: "170%"}}>
                    We provide what your need to enjoy your holiday with family. Time to make
                    another memorable moment.
                </p>

                <Button className='btn px-5' hasShadow isPrimary onclick={showMostPicked}>
                    Show Me Now
                </Button>

                <div className='row align-items-center' style={{marginTop: 80}}>
                    <div className='col-auto'>
                        <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                        <h6 className='mt-3'>
                            {formatNumber(props.data.travelers)} <span className='text-gray-500 font-weight-light'>Travelers</span>
                        </h6>
                    </div>
                    <div className='col-auto'>
                        <img width="36" height="36" src={IconTreasure} alt={`${props.data.travelers} Treasure`}/>
                        <h6 className='mt-3'>
                            {formatNumber(props.data.treasures)} <span className='text-gray-500 font-weight-light'>Treasures</span>
                        </h6>
                    </div>
                    <div className='col-auto'>
                        <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
                        <h6 className='mt-3'>
                            {formatNumber(props.data.cities)} <span className='text-gray-500 font-weight-light'>Cities</span>
                        </h6>
                    </div>
                </div>
            </div>
            
            <div className='col-6 pl-5 mt-5'>
                <div className={{width: 520, height: 410}}>
                    <img 
                    width="520"
                    height="410"
                    src={ImageHero} 
                    alt='Room with couches' 
                    className='img-fluid position-absolute' 
                    style={{margin: '-30px 0 0 -30px', 
                    zIndex: 1}}
                    />

                    <img 
                    width="520"
                    height="410"
                    src={ImageHero_} 
                    alt='Room with couches frame' 
                    className='img-fluid position-absolute' 
                    style={{margin: '0 -15px -15px 0'}}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
 