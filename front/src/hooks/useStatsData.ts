import { useState, useEffect } from "react";

import { getUserStats } from "@/Server/User/userStats";

const useUserStats = (userId: string, token: string) => {
  const [stats, setStats] = useState<{
    id: string;
    won: number;
    loss: number;
    wonTournaments?: number;
    lossTournaments?: number;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getUserStats(userId, token);

        setStats(response);
      } catch (err) {
        setError("Error al cargar las estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  return { stats, loading, error };
};

export default useUserStats;
