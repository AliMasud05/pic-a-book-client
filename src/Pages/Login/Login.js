import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn}=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data=>{
        console.log(data);
        const { email, password } = data;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            const currentUser = {
                user: user.email
            }
            fetch('https://pic-a-book-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('token', data.token)
                    navigate(from, { replace: true })
                })
            console.log(user)
        })
        .then(err=>console.log(err))

    };

    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;