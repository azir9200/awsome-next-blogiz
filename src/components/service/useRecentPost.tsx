"use client";
import { useEffect, useState } from "react";

export const useRecentPosts = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://better-manage-project.vercel.app/api/product"
        );

        if (!response.ok) throw new Error("Failed to fetch services");
        const data = await response.json();

        setServices(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};
