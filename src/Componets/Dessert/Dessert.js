import React from 'react';

const dessert = [
    {
        id: 1,
        category:'Dessert',
        name: 'Dark Chocolate Cake',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/1.jpg",
        price:'11'
        
    },
    {
        id: 2,
        category:'Dessert',
        name: 'Doughnut Chocolate',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/3.jpg",
        price:'12'
    },
    {
        id: 3,
        category:'Dessert',
        name: 'Chocolate Ice Cream',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/7.jpg",
        price:'18'
    },
    {
        id: 4,
        category:'Dessert',
        name: 'Dark Chocolate Cake',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/8.jpg",
        price:'18'
    },
    {
        id: 5,
        category:'Dessert',
        name: 'Sweet Dougnuts',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/5.jpg",
        price:'14'
    },
    {
        id: 6,
        category:'Dessert',
        name: 'Birthday Cake',
        image: "https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/6.jpg",
        price:'20'
    },
   
]

const Dessert = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    dessert.map(data =>

                        <div class="col">
                            <div class="card h-100">
                                <img src={data.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{data.name}</h5>
                                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                </div>
                                {/* <div class="card-footer">
                                    <small class="text-muted">{data.date}</small>
                                </div> */}
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default Dessert;