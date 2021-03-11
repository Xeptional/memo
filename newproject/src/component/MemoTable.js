import React, { Component } from "react";
import "../css/table.css";

class MemoTable extends Component {
  render() {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Country</th>
              <th>Country</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
              <td>Canada</td>
              <td>Canada</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td>Italy</td>
              <td>Italy</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default MemoTable;

// import React, { PureComponent } from "react";
// import axios from "axios";
// // import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
// import ReactPaginate from "react-paginate";
// import { connect } from "react-redux";
// import { withStyles } from "@material-ui/core/styles";
// import moment from "moment";

// const styles = (theme) => ({
//   root: {
//     width: "100%",
//   },
//   title: {
//     margin: "auto",
//     height: 80,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: theme.palette.text.secondary,
//   },
// });

// export class TranxReport extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       offset: 0,
//       tableData: [],
//       orgtableData: [],
//       perPage: 5,
//       currentPage: 0,
//     };
//     this.handlePageClick = this.handlePageClick.bind(this);
//   }

//   handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState(
//       {
//         currentPage: selectedPage,
//         offset: offset,
//       },
//       () => {
//         this.loadMoreData();
//       }
//     );
//   };

//   loadMoreData() {
//     const data = this.state.orgtableData;

//     const slice = data.slice(
//       this.state.offset,
//       this.state.offset + this.state.perPage
//     );
//     this.setState({
//       pageCount: Math.ceil(data.length / this.state.perPage),
//       tableData: slice,
//     });
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     console.log(this.props.memo);
//     setTimeout(() => {
//       return this.props.memo === null
//         ? ""
//         : this.setState({
//             pageCount: Math.ceil(this.props.memo.length / this.state.perPage),
//             orgtableData: this.props.memo,
//             tableData: this.props.memo.slice(
//               this.state.offset,
//               this.state.offset + this.state.perPage
//             ),
//           });
//     }, 2000);
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <div className="responsive-container">
//           <h2 className={classes.title}>Transactions</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>id</th>
//                 <th>Memo from</th>
//                 <th>Memo To</th>
//                 <th>Memo Title</th>
//                 {/* <th>Payment type name</th> */}
//                 <th>date</th>
//                 {/* <th>title</th>
//                 <th>Amount</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.tableData.map((tdata, index) => (
//                 // console.log(tdata)
//                 <tr key={index}>
//                   <td data-title="id">{index + 1}</td>
//                   <td data-title="Memo from">{tdata.memoFrom}</td>
//                   <td data-title="Memo To">{tdata.memoTo}</td>
//                   <td data-title="Memo Title">{tdata.memoTitle}</td>
//                   <td data-title="date">{moment(tdata.createdAt).format('DD MMM, YYYY')}</td>
//                   {/* <td data-title="Phone number">
//                     {
//                       tdata.response.paymentRequestid.serviceproviderId.manager
//                         .phone
//                     }
//                   </td>
//                   <td data-title="title">
//                     {tdata.response.paymentRequestid.productCode.title}
//                   </td>
//                   <td data-title="Amount">
//                     {tdata.response.paymentRequestid.amount}
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <ReactPaginate
//             previousLabel={"prev"}
//             nextLabel={"next"}
//             breakLabel={"..."}
//             breakClassName={"break-me"}
//             pageCount={this.state.pageCount}
//             marginPagesDisplayed={2}
//             pageRangeDisplayed={5}
//             onPageChange={this.handlePageClick}
//             containerClassName={"pagination"}
//             subContainerClassName={"pages pagination"}
//             activeClassName={"active"}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   memo: state.memo.memo,
//   auth: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps)(withStyles(styles)(TranxReport));
