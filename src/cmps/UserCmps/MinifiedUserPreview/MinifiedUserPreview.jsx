import React from 'react'
import { connect } from 'react-redux'

const _MinifiedUserPreview = ({ minifiedUserPreviewSelectedDisplayParam, user }) => {

    const getParamToDisplay = () => {
        const parsedPreviewDisplayParam = minifiedUserPreviewSelectedDisplayParam.split('.')

        const traverseDown = (obj, rep) => {
            try {
                const val = parsedPreviewDisplayParam[rep]
                if (rep === parsedPreviewDisplayParam.length - 1) return obj[val]
                return traverseDown(obj[val], rep + 1)
            } catch (err) {
                return user.machineSignature.displayUserName
            }
        }

        let paramValue = traverseDown(user, 0)
        if (minifiedUserPreviewSelectedDisplayParam === 'lastReport') {
            paramValue = new Date(paramValue).toLocaleString()
        }

        return paramValue
    }

    return (
        <div className="user-att">
            {getParamToDisplay()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        minifiedUserPreviewSelectedDisplayParam: state.viewElementsReducer.minifiedUserPreviewSelectedDisplayParam
    }
}

export const MinifiedUserPreview = connect(mapStateToProps)(_MinifiedUserPreview);

