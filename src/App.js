import "./App.css";
import Form from "./components/Form";
import Transaction from "./components/Transaction";
import { useEffect, useState } from "react";
import DataContext from "./data/Datacontext";
import Reportcomponent from "./components/Reportcomponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  const design = { color: "red", textAlign: "center", fontsize: "1rem" };

  const iniState = [
    { id: 1, title: "salaly", amount: 400000 },
    { id: 2, title: "house rent", amount: -150000 },
    { id: 3, title: "self", amount: 40000 },
  ];
  const [items, setItem] = useState(iniState);
  const [reportIcome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddnewitem = (newItem) => {
    setItem((preveItem) => {
      return [newItem, ...preveItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter(e => e > 0)
      .reduce((total, e) => total += e, 0);
    const expense =
      amounts.filter((e) => e < 0).reduce((total, e) => (total += e), 0) * -1;

    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIcome, reportExpense]);

  // const [show, setShow] = useState(false);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShow(true);

  //     case "HIDE":
  //       return setShow(false);
  //   }
  // };

  // const [result, dispatch] = useReducer(reducer, show);
  return (
    <DataContext.Provider
      value={{
        income: reportIcome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>ໂປຣແກຣມລາຍຮັບ-ລາຍຈ່າຍ</h1>
        <Router>
          <div>
            <ul className="horizontzl-menu">
              <li>
                <Link to="/">ຂໍ້ມູນບັນຊີ</Link>
              </li>
              <li>
                <Link to="/insert">ບັນທືກຂໍ້ມູນ</Link>
              </li>
            </ul>
            <Fragment>
              <Routes>
                <Route exact path="/" element={<Reportcomponent />} />

                <Route
                  path="/insert"
                  element={
                    <>
                      <Form onAdditem={onAddnewitem} />
                      <Transaction item={items} />
                    </>
                  }
                />
              </Routes>
            </Fragment>
          </div>
        </Router>
        {/* <Reportcomponent />
        <Form onAdditem={onAddnewitem} />
        <Transaction item={items} /> */}
        {/* {show && <Report/>} */}
        {/* <div>
          <h1>{result}</h1>
          <button onClick={() => dispatch({ type: "SHOW"})}>
            ສະແດງ
          </button>
          <button onClick={() => dispatch({ type: "HIDE"})}>
            ຊ່ອນ
          </button>
        </div> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
