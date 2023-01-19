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

const handleEducationChange = (e) => {
  const { value, name } = e.target
  const index = e.target.getAttribute('index')
  const prevUserData = {...userData}
  prevUserData['education'][index][name] = value
  setUserData(prevUserData) 
}

  return (
    <div className='mx-auto px-4'>
      <div className='grid grid-cols-3'>
        <div>
        <Profile userData={userData} handleChange={handleChange} />
        <Education userData={userData} handleChange={handleEducationChange} />
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}
