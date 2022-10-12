import React from 'react';

function ProductCard(props) {
    return (  

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={props.image} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{`$${props.price}`}</button>
                </div>
            </div>
        </div>
        
    );
}

export default ProductCard;