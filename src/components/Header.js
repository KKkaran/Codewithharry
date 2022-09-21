import React from 'react'
import PropTypes from 'prop-types'

export default function Header({ title, name }) {
    return (
        <>
            <h3>{ title}</h3>
        </>
        )
    }

//strict type checking for {surprises} at production time
Header.propTypes = {
    title: PropTypes.string,
    //name: PropTypes.bool.isRequired

}
Header.defaultProps = {
    title: "Default Title",
}