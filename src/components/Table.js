import React from "react";
import axios from "axios";
import "./Table.css";
import { CircularProgress, TableCell, TableRow } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

function Table() {
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  const fetchData = () => {
    axios
      .get(
        `http://localhost:8080/1805614/DataFetch`
      )
      .then((response) => {
        setResponseData([...responseData, ...response.data]);
        isNextFunc(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function fetchMoreData() {
    setCount(pageCount + 1);
    fetchData();
  }



  React.useEffect(() => {
    {
      fetchData()

    };
  }, []);
  return (
    <div >

     
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
        <div
            style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}>
        <CircularProgress />
        </div>
        }>
        <div>
          {responseData.map((data, index) => (
            <TableRow>
            <TableCell>{index}</TableCell>
           <TableCell>{data.cust_number}</TableCell>
           <TableCell>{data.name_customer}</TableCell>
           <TableCell>{data.due_in_date}</TableCell>
           <TableCell>{data.total_open_amount}</TableCell>
           <TableCell>{data.invoice_id}</TableCell>
           <TableCell>{data.notes}</TableCell>
           </TableRow>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
export default Table;
