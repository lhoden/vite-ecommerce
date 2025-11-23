import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main style={{ minHeight: "80vh", maxWidth: "100vw" }}>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.isRequired,
}