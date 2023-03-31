const Buttons = ({ jobs, activeJob, setActiveJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((tab, index) => (
        <button
          className={activeJob === index ? 'job-btn active-btn' : 'job-btn'}
          key={tab.id}
          onClick={() => setActiveJob(index)}
        >
          {tab.company}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
