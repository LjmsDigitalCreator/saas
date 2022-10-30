import { connect } from "../db/connect";

export const getProduct = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM product");

  res.json(rows ? rows : false);
};

export const createProduct = async (req, res) => {
  const { code, bar_code, name, description, category_id, stock, company_id } =
    req.body;
  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO product(code, bar_code, name, description, category_id, stock, company_id) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [code, bar_code, name, description, category_id, stock, company_id]
  );

  res.json(result ? result.affectedRows : result);
};
