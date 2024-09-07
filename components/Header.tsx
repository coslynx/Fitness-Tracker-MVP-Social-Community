import Link from "next/link";
import { useSession } from "next-auth/react";
import { useStore } from "../utils/store";

const Header: React.FC = () => {
  const { user } = useStore();
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800">Fitness Tracker</h1>
        </Link>
        <nav className="flex space-x-6">
          {session && (
            <>
              <Link href="/dashboard">
                <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
              </Link>
              <Link href="/profile">
                <a className="text-gray-600 hover:text-gray-800">Profile</a>
              </Link>
            </>
          )}
          {!session && (
            <>
              <Link href="/login">
                <a className="text-gray-600 hover:text-gray-800">Login</a>
              </Link>
              <Link href="/signup">
                <a className="text-gray-600 hover:text-gray-800">Signup</a>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;