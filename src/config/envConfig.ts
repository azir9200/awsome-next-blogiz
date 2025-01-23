const envConfig = {
  baseApi:
    process.env.NEXT_PUBLIC_BASE_API ||
    "https://better-manage-project.vercel.app/api/product",
};

export default envConfig;
