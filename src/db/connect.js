import mysql from "mysql2/promise";
import { dbCredentials } from "../config";

export const connect = async () => {
  return await mysql.createConnection(dbCredentials);
};
