import React from "react";
import { useTable } from "react-table";
import "./App.css";
import makeData from "./makeData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/incentiveterms">Incentive Terms</Link>
          </li>
          <li>
            <Link to="/ibnp">IBNP</Link>
          </li>
          <li>
            <Link to="/manualAdjustments">Manual Adjustments</Link>
          </li>
          <li>
            <Link to="/quarterProcessing">Quarter Processing</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <EIncentivesHome />
          </Route>
          <Route exact path="/incentiveterms">
            <IncentiveTerms/>
          </Route>
          <Route exact path="/ibnp">
            <IBNP/>
          </Route>
          <Route exact path="/manualAdjustments">
            <ManualAdjusments />
          </Route>
          <Route exact path="/quarterProcessing">
          <QuarterProcessing />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

function EIncentivesHome() {
  return(
    <div>
      <h1>EIncentives</h1>
    </div>
  );
}

function IncentiveTerms() {
  return(
    <div>
      <h1>Incentive Terms</h1>
        <button>Add Record</button>
      <React.Fragment>
        <ITTable />
      </React.Fragment>
    </div>
  );
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


 
  
  function ITTable() {
    const columns = React.useMemo(() => [
    
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          },
        {
          Header: "Age",
          accessor: "age"
        },
        {
          Header: "Visits",
          accessor: "visits"
        },
        {
          Header: "Status",
          accessor: "status"
        },
        {
          Header: "Profile Progress",
         accessor: "progress"
      }
        ]);
  
    const data = React.useMemo(() => makeData(20), []);
  
    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    );
  }



function IBNP() {
  return(
    <div>
      <h1>IBNP</h1>
    </div>
  );
}

function ManualAdjusments() {
  return(
    <div>
      <h1>Manual Adjusments</h1>
    </div>
  );
}

function QuarterProcessing() {
  return(
    <div>
      <h1>Quarter Processing</h1>
    </div>
  );
}

export default App;
