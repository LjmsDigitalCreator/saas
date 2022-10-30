import { connect } from "../db/connect";

export const getCategory = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM category");

  res.json(rows ? rows : false);
};

export const createCategory = async (req, res) => {
  const { name, company_id } = req.body;
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO category(name, company_id) VALUES(?, ?)",
    [name, company_id]
  );

  res.json(result ? result.affectedRows : result);
};
