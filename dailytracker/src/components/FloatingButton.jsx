import { FaPlus } from "react-icons/fa6";

function FloatingButton({ onClick }) {
  return (
    <button className="floating-btn" onClick={onClick}>
      <FaPlus />
    </button>
  );
}

export default FloatingButton;