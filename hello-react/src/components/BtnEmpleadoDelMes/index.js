import React from 'react'

const BtnEmpleadoDelMes = props => {

    const {
        employeeId,
        handleEmpleadoMesClick
    } = props
     return (
        <button
            className='button is-info'
            onClick={()=>handleEmpleadoMesClick(employeeId)}
        >
            <span className='icon is-small'>
                <i className='fas fa-award' />
            </span>
            <span>The chosen one</span>
        </button>
    )
}

export default BtnEmpleadoDelMes