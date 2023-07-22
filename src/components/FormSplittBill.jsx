import { useState } from "react";
import Button from "./Button.jsx";

export default function FormSplittBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaid, setWhoIsPaid] = useState("user");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaid === "user" ? paidByFriend : -paidByUser);
  }
  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill a value</label>
        <input
          type="number"
          value={bill}
          onChange={(evt) => setBill(+evt.target.value)}
        />

        <label>🧍‍♂️ Your expense</label>
        <input
          type="number"
          value={paidByUser}
          onChange={(evt) =>
            setPaidByUser(
              +evt.target.value > bill ? paidByUser : +evt.target.value
            )
          }
        />

        <label>👫 {selectedFriend.name}'s expence</label>
        <input type="number" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaid}
          onChange={(evt) => setWhoIsPaid(evt.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    )
  );
}
