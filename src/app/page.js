'use client';

import SqlEditor from '@/components/Editor/sqlEditor'
import DataView from '@/components/others/dataView'
import SelectionInput from '@/components/others/selectionInput'
import DataDirectories from '@/components/others/dataDirectories';
import Navbar from '@/components/others/navbar';
import { useEffect, useState } from 'react'
import dropItems from '@/components/antcomps/dropItems';
import { message} from 'antd';

export default function Home() {

  const Tables = ['Customers', 'Products', 'OrderDetails'];
  const [selectedTable, setSelectedTable] = useState('Customers');
  const [selectedTableNo, setSelectedTableNo] = useState(0); // 0, 1, 2
  const [selectedItems, setSelectedItems] = useState([]);
  const [query, setQuery] = useState('SELECT * FROM Customers');
  const [editorQuery, setEditorQuery] = useState(query);
  const [searchActive, setSearchActive] = useState(true);
  const [dataTableNo, setDataTableNo] = useState(0); // 0, 1, 2
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    if(selectedItems.length === dropItems[1][selectedTableNo].length){
      setQuery(`SELECT * FROM ${selectedTable}`);
    } else if(selectedItems.length){
      setQuery(`SELECT ${selectedItems} FROM ${selectedTable}`);
    }else{
      setQuery(``);
    }
  }, [selectedTable, selectedItems])

  useEffect(() => {
    setSearchActive(editorQuery===query);
  }, [editorQuery, setQuery])

  const refreshClick = () => {
    setSelectedTableNo(0); 
    setSelectedTable('Customers');
    setDataItems([]);
    setSelectedItems(dropItems[1][selectedTableNo]);
    message.info("Let's start again!");
  }

  return (
    <main className="p-6 h-screen font-mono bodytext text-2xl">
      <div className="flex flex-col items-center h-full">
        <div className='h-fit lg:h-1/6 w-full flex flex-col items-center justify-around'>
          <Navbar />
          <div className='bg-slate-300 w-full p-3 rounded'>
            <SelectionInput
              selectedItem={selectedTable}
              selectedItems={selectedItems}
              selectedTableNo={selectedTableNo}
              onSetTable={(e)=>{setSelectedTable(Tables[e]); setSelectedTableNo(e)}}
              onSetItems={(e)=>{setSelectedItems(e)}}
              searchActive={searchActive}
              editorQuery={editorQuery}
              buttonClick={()=>{setDataTableNo(selectedTableNo); setDataItems(selectedItems);message.info("Query Successful");}}
              refreshClick={()=>{refreshClick();}}
            />
          </div>
        </div>
        <div className='lg:h-5/6 flex flex-col w-full'>
          <div className='h-1/6 w-full'>
            <SqlEditor 
              query={query}
              onEditorChange={(e)=>{setEditorQuery(e)}}
            />
          </div>
          <div className='h-5/6 w-full lg:grid lg:grid-cols-10'>
            <div className='h-1/2 lg:col-span-7 lg:h-full'>
              <DataView 
                selectedTableNo={dataTableNo}
                selectedItems={dataItems}
              />
            </div>
            <div className='my-6 lg:my-0 lg:col-span-3 h-1/2 lg:h-full overflow-y-auto'><DataDirectories /></div>
          </div>
        </div>
      </div>
    </main>
  )
}
