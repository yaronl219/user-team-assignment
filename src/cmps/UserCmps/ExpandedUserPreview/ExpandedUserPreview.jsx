import { Card } from '@material-ui/core'
import React from 'react'

export function ExpandedUserPreview({ user }) {

    const getLastReportTime = () => {
        try {
            return new Date(user.lastReport).toLocaleString()
        } catch {
            return ''
        }
    }

    const getUserStatus = () => {
        const statusMap = {
            WaitingForLicense: 'Waiting for license'
        }
        return statusMap[user.recorderStatus]
    }

    return (
        <div className="expanded-user-preview-container">
            <div className="user-display-row">
                <div className="user-att">
                    {user.machineSignature.displayUserName}
                </div>
                <div className="user-att">
                    {getLastReportTime()}
                </div>
            </div>
            <div className="user-display-row">
                <div className="user-att">
                    {getUserStatus()}
                </div>
                <div className="user-att">
                    {user.recLength} actions
                </div>
            </div>
            <div className="user-display-row">
                <div className="user-att">
                    {user.machineSignature.machineSignatureKey}
                </div>
            </div>
        </div>
    )
}
