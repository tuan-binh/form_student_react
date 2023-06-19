import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Tablestudents from "./components/Tablestudents/Tablestudents";

function App() {
  let indexEdit = useRef();

  // handle change and add new student
  const [listStudent, setListStudent] = useState([]);
  // handle change and save state gender
  const [gender, setGender] = useState("Nam");
  // handle edit
  const [edit, setEdit] = useState(false);
  //handle old info
  const [oldInfo, setOldInfo] = useState();
  const [toggle, setToggle] = useState(false);

  // handle change Info
  function changeInfo(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    setOldInfo({ ...oldInfo, [name]: value });
    // console.log(oldInfo);
  }

  function handleEdit(index) {
    setEdit(true);
    setToggle(true);
    setOldInfo({
      MSV: listStudent[index].MSV,
      name: listStudent[index].name,
      age: listStudent[index].age,
      gender: listStudent[index].gender,
    });
    indexEdit.current = index;
    console.log(listStudent[index]);
  }
  // handle finsh edit
  function handleFinishEdit(e) {
    e.preventDefault();
    const newList = [...listStudent];
    newList[indexEdit.current] = { ...oldInfo, gender: gender };
    e.target.msv.value = "";
    e.target.name.value = "";
    e.target.age.value = "";
    setGender("Nam");
    setListStudent(newList);
    setEdit(false);
    setToggle(false);
  }

  // handle change and add new student and submit form
  function handleAddStudent(e) {
    e.preventDefault();
    if (
      e.target.msv.value !== "" &&
      e.target.name.value !== "" &&
      e.target.age.value !== "" &&
      gender !== ""
    )
      setListStudent([
        ...listStudent,
        {
          MSV: e.target.msv.value,
          name: e.target.name.value,
          age: +e.target.age.value,
          gender: gender,
        },
      ]);
    e.target.msv.value = "";
    e.target.name.value = "";
    e.target.age.value = "";
    setGender("Nam");
    e.target.msv.focus();
  }

  // handle choose your gender
  function handleChooseGender(e) {
    setGender(e.target.id === "male" ? "Nam" : "Nữ");
  }

  function handleDelete(index) {
    const newList = [...listStudent];
    newList.splice(index, 1);
    setListStudent(newList);
  }

  function handleSortList(e) {
    let value = +e.target.value;
    const newList = [...listStudent];
    if (value === 1) {
      newList.sort((a, b) => a.name.length - b.name.length);
      setListStudent(newList);
    } else if (value === 2) {
      newList.sort((a, b) => +a.age - +b.age);
      setListStudent(newList);
    } else if (isNaN(value)) {
      newList.sort((a, b) => a.MSV - b.MSV);
      setListStudent(newList);
    }
  }
  // state search and filter
  const [filter, setFilter] = useState("");
  const [newList, setNewList] = useState([]);

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  useEffect(() => {
    let newL = listStudent.filter(
      (e) => filter.toLowerCase().indexOf(e.name.toLowerCase()) !== -1
    );
    setNewList(newL);
  }, [filter]);

  function handleS() {
    let newL = listStudent.filter(
      (e) => filter.toLowerCase().indexOf(e.name.toLowerCase()) !== -1
    );
    setNewList(newL);
  }

  function handleToggle() {
    setToggle(!toggle);
    if (toggle === false) {
      setEdit(false);
    }
  }

  return (
    <div className="App">
      <div className="table-student">
        {/* Truyền dữ liệu xuống bảng sinh viên */}
        <Tablestudents
          handleEdit={handleEdit}
          list={!newList.length ? listStudent : newList}
          deleteStudent={handleDelete}
          handleSort={handleSortList}
          handleSearch={handleFilter}
          handleBtnSearch={handleS}
          handleTog={handleToggle}
        />
      </div>
      <div className="form-student">
        {/* Form nhập thông tin sinh viên */}
        <Form
          isEdit={edit}
          handleSub={handleAddStudent}
          handleChooseGender={handleChooseGender}
          handleFinish={handleFinishEdit}
          oldInfo={oldInfo}
          handleChangeInfo={changeInfo}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default App;
