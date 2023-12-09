import React from 'react'
import DirectoryFlow from './directoryFlow'
import dropItems from '../antcomps/dropItems'

const dataDirectories = () => {
  return (
    <div className='w-full h-full lg:pt-4 lg:pl-4'>
        <div className='bg-slate-100 rounded-xl h-full overflow-y-auto'>

            <div className='flex justify-center items-end h-12 text-2xl'>
                Table Structures
            </div>

            <div className="w-full py-4">
                <DirectoryFlow
                    tableHead={dropItems[1][0]}
                    tableName="Customers"
                    tableNo={0}
                />
            <div className="w-full border-b-2 mx-auto mt-8 mb-4"></div>
                <DirectoryFlow
                    tableHead={dropItems[1][1]}
                    tableName="Products"
                    tableNo={1}
                />
            <div className="w-full border-b-2 mx-auto mt-8 mb-4"></div>
                <DirectoryFlow
                    tableHead={dropItems[1][2]}
                    tableName="Order Details"
                    tableNo={2}
                />
            </div>
            
        </div>
    </div>
  )
}

export default dataDirectories