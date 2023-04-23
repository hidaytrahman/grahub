import { useEffect, useState } from 'react'
import { dummyCustomer } from '../core'

const useLocalStorage = () => {
  const currentCustomers = JSON.parse(localStorage.getItem('customers')) || []
  const [customers, setCustomers] = useState(currentCustomers)

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers))
  }, [customers])

  return {
    customers,
    setCustomers
  }
}

export default useLocalStorage
