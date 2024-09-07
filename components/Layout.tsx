import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Header from './Header';
import { useStore } from '../utils/store';
import { fetchGoals } from '../utils/api';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { goals, setGoals } = useStore();
  const { data: session } = useSession();

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
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
};

export default Layout;