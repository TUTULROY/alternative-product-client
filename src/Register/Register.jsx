import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser, updateUserProfile, setLoading} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
      
  
      const from ="/"

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        if(password.length<6 || !uppercaseRegex.test(password) || !lowercaseRegex.test(password))
        {
            Swal.fire({
                icon: "error",
                title: "Password must contain at least 6 characters with both uppercase and lowercase letters.",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)

            const user = {email};
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)

            })
            .then(res =>res.json())
            .then(data =>{
               if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User added',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  updateUserProfile(name, photo)
                  .then(() =>{
                    setLoading(true)
                      navigate(from);
                      
                  }) 
               }
            })

        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="">
            <div className="">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

              
        <h2 className="text-center text-xl">Please Register</h2>
         <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
      <label className="label">
        <span className="label-text">User Name</span>
      </label>
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered"/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className=" relative">
          
    <input type={showPassword ? "text" : "password" } name="password"  placeholder="Password" className="w-full input input-bordered" required />
    

    <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash />  : <FaEye />
                }
            </span>

    </div>
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p className="text-center mt-2 mb-4">Already Have And Account Please Login <Link className="text-blue-500 font-bold" to="/login">Login</Link></p>
  </div>
  </div>
  
</div>
    );
};

export default Register;