import React from "react";

function Form(props) {
  return (
    <form className="form">
      {console.log(props.state)}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.state && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.value}</button>
    </form>
  );
}

export default Form;
