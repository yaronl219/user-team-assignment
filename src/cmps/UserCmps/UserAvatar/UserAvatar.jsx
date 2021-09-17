import React from 'react'
import { Avatar } from '@material-ui/core'


export function UserAvatar({ displayName }) {

    const stringToColor = () => {
        let hash = 0;
        let i;

        for (i = 0; i < displayName.length; i += 1) {
            hash = displayName.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        return color;
    }

    const getInitials = () => {
        return displayName[0] + displayName[1]
    }

    return (
        <div className="avatar-container">
            <Avatar>
                <div className="avatar-name-container" style={{ backgroundColor: stringToColor(displayName) }}>
                    {getInitials(displayName)}
                </div>
            </Avatar>
        </div>
    )
}
