import { FieldValues } from "react-hook-form";

export const userRegister = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-user`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
