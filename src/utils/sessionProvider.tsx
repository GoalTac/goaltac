import {
  useContext,
  useState,
  useEffect,
  createContext,
  type ReactElement,
} from "react";
import {
  type SupabaseClient,
  type Session,
  type User,
} from "@supabase/supabase-js";
import { type Database } from "~/types/supabase";
import { supabase } from "./supabaseClient";

const SessionContext = createContext<{
  user: User | undefined;
  session: Session | undefined;
  supabase: SupabaseClient<Database> | undefined;
}>({
  user: undefined,
  session: undefined,
  supabase: undefined,
});

export const SessionProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User>();
  const [currentSession, setCurrentSession] = useState<Session>();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      if (session) {
        setCurrentSession(session);
        setUser(session.user);
      }
    };

    getSession().catch(console.error);
  }, []);

  const contextObject = {
    user,
    session: currentSession,
    supabase,
  };

  return (
    <SessionContext.Provider value={contextObject}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
