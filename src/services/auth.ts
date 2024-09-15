import { account, ID } from '../utils/appwrite';

export const authService = {
    async login(email, password) {
      await account.createEmailPasswordSession(email, password);
      return await account.get();
    },
  
    async register(email, password, name) {
      await account.create(ID.unique(), email, password, name);
      return await this.login(email, password);
    },
  
    async logout() {
      await account.deleteSession('current');
    },
};