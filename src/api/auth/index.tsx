export const auth = async ({ initTgData, timezone }: { initTgData: string; timezone: number }) => {
  const response = await fetch("/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "CustomerAPI.login",
      params: {
        init_data_telegram: initTgData,
        timezone,
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};
