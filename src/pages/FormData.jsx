import React ,{ useState }from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <div class= "main flex justify-center items-center h-screen bg-color">
      <form className= "max-w-xl bg-white shadow-md rounded-xl p-6 " onSubmit={submitForm}>
      <h1 className="text-2xl font-bold mb-6 text-center">แบบฟอร์มจ่ายภาษีเงินได้</h1>
        <div className="mb-4 ">
          <label class="block text-gray-700 mb-2">เงินเดือน:</label>
          <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="salary" id="salary" onChange={handleChange} />
        </div>
        <div className="mb-4 ">
          <label class="block text-gray-700 mb-2">โบนัส:</label>
          <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="bonus" id="bonus" onChange={handleChange} />
        </div>
        <div className="mb-4 ">
          <label class="block text-gray-700 mb-2">หักประกันสังคม:</label>
          <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="social" id="social" onChange={handleChange} />
        </div>
        <div className="mb-4 ">
          <label class="block text-gray-700 mb-2">จำนวนบุตร:</label>
          <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="baby" id="baby" onChange={handleChange} />
        </div>
        <div className="mb-4 ">
          <label class="block text-gray-700 mb-2">ค่าเบี้ยประกันชีวิต:</label>
          <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="life" id="life" onChange={handleChange} />
        </div>
        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" type="submit">คำนวณ</button>
      </form>
      </div>
  );
};

export default FormData;
