import { Select, MenuItem, Input } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { setMinifiedPreviewSelectedDisplayParam } from '../../../store/actions/viewElementsActions'
import { setUsers } from '../../../store/actions/usersActions'

const _UnassignedListHeader = ({ onToggleDrawer, minifiedUserPreviewSelectedDisplayParam, textFilter, unassignedUsers, setMinifiedPreviewSelectedDisplayParam, setUsers }) => {

    let debounceTimer = useRef(0)

    const optionalDisplayParams = [
        { value: 'machineSignature.displayUserName', label: 'Username' },
        { value: 'machineSignature.ip', label: 'IP' },
        { value: 'lastReport', label: 'Last seen' }
    ]

    const [localTextFilter, setLocalTextFilter] = useState('')


    const onChangeDisplayParam = (ev) => {
        setMinifiedPreviewSelectedDisplayParam(ev.target.value)
    }

    const onChangeTextFilter = (ev) => {
        clearTimeout(debounceTimer.current)
        const { value } = ev.target

        setLocalTextFilter(value)

        debounceTimer.current = setTimeout(() => {
            setUsers({ textFilter: value })
        }, 500)
    }

    return (
        <div className="unassigned-list-header-container">
            <h2>Unassigned users</h2>
            <Input placeholder="Search users" fullWidth value={localTextFilter} onChange={onChangeTextFilter} />

            <div className="display-by-container">
                <span>Display user by</span>
                <Select value={minifiedUserPreviewSelectedDisplayParam} onChange={onChangeDisplayParam}>
                    {optionalDisplayParams.map(option => <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>)}
                </Select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { textFilter, unassignedUsers } = state.unassignedUsersReducer
    return {
        minifiedUserPreviewSelectedDisplayParam: state.viewElementsReducer.minifiedUserPreviewSelectedDisplayParam,
        textFilter,
        unassignedUsers
    }
}

const mapDispatchToProps = {
    setMinifiedPreviewSelectedDisplayParam,
    setUsers
}

export const UnassignedListHeader = connect(mapStateToProps, mapDispatchToProps)(_UnassignedListHeader)
