import Duties from './Duties';

const Job = ({ jobs, activeJob }) => {
  console.log(jobs);
  console.log(activeJob);

  const { company, dates, title, duties } = jobs[activeJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default Job;
