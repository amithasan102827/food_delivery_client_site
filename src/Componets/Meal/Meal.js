import { useContext } from "react";
import { userContext } from "../../App";


const Meal = ({meal,handleAddToCart}) => {

    const { name, image, price } = meal;
    
    // const [handleAddToCart] = useContext(userContext);

  

    
    
    return (
        <div>
            
                <div class="col">
                    <div style={{width:'90%', margin:'auto'}} class="card">
                        <img style={{width:'75%',margin:'auto',padding:'10px', marginTop:'10px'}} src={image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <h5 class="card-title">Price: ${price}</h5>
                                {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                {/* <button  onClick={()=>handleAddToCart(meal)} >Add To Cart</button> */}
                                <button onClick={()=>handleAddToCart(meal)}  type="button" class="btn btn-outline-warning">Add To Cart</button>
                            </div>
                    </div> 




               
            </div>
        </div>
    );
};

export default Meal;