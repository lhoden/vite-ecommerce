import React from 'react';

export const ProductCard = ({ id, title, description, images, price, discount, rating, featured, category, color }) => {
    return (
        <>
            <div className="product card">
                <div className="images h-96">
                    <img src={images[0].image}></img>
                    <div className="flex justify-between w-full p-5 absolute top-0 left-0">
                        {discount && <button className="discount-btn">{discount}%</button>}
                    </div>
                </div>
            </div>
        </>
    );
};