import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salaryOfYear = parseInt(formData.salary)*12;
  let bonus = parseInt(formData.bonus);
  let totalIncome = salaryOfYear + bonus;
  let expenses = 0.5 * totalIncome <= 100000 ? 0.5 * totalIncome : 100000  ;
  let myself = 60000 ;
  let socialOfyear = parseInt(formData.social)*12 <= 30000 ? parseInt(formData.social)*12 : 30000;
  let baby = parseInt(formData.baby)*30000 <= 60000 ? parseInt(formData.baby)*30000 : 60000;
  let life = parseInt(formData.life) <= 100000 ? parseInt(formData.life) : 100000;

  let deductions = myself+socialOfyear+baby+life
  let netTotal = totalIncome - expenses - deductions;
  
  let tax = 0;
  if (netTotal <= 100000) {
    tax = 0;
  } else if (netTotal <= 300000) {
    tax = 0.05;
  } else if (netTotal <= 1000000) {
    tax = 0.1;
  } else {
    tax = 0.15;
  }

  return (
    <div class= "main flex justify-center items-center h-screen bg-color">
      <div className= "max-w-xl bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">ผลการคำนวณ</h1>
      <div className="mb-8 ">
        <strong >เงินได้ทั้งปี: {salaryOfYear.toLocaleString()} บาท</strong>
      </div>
      <div className="mb-8 ">
        <strong className="mb-4">ค่าใช้จ่าย: {expenses.toLocaleString()} บาท</strong>
      </div>
      <div className="mb-8 ">
        <strong>ค่าลดหย่อน: {deductions.toLocaleString()} บาท</strong>
      </div>
      <div className="mb-8">
        <strong>เงินได้พึงประเมินสุทธิ: {netTotal.toLocaleString()} บาท</strong>
      </div>
      <div className="mb-8 ">
        <strong>อัตราภาษี: {tax*100} %</strong>
      </div>
      <div className="mb-4 ">
        <strong>ภาษีที่ต้องชำระ: {(netTotal*tax).toLocaleString()} บาท</strong>
      </div>
      </div>
    </div>
  );
};

export default Results;
