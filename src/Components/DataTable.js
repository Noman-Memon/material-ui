import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Pdf'
import { Button } from '@mui/material'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => {
      console.log(params)
      return <Button onClick={() => console.log(params.row)}>Test</Button>
    },
  },
]
const DataTable = (props) => {
  console.log(props)
  // const [tableData, setTableData] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((data) => data.json())
  //     .then((data) => setTableData(data))
  // }, [])
  return (
    <>
      <div className="container" style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={props.tableData}
          columns={columns}
          pageSize={10}
          checkboxSelection
        ></DataGrid>
      </div>
      {/* <PDFViewer width="100%" height="1000px">
        <MyDocument nomankadata={tableData} />
      </PDFViewer> */}
    </>
  )
}
export default DataTable
