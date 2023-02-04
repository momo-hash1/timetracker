const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbInit = () => {
  const db = new sqlite3.Database(
    path.join(__dirname, "../timeline.db"),
    sqlite3.OPEN_READWRITE,
    (err) => {
      err && console.log(err.message);
      console.log("Connected");
    }
  );
  return db;
};

const formatMonthYear = (month, year) => `${month}/${year}`;

const getDaysByMonthYear = (db, year, month) => {
  const sql = `SELECT * FROM timeline WHERE month_year=?`;
  db.all(sql, [formatMonthYear(month, year)], (err, rows) => {
    console.log(rows);
  });
};

export { dbInit, getDaysByMonthYear };
