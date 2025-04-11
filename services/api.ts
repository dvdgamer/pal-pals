import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL_PROD, API_BASE_URL_DEV } from "@env";

const api = axios.create({
  // baseURL: API_BASE_URL_PROD,
  baseURL: API_BASE_URL_DEV,
  timeout: 10000, // Sets timeout to 10 secs
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post("/users/register", {
      name,
      password,
      email,
    });
    const { token, user } = response.data;
    await AsyncStorage.setItem("jwt", token);
    await AsyncStorage.setItem("userId", user.id);
    console.log("Registration successful and token stored");
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    console.log("Logging in with:", { email, password });
    const response = await api.post("/users/login", { email, password });
    const { token, user } = response.data;
    await AsyncStorage.setItem("jwt", token);
    await AsyncStorage.setItem("userId", user.id);
    console.log("Logged in and token stored");
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

const getUserId = async () => {
  const returnedUserId = await AsyncStorage.getItem("userId");
  return returnedUserId;
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Logged out and token removed");
  } catch (error) {
    console.error("Logout failed", error);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const resolvedUserId = await getUserId();
    if (!resolvedUserId) {
      throw new Error("UserID not found");
    }
    const response = await api.get(`/users/${resolvedUserId}`);
    console.log("fetchUserData successful");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchFriendsList = async () => {
  try {
    const resolvedUserId = await getUserId();
    if (!resolvedUserId) {
      throw new Error("UserID not found");
    }
    const response = await api.get(`/user/${resolvedUserId}/friends`);
    return response.data;
  } catch (error) {
    console.error("Error fetching friends list:", error);
    throw error;
  }
};

export const handleAddFriend = async (
  friendName: string,
  birthdate: Date | null = null
) => {
  try {
    const resolvedUserId = await getUserId();
    if (!resolvedUserId) {
      throw new Error("UserID not found");
    }

    const currentBirthdate = birthdate || new Date();

    const response = await api.post(`/user/${resolvedUserId}/friends`, {
      friendName,
      dateOfBirth: currentBirthdate,
    });

    return response.data;
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};

export const deleteFriend = async (friendId: number) => {
  try {
    const resolvedUserId = await getUserId();
    if (!resolvedUserId) {
      throw new Error("UserID not found");
    }

    const response = await api.delete(`/user/${resolvedUserId}/friend/${friendId}`);
    console.log("deleteFriend successful");
    return response.data;
  } catch (error) {
    console.error("Error deleting friend:", error);
    throw error;
  }
};
