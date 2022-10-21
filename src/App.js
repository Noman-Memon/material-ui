import './App.css'
import DataTable from './Components/DataTable'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Components/Pdf'

function App() {
  return (
    <>
      {/* <DataTable /> */}
      <PDFViewer width="100%" height="1000px">
        <MyDocument />
      </PDFViewer>
    </>
  )
}

export default App
