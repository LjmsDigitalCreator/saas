import { connect } from "../db/connect";

export const getProvider = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM provider");

  res.json(rows ? rows : false);
};

export const createProvider = async (req, res) => {
  const { identify, company, phone, email, acount, type_id, company_id } =
    req.body;
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO provider(identify, company, phone, email, acount, type_id, company_id) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [identify, company, phone, email, acount, type_id, company_id]
  );

  res.json(result ? result.affectedRows : result);
};
