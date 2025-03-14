import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="/img/icon.png"
              style={{ width: "60px", height: "60px" }}
            />
            {/* S-Trip */}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Tính Năng
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Về Chúng tôi
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Dịch Vụ
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Thư viện
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Ý kiến
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Công ty
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
