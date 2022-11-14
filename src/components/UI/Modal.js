import React from "react";
import "./Modal.scss";

const ModalComp = (props) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-700 fs-24" id="exampleModalLabel">
              {props.headerTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;
