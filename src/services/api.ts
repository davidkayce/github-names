import axios, { Axios } from "axios";
import { IOrganization, IMember } from "../interfaces";

export class APIRequest {
  public instance: any 

  constructor() {
    this.instance =  axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 10000,
      headers: {
        Accept: "application/json",
      },
    });
  }

  getOrganisations = async (): Promise<Required<IOrganization>[]>  =>{
    try {
      const response = await this.instance.get(`organizations?per_page=6&since=4242`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  getOrganisationMembers =  async (name: string): Promise<any>  => {
    try {
      const response = await this.instance.get(`orgs/${name}/members`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default APIRequest;
