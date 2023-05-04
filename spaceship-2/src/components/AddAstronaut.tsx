import React, { useState } from "react";

type Props = {
  saveAstronaut: (e: React.FormEvent, formData: IAstronaut | any) => void;
};

const AddAstronaut: React.FC<Props> = ({ saveAstronaut }) => {
  const [formData, setFormData] = useState<IAstronaut | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveAstronaut(e, formData)}>
      <div>
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input onChange={handleForm} type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input onChange={handleForm} type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="team">Team</label>
          <input onChange={handleForm} type="text" id="team" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={handleForm} type="text" id="age" />
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <input onChange={handleForm} type="text" id="nationality" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Astronaut
      </button>
    </form>
  );
};

export default AddAstronaut;
