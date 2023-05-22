import React from "react";

const Alert = () => {
  return (
    <div className="alert alert-error mt-3">
      <div className="flex-1">
        <label className="label text-x">
          <label className="label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-alert-triangle"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#dc2626"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 9v2m0 4v.01" />
              <path d="M12 3L12 3a9 9 0 0 1 9 9l0 0a9 9 0 0 1 -9 9l0 0a9 9 0 0 1 -9 -9l0 0a9 9 0 0 1 9 -9" />
            </svg>
          </label>
          Please enter something!
        </label>
      </div>
    </div>
  );
};

export default Alert;
