function Form(props) {
  return (
    <div>
      <input name="name" onChange={(e) => props.handleChage(e)} />
      <br />
      {/* <input name="phone" onChange={(e) => props.handleChage(e)} />
          <br />
          <input name="email" onChange={(e) => props.handleChage(e)} />
          <br /> */}
      <button onClick={() => props.handleClick()}>Add</button>
    </div>
  );
}

export default Form;
