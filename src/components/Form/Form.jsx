import React from "react";
import "./Form.css";

function Form({
  isEdit,
  handleSub,
  handleChooseGender,
  handleFinish,
  oldInfo,
  handleChangeInfo,
  toggle,
}) {
  // nhận được những giữ liệu từ thằng cha và thằng cha sẽ nhận được những liệu thằng con làm
  return (
    <div className="flex-form">
      <h2>Thông tin sinh viên</h2>
      {toggle ? (
        !isEdit ? (
          <form action="" onSubmit={handleSub}>
            <div className="row">
              <label htmlFor="">Mã sinh viên: </label>
              <input type="text" name="msv" />
            </div>
            <div className="row">
              <label htmlFor="">Tên sinh viên: </label>
              <input type="text" name="name" />
            </div>
            <div className="row">
              <label htmlFor="">Tuổi: </label>
              <input type="number" name="age" />
            </div>
            <div className="row">
              <p>Giới tính: </p>
              <div className="action-gender">
                <input
                  checked
                  onChange={handleChooseGender}
                  type="radio"
                  name="gender"
                  id="male"
                />{" "}
                <label htmlFor="male">Nam</label>
                <input
                  onChange={handleChooseGender}
                  type="radio"
                  name="gender"
                  id="female"
                />{" "}
                <label htmlFor="female">Nữ</label>
              </div>
            </div>
            <button>Add</button>
          </form>
        ) : (
          <form action="" onSubmit={handleFinish}>
            <div className="row">
              <label htmlFor="">Mã sinh viên: </label>
              <input
                type="text"
                name="msv"
                value={oldInfo.MSV}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="row">
              <label htmlFor="">Tên sinh viên: </label>
              <input
                type="text"
                name="name"
                value={oldInfo.name}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="row">
              <label htmlFor="">Tuổi: </label>
              <input
                type="number"
                name="age"
                value={oldInfo.age}
                onChange={handleChangeInfo}
              />
            </div>
            <div className="row">
              <p>Giới tính: </p>
              <div className="action-gender">
                {oldInfo.gender === "Nam" ? (
                  <>
                    <input
                      checked
                      onChange={handleChooseGender}
                      type="radio"
                      name="gender"
                      id="male"
                    />{" "}
                    <label htmlFor="male">Nam</label>
                    <input
                      onChange={handleChooseGender}
                      type="radio"
                      name="gender"
                      id="female"
                    />{" "}
                    <label htmlFor="female">Nữ</label>
                  </>
                ) : (
                  <>
                    <input
                      onChange={handleChooseGender}
                      type="radio"
                      name="gender"
                      id="male"
                    />
                    <label htmlFor="male">Nam</label>
                    <input
                      checked
                      onChange={handleChooseGender}
                      type="radio"
                      name="gender"
                      id="female"
                    />{" "}
                    <label htmlFor="female">Nữ</label>
                  </>
                )}
              </div>
            </div>
            <button>Update</button>
          </form>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default Form;
