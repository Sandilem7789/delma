import React from 'react'

const showHide = () => {
    let test = true;
    return !test
}

const User = ({username, contactNumber, email}) => {
    return (
        <div>
            <div className="heading">
                <h1 hidden={showHide()}>UserName</h1>
                <textarea onClick={() => showHide()}></textarea>
            </div>
            <div className="user-container">
                <div className="user-details">
                    <h3>Username: 
                        <br/>
                        {username}
                    </h3>
                    <h3>Contact Number:
                        <br/>
                        {contactNumber}
                    </h3>
                    <h3>Email Address:
                        <br/>
                        {email}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default User
