import React from 'react'
import TransactionsHistoryTable from '../TransactionsHistoryTable/TransactionsHistoryTable'

const TransactionsHistory = () => {
  return (
    <div className='w-full flex flex-col absolute top-0 bg-white rounded-2xl p-10'>
      <TransactionsHistoryTable />
    </div>
  )
}

export default TransactionsHistory
