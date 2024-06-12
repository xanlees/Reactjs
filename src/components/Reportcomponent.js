import { useContext } from "react";
import DataContext from "../data/Datacontext";
import "./Reportcomponent.css";

const Reportcomponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div>
      <h4>ຍອດຄົງເຫລືອ (₭)</h4>
      <h1 className="still">₭{formatNumber((income-expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>ລາຍຣັບທັງຫມົດ</h4>
          <p className="report plus">₭{formatNumber(income)}</p>
        </div>
        <div>
          <h4>ລາຍຈ່າຍທັງຫມົດ</h4>
          <p className="report minute">₭{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};
export default Reportcomponent;
