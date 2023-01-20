import { useState, useEffect } from 'react'
import Education from './components/Education'
import Profile from './components/Profile'
import uniqid from 'uniqid'

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
    experience: [],
    projects: [],
    skills: []
})

const handleChange = (e) => {
    const { value, name } = e.target
    console.log(value, name)
    setUserData(prevUser => ({
        ...prevUser,
        [name]: value
    }))
}

const handleEducationChange = (e, index) => {
  const { value, name } = e.target
  setUserData((prevUserData) => {
    const userDataCopy = {...prevUserData}
    userDataCopy['education'][index][name] = value
    return(userDataCopy)
  })
}

const onHandleDeleteClick = (id, object) => {
  setUserData(prevUser => {
    const prevUserCopy = {...prevUser}
    prevUserCopy[object] = prevUserCopy[object].filter(education => education.id !== id)
    return(prevUserCopy)
  })
}
  return (
    <div className='mx-auto px-4'>
      <div className='grid grid-cols-3'>
        <div>
        <Profile userData={userData} handleChange={handleChange} />
        <Education userData={userData} setUserData={setUserData} handleChange={handleEducationChange} handleDeleteClick={onHandleDeleteClick} />
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}
