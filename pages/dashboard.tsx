import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useStore } from "../utils/store";
import { fetchGoals } from "../utils/api";
import GoalInput from "../components/GoalInput";
import ProgressChart from "../components/ProgressChart";
import SocialShareButton from "../components/SocialShareButton";
import Button from "../components/Button";

const DashboardPage: React.FC = () => {
  const { data: session } = useSession();
  const { goals, setGoals, addGoalToStore, selectedGoal, setSelectedGoal } =
    useStore();
  const [showGoalInput, setShowGoalInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const data = await fetchGoals(session.user.id);
        setGoals(data);
      }
    };
    fetchData();
  }, [session, setGoals]);

  const handleGoalSelection = (goalId: number) => {
    setSelectedGoal(goalId);
  };

  const handleCreateGoal = () => {
    setShowGoalInput(true);
  };

  const handleCloseGoalInput = () => {
    setShowGoalInput(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Fitness Dashboard</h1>
      <Button type="primary" onClick={handleCreateGoal}>
        Create New Goal
      </Button>
      {showGoalInput && (
        <GoalInput onClose={handleCloseGoalInput} />
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
        <ul>
          {goals.map((goal) => (
            <li
              key={goal.id}
              className="bg-white rounded-md shadow-md p-4 mb-4 cursor-pointer"
              onClick={() => handleGoalSelection(goal.id)}
            >
              <h3 className="text-xl font-bold mb-2">{goal.name}</h3>
              <p className="text-gray-600 mb-2">
                Target: {goal.target}
              </p>
              <p className="text-gray-600 mb-2">
                Deadline: {new Date(goal.deadline).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {selectedGoal && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Progress</h2>
          <ProgressChart goalId={selectedGoal} />
        </div>
      )}
      {selectedGoal && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Share Your Progress</h2>
          <SocialShareButton
            url="#"
            title="My Fitness Progress"
            description="Check out my progress towards my fitness goals!"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;