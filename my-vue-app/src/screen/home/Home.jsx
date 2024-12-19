import React from 'react';
import { Hero } from '../../components/hero/Hero';
import { Product } from '../../router';

export const Home = () => {
    return (
        <>
            <Hero />
            <Product />
        </>
    );
}