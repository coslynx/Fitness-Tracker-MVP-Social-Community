import { useSession } from "next-auth/react";
import { useStore } from "../utils/store";
import { fetchGoals } from "../utils/api";
import { useEffect } from "react";

import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  const { data: session } = useSession();
  const { goals, setGoals } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const data = await fetchGoals(session.user.id);
        setGoals(data);
      }
    };

    fetchData();
  }, [session, setGoals]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Fitness Journey!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Track your progress, set goals, and connect with a supportive community.
        </p>
        {!session && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <a href="/login">Get Started</a>
          </button>
        )}
        {session && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <a href="/dashboard">Go to Dashboard</a>
          </button>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;