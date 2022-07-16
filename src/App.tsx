import { useState } from "react";
import { useQuery } from "react-query";
import { IOrganization, IMember } from "./interfaces";
import Accordion from "./components/Accordion";
import APIRequest from "./services/api";
import "./index.scss";

const request = new APIRequest();

const App = () => {
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);

  const { isFetching, refetch } = useQuery(
    "ORGS",
    () => request.getOrganisations(),
    {
      keepPreviousData: true,
      onSuccess: async (data) => {
        const buffer: any[] = [];

        if (data.length > 0) {
          data.forEach(async (org) => {
            try {
              const members = await request.getOrganisationMembers(org.login);
              setOrganizations((previous) => [
                ...previous,
                {
                  login: org.login,
                  id: org.id,
                  node_id: org.node_id,
                  avatar_url: org.avatar_url,
                  members,
                },
              ]);
            } catch (error) {
              console.log(error);
            }
          });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  console.log(organizations);

  return (
    <div className="container">
      <h2>GitHub organizations and their members</h2>
      <section className="information-container">
        {isFetching && (
          <p className="fetching">
            Fetching organzations...
            <br />
            <button type="button" onClick={() => refetch()}>
              Try again
            </button>
          </p>
        )}

        {!isFetching &&
          organizations.map((org) => (
            <div className="outer">
              <Accordion
                key={org.id}
                className="organization-container"
                heading={
                  <div className="organization-title">
                    <section>
                      <img src={org.avatar_url} alt={org.login} />
                    </section>
                    <section>
                      <h3>{org.login}</h3>
                      <p>{org.id}</p>
                      <p>{org.node_id}</p>
                    </section>
                  </div>
                }
                content={
                  <>
                    <h3>MEMBERS</h3>
                    {org && org.members && org.members.length > 0 ? (
                      <div className="organization-members">
                        {org.members?.map((member: IMember) => (
                          <div className="member-container" key={member.id}>
                            <img src={member.avatar_url} alt={member.login} />
                            <article>
                              <p>
                                <strong>{member.login}</strong>
                              </p>
                              <p>{member.id}</p>
                            </article>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No members for this organisation</p>
                    )}
                  </>
                }
              />
            </div>
          ))}
      </section>
    </div>
  );
};

export default App;
