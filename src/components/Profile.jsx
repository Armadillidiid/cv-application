import React, { useState, useEffect } from "react";

const Profile = (props) => {
  return (
    <div className="bg-gray-800 p-6 my-6  rounded-lg">
      <h2 className="mb-4 font-semibold text-xl text-white">Personal Data</h2>
      <form className="grid grid-cols-2 gap-4">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="text-sm">
            First Name
          </label>
          <input
            type="text"
            placeholder="Your first name"
            name="firstName"
            onChange={props.handleChange}
            value={props.userData.firstName}
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
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
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
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
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
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
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
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
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
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
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
          />
        </div>

        <div className="flex flex-col col-span-2 mt-2">
          <label htmlFor="bio">Bio</label>
          <textarea
            rows={4}
            placeholder="Your bio"
            name="bio"
            onChange={props.handleChange}
            value={props.userData.bio}
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
