export interface IOrganization {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  members?: IMember[];
}

export interface IMember {
  login: string;
  id: number;
  avatar_url: string;
}
