import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(navigate);
    navigate(`../product/${e.target.value}`);
  };
  return (
    <div>
      <h1>Select a Category</h1>
      <select defaultValue="default" onChange={handleChange}>
        <option value="default" disabled hidden>
          {" "}
        </option>
        <option value="honda">Honda</option>
        <option value="suzuki">Suzuki</option>
        <option value="yamaha">Yamaha</option>
      </select>
    </div>
  );
};

export default Category;
