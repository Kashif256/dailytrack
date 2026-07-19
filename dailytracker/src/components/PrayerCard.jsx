function PrayerCard({ prayer, onToggle }) {
  return (
    <div
      className={`prayer-card ${
        prayer.completed ? "completed" : ""
      }`}
    >
      <div className="prayer-info">
        <h3>🕌 {prayer.name}</h3>
        <p>
          {prayer.completed
            ? "Completed"
            : "Pending"}
        </p>
      </div>

      <label className="switch">
        <input
          type="checkbox"
          checked={prayer.completed}
          onChange={() => onToggle(prayer.id)}
        />

        <span className="slider"></span>
      </label>
    </div>
  );
}

export default PrayerCard;