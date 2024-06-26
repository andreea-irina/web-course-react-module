import React, { useState } from "react";

function LoginForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <h4>Login</h4>

      <form
        autoComplete="off"
        onSubmit={() =>
          alert(
            `You have submitted the following values: username (${formValues.username}) & password (${formValues.password})`
          )
        }
      >
        <input
          name="username"
          type="text"
          placeholder="Input your username..."
          value={formValues.username}
          onChange={(event) => {
            const value = event.target.value;

            setFormValues({
              ...formValues,
              username: value,
            });
          }}
        />

        <p>Valoarea din state: {formValues.username}</p>

        <input
          name="password"
          type="password"
          placeholder="Input your password..."
          value={formValues.password}
          onChange={(event) => {
            const value = event.target.value;

            setFormValues({
              ...formValues,
              password: value,
            });
          }}
        />

        <p>Valoarea din state: {formValues.password}</p>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
