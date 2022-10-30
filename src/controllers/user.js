import { connect } from "../db/connect";
import md5 from "md5";

/* LOGIN */
export const getUser = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM user");
  res.json(rows ? rows : false);
};

/* SIGNUP */

export const createUser = async (req, res) => {
  const { name, last_name, phone, email, password, rol_id, company_id } =
    req.body;

  const pwd = md5(password);

  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO user(name, last_name, phone, email, password, rol_id, company_id) VALUES(?,?,?,?,?,?,?)",
    [name, last_name, phone, email, pwd, rol_id, company_id]
  );

  res.json(result ? result.affectedRows : result);
};
