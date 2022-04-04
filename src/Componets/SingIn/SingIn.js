import React from 'react';
import { Link } from "react-router-dom";
import './SingIn.css';
import background from '../../images/bannerbackground.png'
import { useForm } from 'react-hook-form';
import useFirebase from '../Hooks/useFirebase';
import logo from '../../images/logo2.png';
import useAuth from '../Hooks/useAuth';


const SingIn = () => {
      
    const {singInUsingGoogle,setUser,emailPasswordAuthentication}=useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        // setLoginData(data);
        emailPasswordAuthentication(data.Email, data.password)
    } 

    const handleGoogleLogin=()=>{
        singInUsingGoogle()
        .then((result) => {
          const user = result.user;
       
          setUser(user);
          console.log(user);
        })
     
    }
    return (
        <div >
             <div style={{marginTop:'85px'}} className='container '>
            <div className='backgroundImage ' style={{ backgroundImage: `url(${background})` }}>

              
              <div className='' >
                <img style={{width:'20%', marginBottom:'10px'}} src={logo} alt="" />
                <p style={{fontSize:'20px',fontWeight:'bold'}}>Please SingIn</p>


                <form className='loginForm mb-5 pb-5'  onSubmit={handleSubmit(onSubmit)}>

                    {/* <input className='input_field' type="text" placeholder="Name" {...register(" Name", { required: true, maxLength: 80 })} /> <br /> */}

                 

                    <input className='input_field' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />

                    <input className='input_field' type="password" placeholder="Password" {...register("password", { required: true, maxLength: 80 })} /> <br />

                    {/* <input className='input_field' type="password" placeholder="Confirm Password" {...register("confirm password", { required: true, maxLength: 80 })} /> <br /> */}

                    {/* <input className='input_field' type="password" placeholder="Password" {...register("password", { required: true, maxLength: 100 })} /> <br />

                    <input className='input_field' type="password" placeholder="Confirm Password" {...register("password", { required: true, maxLength: 100 })} /> <br /> */}

                   

                    {/* <select {...register("Title", { required: true })}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select> */}

                    {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                    <input {...register("Developer", { required: true })} type="radio" value="No" /> */}

                   

                    <input className='submit-button' type="submit" /> <br />
                      
                    <button onClick={handleGoogleLogin} type="button" className="btn btn-primary google-button m-2">Google SingIn</button> <br />

                    <Link to='/Login'>New User </Link> 
                </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SingIn;