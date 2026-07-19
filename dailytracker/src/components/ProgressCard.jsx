function ProgressCard({ percent, completed, total }) {
  return (
    <div className="progress-card">

      <h3>Today's Progress</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>

      <h2>{percent}%</h2>

      <p>
        {completed} / {total} Completed
      </p>

    </div>
  );
}

export default ProgressCard;