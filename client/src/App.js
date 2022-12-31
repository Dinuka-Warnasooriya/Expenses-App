import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("working");
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e){
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction",{
      method:"POST",
      body:form,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleInput}
          value={form.amount}
          name="amount"
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          onChange={handleInput}
          value={form.description}
          name="description"
          placeholder="Enter transaction details "
        />
        <input
          type="date"
          onChange={handleInput}
          value={form.date}
          name="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
