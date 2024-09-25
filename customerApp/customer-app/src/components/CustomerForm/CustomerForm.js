import { useState } from "react";
import "./CustomerForm.css";

function CustomerForm({ addNewCustomer }) {
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!customerName) {
      setError(true);
    } else {
      const newCustomer = {
        id: Math.random(),
        customerName,
      };
      addNewCustomer(newCustomer);
      setCustomerName("");
      setError(false);
    }
  };

  return (
    <div>
      <form className="customer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`customer-input ${error ? "error" : ""}`}
          placeholder="Add a new customer"
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
        />
        <button>
          <i className="bi bi-plus-lg"></i>
        </button>
      </form>
      {error && <p className="error-message">Please enter a name!</p>}
    </div>
  );
}

export default CustomerForm;
