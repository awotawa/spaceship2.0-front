import React, { useEffect, useState } from "react";
import {
  getAstronauts,
  addAstronaut,
  updateAstronaut,
  deleteAstronaut,
} from "./API";
import AddAstronaut from "./components/AddAstronaut";
import AstronautItem from "./components/AstronautItem";

const App: React.FC = () => {
  const [astronauts, setAstronauts] = useState<IAstronaut[]>([]);

  useEffect(() => {
    fetchAstronauts();
  }, []);

  const fetchAstronauts = (): void => {
    getAstronauts()
      .then(({ data: { astronauts } }: IAstronaut[] | any) =>
        setAstronauts(astronauts)
      )
      .catch((err: Error) => console.log(err));
  };

  const handleSaveAstronaut = (
    e: React.FormEvent,
    formData: IAstronaut
  ): void => {
    e.preventDefault();
    addAstronaut(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Astronaut not saved");
        }
        setAstronauts(data.astronauts);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAstronaut = (astronaut: IAstronaut): void => {
    updateAstronaut(astronaut)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Astronaut not updated");
        }
        setAstronauts(data.astronauts);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteAstronaut = (_id: string): void => {
    deleteAstronaut(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Astronaut not deleted");
        }
        setAstronauts(data.astronauts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>My Astronauts</h1>
      <AddAstronaut saveAstronaut={handleSaveAstronaut} />
      {astronauts.map((astronaut: IAstronaut) => (
        <AstronautItem
          key={astronaut._id}
          updateAstronaut={handleUpdateAstronaut}
          deleteAstronaut={handleDeleteAstronaut}
          astronaut={astronaut}
        />
      ))}
    </main>
  );
};

export default App;
