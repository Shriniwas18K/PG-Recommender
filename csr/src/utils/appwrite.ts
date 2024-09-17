import { Client , Account , Storage ,Databases  } from "appwrite";
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66e41052001c6ed014b5');

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const DATABASE_ID='';
export const BUCKET_ID='';
export { ID } from 'appwrite';