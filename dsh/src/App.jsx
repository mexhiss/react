import { useState } from "react";

function MultiStepRegister() {
  const [step, setStep] = useState(1);
const [formData,SetFormData]=useState({
  fullname : '',
  email : '',
  age : '',
  password : '',
  confirmPassword : '',
  acceptTerms : false
})
  
 

  

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function nextStep() {
    if (formData.fullname.length < 4) {
      setError("Fullname duhet të ketë të paktën 4 karaktere");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Email jo valide");
      return;
    }

    if (formData.age < 16) {
      setError("Duhet të jesh 16+");
      return;
    }

    setError("");
    setStep(2);
  }

  function submitForm(e) {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Password minimum 6 karaktere");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password nuk përputhen");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Duhet të pranosh kushtet");
      return;
    }

    setError("");
    setSuccess("Regjistrimi u krye me sukses ");
  }

  return (
    <form onSubmit={submitForm}>
      <h2>Hapi {step}</h2>

      {error ? <p>{error}</p> : ''}
      {success ? <p style={{ color: "green" }}>{success}</p> : " "}

      {step === 1 ?  (
        <>
          <input
            placeholder="Fullname"
            value={formData.fullname}
            onChange={(e) => SetFormData({...formData, fullname : e.target.value})}
          />

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => SetFormData({...formData, email : e.target.value})}
          />

          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => SetFormData({...formData,age : e.target.value})}
          />

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </>
      ) : ''} 

      {step === 2 ? (
        <>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => SetFormData({...formData,password:e.target.value})}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => SetFormData({...formData,confirmPassword : e.target.value})}
          />

          <label>
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => SetFormData({...formData,
                acceptTerms : e.target.checked })} 
            />
            Pranoj kushtet
          </label>

          <br />

          <button type="button" onClick={() => setStep(1)}>
            Back
          </button>

          <button type="submit">Submit</button>
        </>
      ) : ''}
    </form>
  );
}

export default MultiStepRegister;
