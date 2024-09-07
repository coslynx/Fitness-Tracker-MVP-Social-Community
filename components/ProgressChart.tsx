import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { useStore } from '../utils/store';
import { fetchGoalProgress } from '../utils/api';

ChartJS.register(CategoryScale, LineController, LineElement, PointElement, LinearScale, Title);

interface ProgressChartProps {
  goalId: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ goalId }) => {
  const { goals } = useStore();
  const [progressData, setProgressData] = useState<{ labels: string[]; datasets: { label: string; data: number[] }[] }>({
    labels: [],
    datasets: [{ label: 'Progress', data: [] }],
  });

  useEffect(() => {
    const fetchProgress = async () => {
      const response = await fetchGoalProgress(goalId);
      if (response.ok) {
        const data = await response.json();
        setProgressData({
          labels: data.labels,
          datasets: [{ label: 'Progress', data: data.datasets[0].data }],
        });
      } else {
        console.error('Error fetching progress data:', response.status);
      }
    };

    fetchProgress();
  }, [goalId]);

  const goal = goals.find((g) => g.id === goalId);

  const data = {
    labels: progressData.labels,
    datasets: [
      {
        label: goal?.name || 'Goal Progress',
        data: progressData.datasets[0].data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: goal?.name || 'Goal Progress',
      },
    },
  };

  return (
    <div className="w-full h-64 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressChart;