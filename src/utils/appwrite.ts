import { Client , Account } from "appwrite";
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66e41052001c6ed014b5');

export const account = new Account(client);
export { ID } from 'appwrite';