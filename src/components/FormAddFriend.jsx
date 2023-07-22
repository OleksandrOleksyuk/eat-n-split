import { useState } from "react";
import Button from "./Button.jsx";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(evt) {
    evt.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend</label>
      <input
        type="text"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />

      <label>🎇 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(evt) => setImage(evt.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
