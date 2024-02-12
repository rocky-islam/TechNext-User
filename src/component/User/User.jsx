import React from 'react';

const User = ({user}) => {
    // console.log(user);
    const {address, company, email, firstName, lastName, image} =  user;
    return (
        <div className='border-2 rounded-lg'>
            {/* <h1>Single User :{user.id}</h1> */}
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='avatar'>
                <figure className='w-11/12'><img src={image} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title cursor-pointer">First Name: {firstName}</h2>
                    <h2 className="card-title">Last Name: {lastName}</h2>
                    <p>Email: {email}</p>
                    <p>State: {address.city}, city: {address.city}</p>
                    <p>Suite: {address.postalCode}</p>
                    <p>Company: {company.name}</p>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default User;