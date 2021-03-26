import React from 'react'


const Notification = ({ message, warning }) => {

    if(warning){
        return (
            <div >
                <p style={{border: '3px solid red', color: 'red', fontSize: 50, background:'rgb(169,169,169)'}}>
                {message}
                </p>
            </div>
        ) 
    }
    else{
        return (
            <div >
                <p style={{border: '3px solid green', color: 'green', fontSize: 50, background:'rgb(169,169,169)'}}>
                {message}
                </p>
            </div>
        ) 
    }

}

export default Notification