export default function Navbar() {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: "#9FCDE8" }}
      >
        <div className="container-fluid">
          <div className="container">
            <a className="navbar-brand" href="#">
              Smart Printing Service
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="container ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Report
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn text-white"
                    style={{ backgroundColor: "#3A4163" }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
