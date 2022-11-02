import { useNavigate } from "react-router-dom";
const Category = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log([e, e.target.value, e.target.type]);
    navigate("../product", {
      state: { id: "1", name: "cuong" },
    });
  };
  const brand = [
    { id: 1, name: "honda" },
    { id: 2, name: "yamaha" },
    { id: 3, name: "suzuki" },
    { id: 4, name: "chongqing" },
  ];
  return (
    <div>
      <h1>Select a Category</h1>
      <select defaultValue="default" onChange={handleChange}>
        <option value="default" disabled hidden>
          {" "}
        </option>
        {brand.map((each, key) => (
          <option key={key} value={each.id}>
            {each.name}
          </option>
        ))}
        {/* <option value="">Honda</option>
        <option value="suzuki">Suzuki</option>
        <option value="yamaha">Yamaha</option> */}
      </select>
    </div>
  );
};

export default Category;
