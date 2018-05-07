import { AsyncStorage } from "react-native";

export default class Repository {
  static async getItem(key) {
    const value = await AsyncStorage.getItem("DidILockMyDoor::" + key);
    return JSON.parse(value);
  }

  static async setItem(key, value) {
    await AsyncStorage.setItem("DidILockMyDoor::" + key, JSON.stringify(value));
  }
}
