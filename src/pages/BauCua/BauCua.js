import React from "react";
import DiemCuoc from "../../components/DiemCuoc/DiemCuoc";
import DanhSachCuoc from "../../components/DanhSachCuoc/DanhSachCuoc";
import DanhSachXucXac from "../../components/DanhSachXucXac/DanhSachXucXac";
import "../../assets/BauCua.css";
export default function BauCua() {
    const backgroundColor = "rgb(255, 155, 2)";
  return (
    <div id="BaiTapGameBauCua" className="container-fluid">
      <DiemCuoc />
      <div className="row">
        <div className="col-8">
          <DanhSachCuoc />
        </div>
        <div className="col-4">
          <DanhSachXucXac backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
}
