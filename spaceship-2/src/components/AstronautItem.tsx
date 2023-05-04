import React from "react";

type Props = AstronautProps & {
  updateAstronaut: (astronaut: IAstronaut) => void;
  deleteAstronaut: (_id: string) => void;
};

const AstronautItem: React.FC<Props> = ({
  astronaut,
  updateAstronaut,
  deleteAstronaut,
}) => {
  const teamColor: string = `Card ${astronaut.team}`;
  return (
    <div className={teamColor}>
      <div className="Card--text">
        <span>{astronaut.firstName}</span>
        <span>{astronaut.lastName}</span>
        <span>{astronaut.team}</span>
        <span>{astronaut.age}</span>
        <span>{astronaut.nationality}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateAstronaut(astronaut)}
          className="Card--button__done"
        >
          Update
        </button>
        <button
          onClick={() => deleteAstronaut(astronaut._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AstronautItem;
