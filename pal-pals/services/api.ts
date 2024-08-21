// src/services/api.ts
export const fetchUserData = async (userId: number) => {
  try {
    const response = await fetch(`http://172.21.215.20:3000/api/user/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
