import axios from "axios";

interface Organization {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
}

export class APIRequest {
  public instance: any;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 10000,
      headers: {
        Accept: "application/json",
      },
    });
  }

  async getOrganisations(): Promise<Required<Organization>[]> {
    console.log('here', this.instance)
    try {
      const response = await axios.get(`organizations?per_page=6&since=4242`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getOrganisationMembers(name: string): Promise<any> {
    try {
      const response = await this.instance.get(`orgs/${name}/members`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default APIRequest;
