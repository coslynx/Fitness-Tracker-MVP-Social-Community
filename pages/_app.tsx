import { SessionProvider } from "next-auth/react";
import { useStore } from "../utils/store";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchGoals } from "../utils/api";
import { fetchUser } from "../utils/api";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const { goals, setGoals, user, setUser } = useStore();

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        const goalsData = await fetchGoals(session.user.id);
        setGoals(goalsData);

        const userData = await fetchUser(session.user.id);
        setUser(userData);
      };

      fetchData();
    }
  }, [session]);

  return (
    <SessionProvider session={session}>
      <Layout>{<Component {...pageProps} />}</Layout>
    </SessionProvider>
  );
}

export default MyApp;