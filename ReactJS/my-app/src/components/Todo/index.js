import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, complete }) {
  const dispatch = useDispatch();
  // console.log("complete: ", complete);
  const [checked, setChecked] = useState(complete);
  // console.log(checked);

  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch({type: '' , payload: })
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
