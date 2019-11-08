import React from 'react'
import '../../styles/undefined-notification.css';

 function UndefinedNotification(props) {
    return (
        <div className="notification">
            {props.info}
        </div>
    )
}
export default UndefinedNotification
