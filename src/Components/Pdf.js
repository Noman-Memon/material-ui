import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Create styles
// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     // paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'left',
//     justifyContent: 'space-between',
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: 'justify',
//     fontfamily: 'Times-Roman',
//   },
//   image: {
//     width: 80,
//     height: 30,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'gray',
//   },
//   pageNumber: {
//     position: 'absolute',
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: 'gray',
//   },
//   heading: {
//     fontSize: 15,
//     // marginLeft:70,
//     // textAlign: "center"
//   },
//   headingChild: {
//     fontSize: 13,
//     marginLeft: 110,
//     marginTop: 5,
//     // textAlign: "center"
//   },
//   headingBody: {
//     textAlign: 'center',
//     marginLeft: 30,
//   },
//   DateOne: {
//     textAlign: 'left',
//     fontSize: 10,
//     marginBottom: 5,
//   },
//   timeOne: {
//     // textAlign: "right",
//     marginLeft: 370,
//     fontSize: 10,
//     marginBottom: 5,
//   },
//   voucherType: {
//     fontSize: 10,
//   },
//   voucherNo: {
//     fontSize: 10,
//     marginTop: 5,
//   },
//   voucherContainer: {
//     marginLeft: 310,
//   },
//   AccTitleBody: {
//     width: 50,
//   },
//   CodeBody: {
//     width: 50,
//     marginLeft: 8,
//   },
//   NarrationBody: {
//     width: 225,
//     marginLeft: 10,
//     fontSize: 8,
//   },
//   NarrationHead: {
//     width: 225,
//     marginLeft: 8,
//     // paddingLeft: 0,
//     // paddingRight: 5,
//   },
//   DebitBody: {
//     width: 50,
//     marginLeft: 20,
//     position: 'absolute',
//     textAlign: 'right',
//     // marginRight: 0,
//   },
//   CreditBody: {
//     width: 60,
//     position: 'absolute',
//     marginLeft: 60,
//     // paddingLeft: 10,
//     // paddingRight: 10,
//     textAlign: 'right',
//     // marginRight: 0,
//   },
//   BalanceBody: {
//     width: 60,
//     marginLeft: 170,
//     position: 'absolute',
//     // marginLeft:40,
//     // marginRight: 0,
//     // textAlign: 'right',
//     // marginRight: 0,
//   },
//   DebitHead: {
//     width: 70,
//     textAlign: 'right',
//     marginRight: 0,
//     // marginLeft: 8,
//   },
//   BalanceHead: {
//     width: 60,
//     textAlign: 'right',
//     marginRight: 0,
//     // marginLeft: 8,
//   },
//   CreditHead: {
//     width: 60,
//     textAlign: 'right',
//     marginRight: 0,
//     // marginLeft:15 ,
//   },
//   debitTotal: {
//     width: 50,
//     borderTop: '1px solid black',
//     paddingTop: 5,
//     paddingLeft: 20,
//     // fontWeight:20,
//     // marginLeft: 2,
//   },
//   CreditTotal: {
//     width: 40,
//     borderTop: '1px solid black',
//     // marginLeft:  2,
//     paddingTop: 5,
//     paddingLeft: 28,
//     paddingRight: 38,
//   },
//   status: {
//     fontSize: 10,
//     marginLeft: 78,
//     marginTop: 30,
//   },
//   AccCode: {
//     fontSize: 10,
//     float: 'left',
//   },
//   AccName: {
//     fontSize: 10,
//     textOverflow: 'ellipsis',
//     width: 120,
//     marginLeft: 350,
//   },
// })
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={{ padding: '20px' }}>
      <View
        style={{
          paddingBottom: '10',
          paddingTop: '0',
          fontSize: '18',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text>M3 TECHNOLOGIES PAKISTAN(PRIVATE) LIMITED</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: '15',
        }}
      >
        <View
          style={{
            marginLeft: '200px',
          }}
        >
          <Text>DEBIT VOUCHER</Text>
        </View>

        <View
          style={{
            marginRight: '50px',
          }}
        >
          <Text>Status</Text>
        </View>
      </View>
      <View
        style={{
          paddingBottom: '5',
          paddingTop: '10',
          fontSize: '15',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text>Date</Text>
        <View
          style={{
            marginRight: '60px',
          }}
        >
          <Text>Time</Text>
        </View>
      </View>
      <View
        style={{
          border: '1px solid black',
        }}
      ></View>
      <View
        style={{
          // paddingBottom: '5',
          paddingTop: '40',
          fontSize: '15',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text>Accounting Date</Text>
        <View
          style={{
            marginRight: '60px',
          }}
        >
          <Text>Voucher Type</Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: '408px',
          paddingBottom: '5',
          // paddingTop: '10',
          fontSize: '13',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text>Voucher No.</Text>
      </View>
      <View
        style={{
          border: '1px solid black',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: '10',
          paddingBottom: '5 ',
          paddingTop: '15',
          display: 'flex',
        }}
      >
        <View>
          <Text>Account Tittle</Text>
        </View>

        <View>
          <Text>Code</Text>
        </View>
        <View>
          <Text>Narration</Text>
        </View>
        <View>
          <Text>Ref</Text>
        </View>
        <View>
          <Text>Party</Text>
        </View>
        <View>
          <Text>Debit</Text>
        </View>
        <View>
          <Text>Credit</Text>
        </View>
      </View>
      <View
        style={{
          border: '1px solid black',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: '10',
          paddingBottom: '5',
          paddingTop: '200',
          display: 'flex',
        }}
      >
        fsdfsdffg
      </View>
      <View
        style={{
          border: '1px solid black',
          marginLeft: '400px',
        }}
      ></View>
      <View>
        <Text>Total</Text>
      </View>
      <View
        style={{
          border: '1px solid black',
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: '10',
          paddingBottom: '5',
          paddingTop: '75',
          display: 'flex',
        }}
      >
        <View>
          <View
            style={{
              border: '1px solid black',
            }}
          ></View>
          <Text>Prepare By</Text>
        </View>

        <View>
          <View
            style={{
              border: '1px solid black',
            }}
          ></View>
          <Text>Verified By</Text>
        </View>
        <View>
          <View
            style={{
              border: '1px solid black',
            }}
          ></View>
          <Text>Approved By</Text>
        </View>
        <View>
          <View
            style={{
              border: '1px solid black',
            }}
          ></View>
          <Text>Recieved By</Text>
        </View>
        <View>
          <View
            style={{
              border: '1px solid black',
            }}
          ></View>
          <Text>Audit By</Text>
        </View>
      </View>
    </Page>
  </Document>
)
export default MyDocument
