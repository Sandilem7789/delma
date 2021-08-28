import React from 'react'

//importing User & FootballTeam components
import FootballTeam from './FootballTeam'
import User from './User'


const username="JohnDube";
const contactNumber="082 434 7779";
const email="test@gmail.com"


const Profile = () => {
    return (
        <div className="profile-container">
            <User 
                username={username}
                contactNumber={contactNumber}
                email={email}
            />
            <FootballTeam />
        </div>
    )
}

export default Profile
