import { useState } from 'react';
import { useStore } from '../utils/store';
import { addGoal } from '../utils/api';
import { validateGoal } from '../utils/validation';

interface GoalInputProps {
  onClose: () => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ onClose }) => {
  const { goals, addGoalToStore } = useStore();
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [errors, setErrors] = useState<{ name?: string; target?: string; deadline?: string }>({});

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(event.target.value);
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(event.target.value ? new Date(event.target.value) : null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validateGoal({ name, target, deadline });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const newGoal = await addGoal({ name, target, deadline });
        addGoalToStore(newGoal);
        onClose();
      } catch (error) {
        console.error('Error creating goal:', error);
        // Handle API errors appropriately (e.g., display a message to the user)
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Create a New Goal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Goal Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="target" className="block text-gray-700 text-sm font-bold mb-2">
              Target Value
            </label>
            <input
              type="text"
              id="target"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={target}
              onChange={handleTargetChange}
            />
            {errors.target && <p className="text-red-500 text-xs italic">{errors.target}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={deadline ? deadline.toISOString().slice(0, 10) : ''}
              onChange={handleDeadlineChange}
            />
            {errors.deadline && <p className="text-red-500 text-xs italic">{errors.deadline}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalInput;