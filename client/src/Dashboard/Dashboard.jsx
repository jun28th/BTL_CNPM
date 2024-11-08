import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [report, setReport] = useState([
    {
      printerId: "1",
      campus: "HCMUT",
      time: "8/11/2024",
    },
    {
      printerId: "1",
      campus: "HCMUT",
      time: "8/11/2024",
    },
  ]);

  const [problem, setProblem] = useState([
    {
      printerId: "1",
      problem: "out of date",
    },
  ]);

  const [officer, setOfficer] = useState([
    { id: "2252345", name: "Đỗ Trường Khoa" },
  ]);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center px-4 mt-5">
        <div
          className="w-75 rounded bg-white border shadow"
          style={{ minHeight: "200px" }}
        >
          <div className="container m-4">
            <div className="row">
              <h5>Officer Information</h5>
            </div>
            <div className="row mt-3">
              <div className="col-12 mb-3">
                <label className="form-label">ID:</label>
                <input
                  type="text"
                  className="form-control p-3 w-75"
                  value={officer[0].id}
                  readOnly
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control p-3 w-75"
                  value={officer[0].name}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center px-4 mt-5"
        // style={{ width: "1200px" }}
      >
        <div
          className="w-75 rounded bg-white border shadow"
          style={{ minHeight: "300px" }}
        >
          <div className="d-flex justify-content-end align-items-center border-bottom">
            <div className="flex-grow-1 text-center my-2">
              <h5>MARCH REPORT</h5>
            </div>
            {/* <div className="mb-2 me-3">
              <i className="bi bi-people" style={{ fontSize: "1.9rem" }}></i>
            </div> */}
          </div>

          <div className="m-3">
            <table
              className="table table-hover table-striped text-center table-bordered mt-3 w-100"
              // style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Printer ID</th>
                  <th>Campus</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {report.map((d, i) => (
                  <tr key={i}>
                    <td style={{ width: 170 }}>{d.printerId}</td>
                    <td style={{ width: 170 }}>{d.campus}</td>
                    <td style={{ width: 170 }}>{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center px-4 my-5"
        // style={{ width: "1200px" }}
      >
        <div
          className="w-75 rounded bg-white border shadow"
          style={{ minHeight: "300px" }}
        >
          <div className="d-flex justify-content-end align-items-center border-bottom">
            <div className="flex-grow-1 text-center my-2">
              <h5>MARCH REPORT</h5>
            </div>
            {/* <div className="mb-2 me-3">
              <i className="bi bi-people" style={{ fontSize: "1.9rem" }}></i>
            </div> */}
          </div>

          <div className="m-3">
            <table
              className="table table-hover table-striped text-center table-bordered mt-3 w-100"
              // style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Printer ID</th>
                  <th>Problem</th>
                </tr>
              </thead>
              <tbody>
                {problem.map((d, i) => (
                  <tr key={i}>
                    <td style={{ width: 100 }}>{d.printerId}</td>
                    <td style={{ width: 240 }}>{d.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
