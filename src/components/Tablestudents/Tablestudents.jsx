import React from "react";
import "./Tablestudents.css";

function Tablestudents({
  handleEdit,
  list,
  deleteStudent,
  handleSort,
  handleSearch,
  handleBtnSearch,
  handleTog,
}) {
  // nhưng liệu này là props được truyền xuống thằng cha
  return (
    <div>
      <nav>
        <button onClick={handleTog}>Thêm sinh viên</button>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <button onClick={handleBtnSearch}>Tìm kiếm</button>
        <select name="" id="" onChange={handleSort}>
          <option selected>Sắp Xếp</option>
          <option value="1">Theo tên</option>
          <option value="2">Theo tuổi</option>
        </select>
      </nav>
      <div className="list-student">
        <h2>Danh Sách Sinh Viên</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <thead>
            {list.map((e, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{e.MSV}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>
                  <div className="action">
                    <button>Xem</button>
                    <button onClick={() => handleEdit(i)}>Sửa</button>
                    <button onClick={() => deleteStudent(i)}>Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Tablestudents;
