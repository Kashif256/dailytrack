import PrayerCard from "./PrayerCard";

function PrayerSection({ prayers, onToggle }) {
  return (
    <div className="habit-list">
      <h2>🕌 Prayer Tracker</h2>

      {prayers.length === 0 ? (
        <p>No prayers found.</p>
      ) : (
        prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            prayer={prayer}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}

export default PrayerSection;