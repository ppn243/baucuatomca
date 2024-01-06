import React from "react";

export default function DiemCuoc() {
  return (
    <div>
      <h3 className="text-center display-4 text-danger">
        Gourd-Crab-Fish-Prawn
      </h3>
      <div className="text-center mt-5">
        <span
          className="p-3 text-white bg-dark"
          style={{ fontSize: "20px", borderRadius: "5%" }}
        >
          Bonus: <span className="text-warning">100$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <span
          className="p-2 text-white bg-success"
          style={{ fontSize: "15px", borderRadius: "5%", border: "none" }}
        >
          Play again
        </span>
      </div>
    </div>
  );
}
