import { removeToken } from '@/utils/auth/token.ts';

export const useUserStore = defineStore('user', () => {
  const logout = () => {
    removeToken();
  };

  return { logout };
});
