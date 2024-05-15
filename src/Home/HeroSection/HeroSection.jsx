import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/tRf6Vn9m/pexels-gabriel-freytez-110599-341523.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Recommendation Product</h1>
      <p className="mb-5">There are numerous product information system examples on the market, including Plytix PIM, Pimcore, Salsify PIM, Inriver, Catsy, Acquia PIM, and Lumavate.</p>
      <Link to='/recommendations'>
      <button className="btn btn-outline btn-primary">Recommendation</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default HeroSection;