


const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;


    
    
    return (
        <div>
            
                <div class="col">
                    <div class="card">
                        <img src={strMealThumb} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{strMeal}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div> 




               
            </div>
        </div>
    );
};

export default Meal;