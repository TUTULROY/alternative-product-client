import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from '../assets/computer-security-with-login-passw-ord-padlock.jpg'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin/SocialLogin";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
      const location = useLocation();
  
      const from = location?.state || "/"


      const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
        .then(result =>{
            if(result.user){
                Swal.fire({
                    title: 'Login successfully!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate(from);
            }
        })
        .catch(error =>{
            console.error(error);
            Swal.fire({
                title: 'Error login!',
                text: 'Incorrect Email & Password',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-full">
    <img className="w-5/6" src={img1} alt="" />
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center font-bold text-blue-500">Login Now</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center mb-1"> Please Register first<Link className="text-blue-500 font-bold" to="/register">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;
