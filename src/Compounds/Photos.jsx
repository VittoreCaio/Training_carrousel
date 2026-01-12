import React from 'react'
import photo1 from '../assets/sunburst_stratocaster.png'
import photo2 from '../assets/bluegrey_stratocaster.png'
import photo3 from '../assets/black_stratocaster.png'
import photo4 from '../assets/red_stratocaster.png'
import photo5 from '../assets/sunset_stratocaster.png'

const Photos = () => {
  return (
    <>
    <div className='Carousel'>
        <div className="list">


            <div className="item1">
                <img src={photo1} alt="" className='Carousel__Image'/>

                {/* <div className='itemOther'>
                    <div className="intro">Intro</div>
                    <div className="title">Title</div>
                    <button className='seeMore'>See More</button>
                    <div className="detail"> Detalhe da guitarra</div>
                </div> */}
                
            </div>
        
            <div className="item2">
                <img src={photo2} alt="" className='Carousel__Image'/>

                <div className='itemOther'>
                    <div className="intro">Intro</div>
                    <div className="title">Title</div>
                    <button className='seeMore'>See More</button>
                    <div className="detail"> Detalhe da guitarra</div>
                </div>

            </div>
        
            <div className="item3">
                <img src={photo3} alt="" className='Carousel__Image'/>

                {/* <div className='itemOther'>
                    <div className="intro">Intro</div>
                    <div className="title">Title</div>
                    <button className='seeMore'>See More</button>
                    <div className="detail"> Detalhe da guitarra</div>
                </div> */}
                
            </div>
        
            <div className="item4">
                <img src={photo4} alt="" className='Carousel__Image'/>

                {/* <div className='itemOther'>
                    <div className="intro">Intro</div>
                    <div className="title">Title</div>
                    <button className='seeMore'>See More</button>
                    <div className="detail"> Detalhe da guitarra</div>
                </div> */}
                
            </div>


        
            <div className="item5">
                <img src={photo5} alt="" className='Carousel__Image'/>

                {/* <div className='itemOther'>
                    <div className="intro">Intro</div>
                    <div className="title">Title</div>
                    <button className='seeMore'>See More</button>
                    <div className="detail"> Detalhe da guitarra</div>
                </div> */}
                
            </div>


        </div>

        </div>
    </>
  )
}

export default Photos