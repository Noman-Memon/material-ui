import './App.css'
import DataTable from './Components/DataTable'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Components/Pdf'
import React, { useState, useEffect } from 'react'

function App() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])
  return (
    <>
      <DataTable tableData={tableData} />
      <PDFViewer width="100%" height="1000px">
        <MyDocument tableData={tableData} />
      </PDFViewer>
    </>
  )
}

export default App
