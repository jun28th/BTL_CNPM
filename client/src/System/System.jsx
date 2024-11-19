import React, { useEffect, useState } from "react";
import Search from "../Component/Search";

export default function System() {
  const [printer, setPrinter] = useState([
    {
      id: "1",
      campus: "1",
      building: "A4",
      room: "202",
      status: null,
    },
    {
      id: "2",
      campus: "2",
      building: "C6",
      room: "309",
      status: null,
    },
  ]);
  const [values, setValues] = useState({
    // id: "2",
    campus: "",
    building: "",
    room: "",
    status: "",
  });
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const res = await AxiosInstance.post(`patients/`, values);
      console.log(res);
      if (res.status === 201) {
        toast.success("Added Success");
        setValues({
          campus: "",
          building: "",
          room: "",
          status: "",
        });
      } else if (res.status === 400) {
        toast.error("Please fill full");
      } else {
        toast.error("An error occurred");
      }
    } catch (res) {
      console.log(res);
      toast.error(`${res.error}, Please try again!`);
    }
  };
  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue.trim());
    if (!searchValue.trim()) {
      setFilteredData([]);
    } else {
      const filtered = printer.filter((item) =>
        item.id.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center px-4 my-5"
        // style={{ width: "1200px" }}
      >
        <div
          className="w-100 rounded-4 bg-white border shadow"
          style={{ minHeight: "550px" }}
        >
          <div className="d-flex justify-content-end align-items-center border-bottom">
            <div className="flex-grow-1 text-center my-3">
              <h5>DANH SÁCH MÁY IN</h5>
            </div>
            {/* <div className="mb-2 me-3">
              <i className="bi bi-people" style={{ fontSize: "1.9rem" }}></i>
            </div> */}
            <div className="d-flex flex-grow-1 align-items-center mx-3">
              <Search
                onSearchChange={handleSearchChange}
                searchData={printer}
              />
            </div>
            <button
              className="btn btn-success me-5 "
              data-bs-toggle="modal"
              data-bs-target="#AddNewPrinter"
            >
              {" "}
              + New Printer{" "}
            </button>
          </div>

          <div className="m-3">
            <table
              className="table table-hover table-striped text-center table-bordered mt-3 w-100"
              // style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Mã máy in</th>
                  <th>Cơ sở</th>
                  <th>Tòa</th>
                  <th>Tầng-Phòng</th>
                  <th>Trạng thái</th>
                  <th>Cài đặt</th>
                </tr>
              </thead>
              <tbody>
                {printer.map((d, i) => (
                  <tr key={i}>
                    <td style={{ width: 170 }}>{d.id}</td>
                    <td style={{ width: 170 }}>{d.campus}</td>
                    <td style={{ width: 170 }}>{d.building}</td>
                    <td style={{ width: 170 }}>{d.room}</td>
                    <td style={{ width: 170 }}>{d.status}</td>
                    <td style={{ width: 170 }}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* MODAL CreateTorrent */}
      <div
        className="modal fade"
        id="AddNewPrinter"
        tabIndex="-1"
        aria-labelledby="createTorrentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createTorrentModalLabel">
                Create Torrent
              </h5>
            </div>
            <div className="modal-body">
              <label style={{ fontWeight: "bold" }} htmlFor="nameid">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="nameid"
                placeholder="Enter name of patient"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <div className="row mt-3">
                <div className="col-6">
                  <label style={{ fontWeight: "bold" }} htmlFor="dobid">
                    Date of birth:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dobid"
                    placeholder="Enter Date of birth"
                    value={values.dayofbirth}
                    onChange={(e) =>
                      setValues({ ...values, dayofbirth: e.target.value })
                    }
                  />
                </div>
                <div className="col-6">
                  <label style={{ fontWeight: "bold" }} htmlFor="genderid">
                    Gender:
                  </label>
                  <select
                    className="form-control"
                    value={values.gender}
                    id="genderid"
                    onChange={(event) =>
                      setValues({ ...values, gender: event.target.value })
                    }
                  >
                    <option value="" disabled>
                      Choose gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  // onClick={handleCreateTorrent}
                >
                  Add Printer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
