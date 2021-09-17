import { Card, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewTeam } from '../../../store/actions/usersActions'

const _CreateTeam = ({createNewTeam}) => {
    
    const [teamName, setTeamName] = useState('')

    const onAddNewTeam = async(ev) => {
        ev.preventDefault()
        createNewTeam(teamName)
        setTeamName('')
    }

    return (
        <Card className="create-team-container">
            <h3>Create new team</h3>
            <form onSubmit={onAddNewTeam}>
                <Input fullWidth onChange={(ev) => setTeamName(ev.target.value)} value={teamName} />
            </form>
        </Card>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    createNewTeam
}

export const CreateTeam = connect(mapStateToProps, mapDispatchToProps)(_CreateTeam)
