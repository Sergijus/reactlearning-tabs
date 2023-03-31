import { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Job from './components/Job';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <Buttons jobs={jobs} activeJob={activeJob} setActiveJob={setActiveJob} />
      <Job jobs={jobs} activeJob={activeJob} />
    </section>
  );
};
export default App;
