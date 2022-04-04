import { useState } from "react";

interface Guest {
  name: string;
  isConfirmed: boolean;
  isEditing: boolean;
  guests: string;
}

const GuestList: React.FC<Guest> = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>GuestList</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add Guest</button>
    </div>
  );
};

export default GuestList;
