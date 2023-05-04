import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getAstronauts = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const astronauts: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/astronauts"
    );
    return astronauts;
  } catch (error) {
    throw error;
  }
};

export const addAstronaut = async (
  formData: IAstronaut
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const astronaut: Omit<IAstronaut, "_id"> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      team: formData.team,
      age: formData.age,
      nationality: formData.nationality,
    };
    const saveAstronaut: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-astronaut",
      astronaut
    );
    return saveAstronaut;
  } catch (error) {
    throw error;
  }
};

export const updateAstronaut = async (
  formData: IAstronaut
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const astronautUpdate: Omit<IAstronaut, "_id"> = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      team: formData.team,
      age: formData.age,
      nationality: formData.nationality,
    };
    const updatedAstronaut: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-astronaut/${formData._id}`,
      astronautUpdate
    );
    return updatedAstronaut;
  } catch (error) {
    throw error;
  }
};

export const deleteAstronaut = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedAstronaut: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-astronaut/${_id}`
    );
    return deletedAstronaut;
  } catch (error) {
    throw error;
  }
};
