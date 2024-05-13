import { Link } from 'react-router-dom';
import ima1 from '../../assets/banner1.jpeg'
import ima2 from '../../assets/banner2.jpg'
import ima3 from '../../assets/banner3.jpg'
import ima4 from '../../assets/banner4.jpg'

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={ima1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21. 21, 21, 0)] rounded-xl">
          <div className='text-white space-y-7 pl-12 w-1/3'>
            <h2 className='text-5xl font-bold'>
            Alternative products are interchangeable, very similar, or comparable products
            </h2>
            <p>
            Alternative products are interchangeable, very similar, or comparable products that can be substituted during a sale or during production if the original product is out of stock.
            </p>
            <div>
            <Link to='/add_products'>
            <button className="btn btn-warning mr-5">Add Products</button>
            </Link>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
      <img src={ima2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21. 21, 21, 0)] rounded-xl">
          <div className='text-white space-y-7 pl-12 w-1/3'>
            <h2 className='text-5xl font-bold'>
            Alternative products are interchangeable, very similar, or comparable products
            </h2>
            <p>
            Alternative products are interchangeable, very similar, or comparable products that can be substituted during a sale or during production if the original product is out of stock.
            </p>
            <div>
            <Link to='/add_products'>
            <button className="btn btn-warning mr-5">Add Products</button>
            </Link>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
      <img src={ima3} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21. 21, 21, 0)]">
          <div className='text-white space-y-7 pl-12 w-1/3'>
            <h2 className='text-5xl font-bold'>
            Alternative products are interchangeable, very similar, or comparable products
            </h2>
            <p>
            Alternative products are interchangeable, very similar, or comparable products that can be substituted during a sale or during production if the original product is out of stock.
            </p>
            <div>
            <Link to='/add_products'>
            <button className="btn btn-warning mr-5">Add Products</button>
            </Link>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
      <img src={ima4} className="w-full rounded-xl" />
        <div className="absolute flex items-center rounded-xl h-full  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21. 21, 21, 0)]">
          <div className='text-white space-y-7 pl-12 w-1/3'>
            <h2 className='text-5xl font-bold'>
            Alternative products are interchangeable, very similar, or comparable products
            </h2>
            <p>
            Alternative products are interchangeable, very similar, or comparable products that can be substituted during a sale or during production if the original product is out of stock.
            </p>
            <div>
            <Link to='/add_products'>
            <button className="btn btn-warning mr-5">Add Products</button>
            </Link>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    );
};

export default Banner;