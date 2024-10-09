// src/services/api.ts
export const fetchUserData = async (userId: number) => {
  try {
    const response = await fetch(`https://172.21.215.20:3000/api/user/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    throw error;
  }
};

export const fetchFriendsList = async (userId: number) => {
  try {
    const response = await fetch(`https://172.21.215.20:3000/api/user/${userId}/friends`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
