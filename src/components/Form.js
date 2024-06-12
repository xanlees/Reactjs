import "./Form.css";
import { useState , useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false)

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveIteem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: String(title),
      amount: Number(amount),
    };
    props.onAdditem(itemData);
    setTitle("");
    setAmount(0);
  };

  useEffect(()=>{
    const checkData = title.trim().length>0 && amount!==0
       setFormValid(checkData) 
  },[title,amount])


  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [posts, setPosts] = useState([]);

  // // ...
  // const addPosts = async (title, amount) => {
  //   await fetch("http://localhost:8000/api/v1/deposit", {
  //     method: "POST",
  //     amount: JSON.stringify({
  //       title: title,
  //       amount: amount,
  //     }),

  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts((posts) => [data, ...posts]);
  //       setTitle("");
  //       setAmount("");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addPosts(title, amount);
  // };

  return (
    <div>
      <form onSubmit={saveIteem}>
        <div className="font-control">
          <label>ຊື່ລາຍການ</label>
          <input
            type="text"
            placeholder="ລະບຸຊື້ລາຍການ"
            onChange={inputTitle}
            // onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="font-control">
          <label>ຈຳນວນເງີນ</label>
          <input
            type="number"
            placeholder="(+ ລາຍຣັບ , - ລ່າຍຈ່າຍ)"
            // onChange={(e) => setAmount(e.target.value)}
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            ເພີ່ມຂໍ້ມູນ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
