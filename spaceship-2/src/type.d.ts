interface IAstronaut {
  _id: string;
  firstName: string;
  lastName: string;
  team:
    | "Duck Invaders"
    | "Donut Factory"
    | "Schizo Cats"
    | "Raccoons of Asgard";
  age: number;
  nationality: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AstronautProps {
  astronaut: IAstronaut;
}

type ApiDataType = {
  message: string;
  status: string;
  astronauts: IAstronaut[];
  astronaut?: IAstronaut;
};
