import React from 'react'
import { BsHeader } from '../../components/bs-header/BsHeader'
import { BsList } from '../../components/bs-list/BsList';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <BsHeader />
      <BsList />
    </div>
  )
}
