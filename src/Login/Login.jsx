import { Link } from "react-router-dom";
import img1 from '../assets/computer-security-with-login-passw-ord-padlock.jpg'

const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-full">
    <img className="w-5/6" src={img1} alt="" />
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center font-bold text-blue-500">Login Now</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-1"> Please Register first<Link className="text-blue-500 font-bold" to="/register">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;
