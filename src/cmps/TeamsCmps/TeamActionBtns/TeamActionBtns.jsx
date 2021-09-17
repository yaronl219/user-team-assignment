import { Apps, Edit, Settings, Delete } from '@material-ui/icons'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab'
import React, { useState } from 'react'
import { connect } from 'react-redux'

export const _TeamActionBtns = ({team}) => {

    const [isOpen, setIsOpen] = useState(false)
    const onRemoveTeam = () => {
        console.log('Delete added soon')
    }

    return (
        <SpeedDial open={isOpen} direction='left' onClick={() => setIsOpen(!isOpen)} ariaLabel="SpeedDial example" icon={<Settings />}>
            <SpeedDialAction icon={<Apps />} tooltipTitle="wlbl" />
            <SpeedDialAction icon={<Edit />} tooltipTitle="Rename" />
            <SpeedDialAction icon={<Delete />} tooltipTitle="Delete" onClick={onRemoveTeam} />
        </SpeedDial >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const TeamActionBtns = connect(mapStateToProps, mapDispatchToProps)(_TeamActionBtns)
