import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import './AddToCart.css';
import useAuth from '../Hooks/useAuth';








const AddToCart = ({ cart, setCart }) => {

    // const [cart] = useContext(userContext);

    const { user } = useAuth();

    const Total = cart.reduce((sum, food) => sum + parseFloat(food.price), 0);
    console.log(cart);


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    };




    const handleOrder = (cart, email) => {
        const item = [{
            email: email,
            cart: cart
        }]
        if(cart.length!==0)
    {
        fetch("http://localhost:5000/haiku", {
            method: "POST",
            headers: { "content-type": "application/json" },

            body: JSON.stringify(item),

        })


            .then(res => res.json())
            .then(result => {
                console.log(cart);
                if (result.insertedId) {
                    alert(' Order place successfully');

                }
            })
        }else{
            alert("The cart is empty");
        }
    }



    return (


        <div className="container" style={{ marginTop: '80px' }} >
            <h3>Add to cart:{cart.length}</h3>
            <h4>Total Cost:${Total}</h4>
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(item => <div>

                            <div style={{ width: '80%' }} class="card mb-3">
                                <div class="row g-2">
                                    <div class="col-md-3">
                                        <img style={{ width: '100%' }} src={item.image} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <h6>Price:${item.price}</h6>
                                            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                            <button onClick={() => handleRemove(item.id)}>Remove</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        )
                    }
                </div>

                <div className="col-md-4" >
                    <div class="card" style={{ width: '18rem' }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Add to cart:{cart.length}</li>
                            <li class="list-group-item">Total Cost:${Total}</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-footer">
                            <button onClick={() => handleOrder(cart, user.email)}>Place Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default AddToCart;