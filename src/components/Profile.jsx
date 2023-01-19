import React, { useState, useEffect } from "react";


const Profile = (props) => {
    return (
        <div>
            <h2>Personal Data</h2>
            <form className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        placeholder="Your first name"
                        name="firstName"
                        onChange={props.handleChange}
                        value={props.userData.firstName}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text"
                        placeholder="Your last name"
                        name="lastName"
                        onChange={props.handleChange}
                        value={props.userData.lastName}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        placeholder="Current job title"
                        name="title"
                        onChange={props.handleChange}
                        value={props.userData.title}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        placeholder="Your email"
                        name="email"
                        onChange={props.handleChange}
                        value={props.userData.email}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text"
                        placeholder="Your phone number"
                        name="phoneNumber"
                        onChange={props.handleChange}
                        value={props.userData.phoneNumber}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="website">Website</label>
                    <input 
                        type="text"
                        placeholder="Your website"
                        name="website"
                        onChange={props.handleChange}
                        value={props.userData.website}
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="bio">Bio</label>
                    <textarea 
                        rows={6}
                        placeholder="Your bio"
                        name="bio"
                        onChange={props.handleChange}
                        value={props.userData.bio}
                    />
                </div>
            </form>
        </div>
    )
}


export default Profile