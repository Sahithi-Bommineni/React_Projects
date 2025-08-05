import { useState} from "react";

function Todolists({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
    if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`rounded-2xl p-5 mb-4 flex items-center gap-4 transition-all duration-300 border-2 ${task.completed ? 'opacity-80' : ''}`}
      style={{
        backgroundColor: '#F0E4D3',
        borderColor: isHovered ? '#DCC5B2' : 'transparent',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 5px 15px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Checkbox */}
      <div className="task-checkbox-container">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} className="task-checkbox"/>
        {task.completed && (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm pointer-events-none">
            ✓
          </span>
        )}
      </div>

      {/* Task Text */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyDown={handleKeyPress}
          className="flex-1 text-lg bg-transparent border-none outline-none font-inherit px-3 py-2 rounded-lg"
          style={{
            backgroundColor: '#FAF7F3',
            color: '#5a4a3a'
          }}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 text-lg transition-all duration-300 ${task.completed ? 'line-through opacity-60' : ''}`}
          style={{ color: '#5a4a3a' }}
        >
          {task.text}
        </span>
      )}

      {/* Action Buttons */}
      <div className={`flex gap-3 transition-opacity duration-300 ${isHovered || window.innerWidth <= 768 ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={handleEdit}
          className="w-10 h-10 border-none rounded-full cursor-pointer text-base transition-all duration-300 flex items-center justify-center hover:scale-110"
          style={{ backgroundColor: '#DCC5B2', color: 'white' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#D9A299'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#DCC5B2'}
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="w-10 h-10 border-none rounded-full cursor-pointer text-base transition-all duration-300 flex items-center justify-center hover:scale-110"
          style={{ backgroundColor: '#e74c3c', color: 'white' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
export default Todolists;