import React from 'react'
import { useParams } from 'react-router-dom'

const EmployeesDetails = () => {
    let {id} = useParams()
  return (
    <div>EmployeesDetails</div>
  )
}

export default EmployeesDetails