import React from 'react'
import  './undefined-notification.css';

 function UndefinedNotification(props) {
    return (
        <div className="notification" className="notification">
            {props.info}
        </div>
    )
}
export default UndefinedNotification
