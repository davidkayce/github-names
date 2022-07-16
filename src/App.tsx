
import { useQuery } from 'react-query';
import Accordion from './components/Accordion';
import APIRequest from './services/api';
import './index.css';

const request = new APIRequest();

const App = () => {
  const { data: Orgs, isFetching, refetch } = useQuery(
    'ORGS',
    () => request.getOrganisations,
    {
      keepPreviousData: true,
      onError: error => {
        console.log(error);
      }
    }
  );

  return (
    <div className="container">
      <h2>GitHub organizations and their members</h2>
      <section className="information-container">
      </section>
    </div>
  )
}

export default App
