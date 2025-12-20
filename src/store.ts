import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MobileSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set((prev) => ({ ...prev, isOpen: true })),
  onClose: () => set((prev) => ({ ...prev, isOpen: false })),
}));

export interface User {
  user_id: string;
  name: string;
  email: string;
  password: string;
}
export interface UserData {
  user: User;
  onRegister: (user: User) => void;
}
export const useUserData = create<UserData>()(
  persist(
    (set) => ({
      user: {
        user_id: "",
        name: "",
        email: "",
        password: "",
      },
      onRegister: (user) => set((state) => ({ ...state, user })),
    }),
    {
      name: "user-data",
    }
  )
);

export interface UserSession {
  user_id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
  token: string;
  login: (user_id: string, name: string, email: string, token: string) => void;
  logout: () => void;
}
export const useUserSession = create<UserSession>()(
  persist(
    (set) => ({
      user_id: "",
      name: "",
      email: "",
      isLoggedIn: false,
      token: "",
      login: (user_id: string, name: string, email: string, token: string) =>
        set((state) => ({
          ...state,
          user_id,
          name,
          email,
          token,
          isLoggedIn: true,
        })),
      logout: () =>
        set((state) => ({
          ...state,
          user_id: "",
          name: "",
          email: "",
          isLoggedIn: false,
          token: "",
        })),
    }),
    {
      name: "user-session",
    }
  )
);
