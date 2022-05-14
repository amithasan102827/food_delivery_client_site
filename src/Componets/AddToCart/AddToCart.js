import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import './AddToCart.css';
import useAuth from '../Hooks/useAuth';
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';







const AddToCart = ({ cart, setCart, setTotal }) => {

    const [date, setDate] = useState();
    const [data, setData] = useState([]);
    const { control, register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setData(data);

        console.log(data);
        reset();
    }
    console.log(errors);

    // const [cart] = useContext(userContext);

    const { user } = useAuth();

    const total = cart.reduce((sum, food) => sum + parseFloat(food.price), 0);
    console.log(cart);

    setTotal(total);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    };





    const handleOrder = (cart, email, data, total) => {
        const item = [{
            email: email,
            cart: cart,
            data: data,
            total: total
        }]
        if (cart.length !== 0) {
            fetch("https://whispering-citadel-01362.herokuapp.com/orders", {
                method: "POST",
                headers: { "content-type": "application/json" },

                body: JSON.stringify(item),


            })


                .then(res => res.json())
                .then(result => {

                    // console.log(cart);
                    if (result.insertedIds) {

                        // alert(' Order place successfully');

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
            {/* <h3 style={{ fontWeight: "bold" }}>Total Item:{cart.length}</h3> */}
            <h4>Total Cost:${total}</h4>
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
                            <li class="list-group-item">Total Cost:${total}</li>
                            {/* <li class="list-group-item">A third item</li> */}
                        </ul>
                        <div class="card-footer">

                            {/* <button onClick={() => handleOrder(cart, user.email)}>Place Order</button> */}

                            {/* <button onClick={() => handleOrder(cart, user.email)} type="button" class="btn btn-primary btn-sm">place order</button> */}
                        </div>
                    </div>




                    {/* <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} /> */}


                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} placeholder="Name" {...register("name")} />
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} placeholder="Mobile" {...register("mobile")} />
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} placeholder="Address" {...register("address")} /> <br />

                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} type="date" {...register("date")} /> <br />
                        <input style={{ marginRight: "65px", width: "81%", marginBottom: "10px", outline: "none" }} type="time" {...register("time")} /> <br />




                        <input style={{ marginLeft: "157px", backgroundColor: "green", border: 'none', color: 'white' }} type="submit" />
                    </form>

                    <Link to="payment">
                        <button style={{ marginTop: "10px", width: "80%", marginRight: "60px" }} onClick={() => handleOrder(cart, user.email, data, total)} type="button" class="btn btn-primary btn-sm">place order</button>
                    </Link>
                </div>

            </div>
        </div>



    );
};

export default AddToCart;