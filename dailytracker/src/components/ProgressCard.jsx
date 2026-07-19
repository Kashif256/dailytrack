function ProgressCard() {
  return (
    <div className="progress-card">

      <h3>Today's Progress</h3>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: "0%" }}
        ></div>

      </div>

      <h2>0%</h2>

    </div>
  );
}

export default ProgressCard;