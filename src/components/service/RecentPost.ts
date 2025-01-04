import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/api/services` ||
      "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app/api/services"
  );

  return res.json();
};

// export const getRecentPosts = async () => {
//   const apiUrl =
//     envConfig.baseApi ||
//     "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app";

//   try {
//     const res = await fetch(`${apiUrl}/api/services`, {
//       cache: "no-store", // Disable caching (for SSR)
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching recent posts:", error);
//     throw error;
//   }
// };

export const getSingleService = async (id: string) => {
  const res = await fetch(
    `${envConfig.baseApi}/api/services/${id}` ||
      "https://backend-deply-project-fejosaufu-azir-uddins-projects.vercel.app/api/services"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  // eslint-disable-next-line padding-line-between-statements
  return res.json();
};
