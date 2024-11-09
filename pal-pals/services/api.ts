import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://172.21.215.20:3000/api",
  timeout: 10000, // Sets timeout to 10 secs
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (
  name: string,
  password: string,
  email: string
) => {
  try {
    const response = await api.post("/users/register", {name, password, email,})
    const { token } = response.data;
    await AsyncStorage.setItem("jwt", token);
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    console.log("Logging in with:", { email, password });
    const response = await api.post("/users/login", { email, password });
    const { token } = response.data;
    await AsyncStorage.setItem("jwt", token);
    console.log("Logged in and token stored");
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Logged out and token removed");
  } catch (error) {
    console.error("Logout failed", error);
    throw error;
  }
}

export const fetchUserData = async (userId: number) => {
  try {
    const response = await api.get(`/users/${userId}`);
    console.log("fetchUserData successful");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchFriendsList = async (userId: number) => {
  try {
    const response = await api.get(`/user/${userId}/friends`);
    return response.data;
  } catch (error) {
    console.error("Error fetching friends list:", error);
    throw error;
  }
};

export const deleteFriend = async (userId: number, friendId: number) => {
  try {
    const response = await api.delete(`/user/${userId}/friend/${friendId}`);
    console.log("deleteFriend successful");
    return response.data;
  } catch (error) {
    console.error("Error deleting friend:", error);
    throw error;
  }
};
