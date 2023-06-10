import { useContext } from "react";
import { userContext } from "../../App";


const Meal = ({ meal, handleAddToCart }) => {

    const { name, image, price } = meal;

    // const [handleAddToCart] = useContext(userContext);


    return (
        <div>
            <div class="col">
                <div style={{ width: '100%', margin: 'auto' }} class="card shadow h-100">
                    <img style={{ width: '100%', margin: 'auto', height:'200px', objectFit:'cover' }} src={image} className="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">{name}</h5>
                        <h5 class="card-title">Price: ${price}</h5>
                        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        {/* <button  onClick={()=>handleAddToCart(meal)} >Add To Cart</button> */}
                        <button onClick={() => handleAddToCart(meal)} type="button" class="btn btn-outline-danger btn-sm fw-bold">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;