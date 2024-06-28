import { useState } from "react";

function PasswordValidator() {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showError, setShowError] = useState(false);

  function handleInputChange(e) {
    // Preluam noua valoare a inputului tastata de user
    const value = e.target.value;

    // Verificam daca noua valoare NU are intre 8-16 caractere
    if (value.length < 8 || value.length > 16) {
      setErrorMsg("Parola trebuie sa fie intre 8-16 caractere");
      setShowError(true);
    } else {
      // Daca valoarea este intre 8-16, nu mai afisam eroarea
      setErrorMsg("");
      setShowError(false);
    }

    // Updatam 'inputValue' ca sa fie afisat si userului ce a testat
    setInputValue(value);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="password"
        name="password"
        value={inputValue}
        onChange={handleInputChange}
      />

      <span
        style={{
          display: showError ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
    </div>
  );
}

export default PasswordValidator;
