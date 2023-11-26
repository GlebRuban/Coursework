
import '../carousel/carousel.css'


export const Carousel = ({children}) =>  {
  return<>
  <div className='sliderConteiner'>
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{width:'856px'}}>
	    <div class="carousel-inner">
		    <div class="carousel-item">{children}</div>
			  <div class="carousel-item active">{children}</div>
			  <div class="carousel-item">{children}</div>
	    </div>
    </div>
  </div>
  </>
}


