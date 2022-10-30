import { connect } from "../db/connect";

export const getCompany = async (req, res) =>{  
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM company");

  res.json(rows ? rows : false);
}

export const createCompany = async (req, res) => {
  const {
    identify,
    company,
    phone,
    email,
    owner_name,
    owner_last_name,
    activation_code
  } = req.body;

  const connection = await connect();
  const [result] = await connection.query(
    "INSERT INTO company(identify, company, phone, email, owner_name, owner_last_name, activation_code) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [
      identify,
      company,
      phone,
      email,
      owner_name,
      owner_last_name,
      activation_code
    ]
  );

  res.json(result ? result.affectedRows : result);
};
