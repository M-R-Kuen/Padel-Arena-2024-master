import { axiosInstance } from "../AxiosConfig";

export const getFixtureById = async (fixtureId: string) => {
  try {
    const response = await axiosInstance.get(`/tournamentfixture/${fixtureId}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
