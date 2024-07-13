import { useState } from "react";
export default function Player({ name, symbol, isActive, onNameChange }) {
  const [newName, setNewName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(newName, symbol);
    }
  }

  function handleChange(e) {
    setNewName((_) => e.target.value);
  }

  let playerName = <span className="player-name">{newName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerName = (
      <input type="text" required value={newName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
