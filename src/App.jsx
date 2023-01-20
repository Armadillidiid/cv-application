import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import Education from './components/Education'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'


export default function App() {
  const [userData, setUserData]  = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phoneNumber: '',
    website: '',
    bio: '',
    education: [
      {
        id: uniqid(),
        school: '',
        degree: '',
        city: '',
        state: '',
        timeframe: ''

      }
    ],
    experience: [
      {
        id: uniqid(),
        company: "",
        position: "",
        city: "",
        state: "",
        timeframe: "",
        description: ""
      }
    ],
    project: [
      {
        id: uniqid(),
        name: '',
        description: ''
      }
    ],
    skill: [
      {
        id: uniqid(),
        name: ''
      },
    ]
})

const handleChange = (e) => {
    const { value, name } = e.target
    console.log(value, name)
    setUserData(prevUser => ({
        ...prevUser,
        [name]: value
    }))
}

const onHandleObjectChange = (e, index, component) => {
  const { value, name } = e.target
  setUserData((prevUserData) => {
    const userDataCopy = {...prevUserData}
    userDataCopy[component][index][name] = value
    return(userDataCopy)
  })
}

const onHandleDeleteClick = (id, component) => {
  setUserData(prevUser => {
    const prevUserCopy = {...prevUser}
    prevUserCopy[component] = prevUserCopy[component].filter(element => element.id !== id)
    return(prevUserCopy)
  })
}
  return (
    <div className='mx-auto px-4'>
      <div className='grid grid-cols-3'>
        <div>
        <Profile userData={userData} handleChange={handleChange} />
        <Education userData={userData} setUserData={setUserData} handleChange={onHandleObjectChange} handleDeleteClick={onHandleDeleteClick} />
        <Experience userData={userData} setUserData={setUserData} handleChange={onHandleObjectChange} handleDeleteClick={onHandleDeleteClick} />
        <Project userData={userData} setUserData={setUserData} handleChange={onHandleObjectChange} handleDeleteClick={onHandleDeleteClick} />
        <Skill userData={userData} setUserData={setUserData} handleChange={onHandleObjectChange} handleDeleteClick={onHandleDeleteClick} />
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}
