import axios from "axios";
import { useEffect, useState } from "react";
import { alphaNumeric } from "../../helper/validation";
import "./Dashboard.css";
import Modal from "./Modal";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const [expenseList, setExpenseList] = useState([]);

  const [index, setIndex] = useState(-1);

  const [behaviour, setBehaviour] = useState("Submit");

  const [expense, setExpense] = useState({
    expenseName: "",
    amount: "",
    paidBy: "",
    date: "",
  });

  const showModalHander = () => {
    setShowModal(!showModal);
  };

  const onChangeHandler = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const [validationData, setValidationData] = useState({
    expenseName: "",
    amount: "",
    paidBy: "",
    date: "",
  });

  const clearHandler = () => {
    setExpense({
      expenseName: "",
      amount: "",
      paidBy: "",
      date: "",
    });
    setValidationData({
      expenseName: "",
      amount: "",
      paidBy: "",
      date: "",
    });
  };

  const validateDataAndSubmit = (event) => {
    console.log("expense list before edit 1-", expenseList);
    event.preventDefault();
    if (alphaNumeric(expense.expenseName) == true) {
      let objFormatted = {
        ...expense,
        title: expense.expenseName,
      };
      if (behaviour == "Edit") {
        console.log("expense list before edit-", expenseList);
        let id = expense.id;
        axios
          .patch("http://localhost:3000/expense/" + id, objFormatted)
          .then(() => {
            const finalList = expenseList;
            finalList[index].expenseName = expense.expenseName;
            finalList[index].paidBy = expense.paidBy;
            finalList[index].date = expense.date;
            finalList[index].paidBy = expense.paidBy;
            setExpenseList([...finalList]);
          })
          .catch((error) => {
            console.error(error);
          });
        setBehaviour("submit");
        setIndex(-1);
      } else {
        axios
          .post("http://localhost:3000/expense", objFormatted)
          .then((response) => {
            setExpenseList([...expenseList, expense]);
          })
          .catch((error) => {
            console.error("error while post exponse -", error);
          });
        console.log("expense list -", expenseList);
      }
      showModalHander();
      clearHandler();
    } else {
      setValidationData({
        ...validationData,
        expenseName: alphaNumeric(expense.expenseName),
        amount: "",
        paidBy: "",
        date: "",
      });
    }
  };

  const editModalHander = (data, index) => {
    console.log("data -", data);
    setIndex(index);
    setExpense({ ...data });
    setBehaviour("Edit");
    setShowModal(!showModal);
  };

  const onDeleteHanldler = (id, index) => {
    axios
      .delete("http://localhost:3000/expense/" + id)
      .then((response) => {
        const finalList = expenseList;
        expenseList.splice(index, 1);
        setExpenseList([...finalList]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getExpenseListAxios = () => {
    axios
      .get("http://localhost:3000/expense")
      .then((response) => {
        if (response && response.data) {
          setExpenseList([...response.data]);
        }
      })
      .catch((error) => {
        console.log("axios err - " + error);
      });
  };

  useEffect(getExpenseListAxios, []);

  return (
    <div>
      {showModal && (
        <Modal
          behaviour={behaviour}
          text={behaviour + " Expense"}
          data={expense}
          validation={validationData}
          onUpdate={onChangeHandler}
          onSubmit={validateDataAndSubmit}
          onClose={() => showModalHander()}
        />
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <form>
              <div className="form-group">
                <label>Expense name</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </form>
          </div>
          <div className="col-9">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn btn-success"
              style={{ float: "right", marginTop: "80px" }}
            >
              Add
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Expense Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Paid by</th>
                  <th scope="col">Date</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {expenseList.map((input, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{input.expenseName}</td>
                      <td>{input.amount}</td>
                      <td>{input.paidBy}</td>
                      <td>{input.date}</td>
                      <td>
                        <i
                          className="fa fa-pencil-square-o"
                          onClick={() => editModalHander(input, index)}
                          aria-hidden="true"
                        ></i>
                      </td>
                      <td>
                        <i
                          onClick={() => onDeleteHanldler(input.id, index)}
                          className="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
