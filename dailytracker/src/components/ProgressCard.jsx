function ProgressCard({ percent, completed, total }) {
  return (
    <div className="progress-card-new">
      <div className="progress-left">
        <h3>Today's Progress</h3>

        <h1>{percent}%</h1>

        <p>
          {completed} of {total} tasks completed
        </p>
      </div>

      <div className="progress-circle" style={{ "--progress": percent }}>
        <div className="circle-inner">
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;