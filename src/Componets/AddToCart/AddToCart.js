import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import './AddToCart.css';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";








const AddToCart = ({ cart, setCart }) => {

    const [data, setData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setData(data);
        console.log(data);
    }
    console.log(errors);

    // const [cart] = useContext(userContext);

    const { user } = useAuth();

    const Total = cart.reduce((sum, food) => sum + parseFloat(food.price), 0);
    console.log(cart);


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    };





    const handleOrder = (cart, email, data) => {
        const item = [{
            email: email,
            cart: cart,
            data: data
        }]
        if (cart.length !== 0) {
            fetch("http://localhost:5000/haiku", {
                method: "POST",
                headers: { "content-type": "application/json" },

                body: JSON.stringify(item),

            })


                .then(res => res.json())
                .then(result => {
                    console.log(cart);
                    if (result.insertedIds) {
                        alert(' Order place successfully');

                    }
                })
        } else {
            alert("The cart is empty");
        }
    }


    // const handleOrder = (cart, email) => {
    //     const item = [{
    //         email: email,
    //         cart: cart
    //     }]
    //     if (cart.length !== 0) {
    //         fetch("http://localhost:5000/haiku", {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },

    //             body: JSON.stringify(item),

    //         })


    //             .then(res => res.json())
    //             .then(result => {
    //                 console.log(cart);
    //                 if (result.insertedIds) {
    //                     alert(' Order place successfully');

    //                 }
    //             })
    //     } else {
    //         alert("The cart is empty");
    //     }
    // }



    return (


        <div className="container" style={{ marginTop: '80px' }} >
            <h3 style={{ fontWeight: "bold" }}>Total Item:{cart.length}</h3>
            <h4>Total Cost:${Total}</h4>
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(item => <div>

                            <div style={{ width: '80%' }} class="card mb-3 shadow-sm   bg-body rounded">
                                <div class="row g-2">
                                    <div class="col-md-3">
                                        <img style={{ width: '100%' }} src={item.image} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <h6>Price:${item.price}</h6>
                                            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                            {/* <button onClick={() => handleRemove(item.id)}>Remove</button> */}

                                            <button onClick={() => handleRemove(item.id)} type="button" class="btn btn-danger btn-sm">Remove</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        )
                    }
                </div>

                <div className="col-md-4"  >
                    <div class="card shadow-sm p-1 mb-2 bg-body rounded" style={{ width: '18rem' }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Add to cart:{cart.length}</li>
                            <li class="list-group-item">Total Cost:${Total}</li>
                            {/* <li class="list-group-item">A third item</li> */}
                        </ul>
                        <div class="card-footer">

                            {/* <button onClick={() => handleOrder(cart, user.email)}>Place Order</button> */}

                            {/* <button onClick={() => handleOrder(cart, user.email)} type="button" class="btn btn-primary btn-sm">place order</button> */}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                  

                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} type="text" placeholder="Name" {...register("First name", { required: true, maxLength: 80 })} />
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "" }} type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                        {/* <input style={{ marginRight: "60px", width: "81%", marginBottom: "10px", outline: "" }} type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> */}
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "" }} type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                        
                        
                        <textarea style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none",height:"50px" }} type="text" placeholder="Address" {...register("Address", { required: true, maxLength: 80 })} /> <br />
                        {/* <select {...register("Title", { required: true })}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                        </select> */}

                        {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                        <input {...register("Developer", { required: true })} type="radio" value="No" /> */}

                        <input style={{marginLeft:"160px",backgroundColor:"green",color:'white',border:'none'}} type="submit" /> <br />

                        <Link to="/payment">
                        <button style={{marginTop:"20px",width:"80%",marginRight:"55px"}} onClick={() => handleOrder(cart, user.email,data)} type="button" class="btn btn-primary btn-sm">place order</button></Link>
                    </form>
                </div>

            </div>
        </div>



    );
};

export default AddToCart;