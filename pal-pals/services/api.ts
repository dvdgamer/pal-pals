import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://172.21.215.20:3000/api",
  timeout: 10000, // Sets timeout to 10 secs
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/login", { username, password });
    const { token } = response.data;
    await AsyncStorage.setItem("jwt", token);
    console.log("Logged in and token stored");
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

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
