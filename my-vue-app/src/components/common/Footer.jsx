import LogoImg from '../../assets/common/camera-logo.png';
import { BodyOne, Caption, Title } from './CustomComponents';
import React from 'react';
import { CustomLink } from './CustomComponents';

export const Footer = () => {
    return (
        <>
            <footer className="py-14">
                <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img src={LogoImg} alt="LogoImg" className="h-12" />
                        <div className="flex flex-col gap-2 mt-5">
                            <Caption>Address : 100 Lens Street, NY, US</Caption>
                            <Caption>Email: example@camerashop.com</Caption>
                            <Caption>Call: 111-111-1234</Caption>
                        </div>
                        <br/>
                        <BodyOne>Subscribe to Our Newsletter</BodyOne>
                        <input 
                            type="text"
                            className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <Title level={5} className="mb-3 underline">Our Stores</Title>
                        <div className="flex flex-col gap-4 ml-2">
                            <CustomLink>Camera Shop</CustomLink>
                            <CustomLink>Photo Editing Software</CustomLink>
                            <CustomLink>Video Tools</CustomLink>
                            <CustomLink>Backlights and Boxlights</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={5} className="mb-3 underline">Useful Links</Title>
                        <div className="flex flex-col gap-4 ml-2">
                            <CustomLink>Home</CustomLink>
                            <CustomLink>Shop</CustomLink>
                            <CustomLink>Blog</CustomLink>
                            <CustomLink>Contact Us</CustomLink>
                            <CustomLink>Cart Page</CustomLink>
                            <CustomLink>My Account</CustomLink>
                        </div>
                    </div>
                    <div>
                        <Title level={5} className="mb-3 underline">Customer Reviews</Title>
                        <div className="flex flex-col gap-4 ml-2">
                            <CustomLink>Individual Product Reviews</CustomLink>
                            <CustomLink>Common Feedback</CustomLink>
                            <CustomLink>Companies that Partner with Us</CustomLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}