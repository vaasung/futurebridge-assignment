import React from "react";
const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        left: '45%',
        right: '0',
        top: '45%',
        bottom: '0',
      }}
      className="spinner-border text-warning"
      role="status"
    ></div>
  );
};

export default Loader;
