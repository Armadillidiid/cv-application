import React, { useState, useEffect } from "react";


const Profile = (props) => {
    const [userData, setUserData]  = useState({
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        phoneNumber: '',
        website: '',
        bio: ''
    })
    
    const handleChange = (e) => {
        const { value, name } = e.target
        setUserData(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }
    
    console.log(userData)
    useEffect(() => {
        setUserData(prevState => {
            return({
                ...prevState,
                firstName: 'James'
            })
        })
    }, [])

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
                        onChange={handleChange}
                        value={userData.firstName}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text"
                        placeholder="Your last name"
                        name="lastName"
                        onChange={handleChange}
                        value={userData.lastName}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        placeholder="Current job title"
                        name="title"
                        onChange={handleChange}
                        value={userData.title}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        placeholder="Your email"
                        name="email"
                        onChange={handleChange}
                        value={userData.email}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text"
                        placeholder="Your phone number"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={userData.phoneNumber}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="website">Website</label>
                    <input 
                        type="text"
                        placeholder="Your website"
                        name="website"
                        onChange={handleChange}
                        value={userData.website}
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="bio">Bio</label>
                    <textarea 
                        rows={6}
                        placeholder="Your bio"
                        name="bio"
                        onChange={handleChange}
                        value={userData.bio}
                    />
                </div>
            </form>
        </div>
    )
}


export default Profile