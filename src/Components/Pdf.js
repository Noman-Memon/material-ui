import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    // paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    justifyContent: 'space-between',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontfamily: 'Times-Roman',
  },
  image: {
    width: 80,
    height: 30,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'gray',
  },
  heading: {
    fontSize: 15,
    // marginLeft:70,
    // textAlign: "center"
  },
  headingChild: {
    fontSize: 13,
    marginLeft: 110,
    marginTop: 5,
    // textAlign: "center"
  },
  headingBody: {
    textAlign: 'center',
    marginLeft: 30,
  },
  DateOne: {
    textAlign: 'left',
    fontSize: 10,
    marginBottom: 5,
  },
  timeOne: {
    // textAlign: "right",
    marginLeft: 370,
    fontSize: 10,
    marginBottom: 5,
  },
  voucherType: {
    fontSize: 10,
  },
  voucherNo: {
    fontSize: 10,
    marginTop: 5,
  },
  voucherContainer: {
    marginLeft: 310,
  },
  AccTitleBody: {
    width: 50,
  },
  CodeBody: {
    width: 50,
    marginLeft: 8,
  },
  NarrationBody: {
    width: 225,
    marginLeft: 10,
    fontSize: 8,
  },
  NarrationHead: {
    width: 225,
    marginLeft: 8,
    // paddingLeft: 0,
    // paddingRight: 5,
  },
  DebitBody: {
    width: 50,
    marginLeft: 20,
    position: 'absolute',
    textAlign: 'right',
    // marginRight: 0,
  },
  CreditBody: {
    width: 60,
    position: 'absolute',
    marginLeft: 60,
    // paddingLeft: 10,
    // paddingRight: 10,
    textAlign: 'right',
    // marginRight: 0,
  },
  BalanceBody: {
    width: 60,
    marginLeft: 170,
    position: 'absolute',
    // marginLeft:40,
    // marginRight: 0,
    // textAlign: 'right',
    // marginRight: 0,
  },
  DebitHead: {
    width: 70,
    textAlign: 'right',
    marginRight: 0,
    // marginLeft: 8,
  },
  BalanceHead: {
    width: 60,
    textAlign: 'right',
    marginRight: 0,
    // marginLeft: 8,
  },
  CreditHead: {
    width: 60,
    textAlign: 'right',
    marginRight: 0,
    // marginLeft:15 ,
  },
  debitTotal: {
    width: 50,
    borderTop: '1px solid black',
    paddingTop: 5,
    paddingLeft: 20,
    // fontWeight:20,
    // marginLeft: 2,
  },
  CreditTotal: {
    width: 40,
    borderTop: '1px solid black',
    // marginLeft:  2,
    paddingTop: 5,
    paddingLeft: 28,
    paddingRight: 38,
  },
  status: {
    fontSize: 10,
    marginLeft: 78,
    marginTop: 30,
  },
  AccCode: {
    fontSize: 10,
    float: 'left',
  },
  AccName: {
    fontSize: 10,
    textOverflow: 'ellipsis',
    width: 120,
    marginLeft: 350,
  },
})
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          paddingBottom: '10',
          paddingTop: '10',
          fontSize: '25',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Text>id</Text>

        <Text>Title</Text>
        <Text>body</Text>
      </View>
    </Page>
  </Document>
)
export default MyDocument
