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

const sqlFunWrapper = (cb) => {
  const db = dbInit();
  cb(db);

  db.close();
};

const formatMonthYear = (month, year) => `${month}/${year}`;

const getDaysByMonthYear = (year, month) => {
  const sql = `SELECT * FROM timeline WHERE month_year="${formatMonthYear(
    month,
    year
  )}"`;
  return all(sql);
};

const all = (sql) => {
  return new Promise((resolve) => {
    sqlFunWrapper((db) =>
      db.all(sql, [], (err, rows) => {
        resolve(rows);
      })
    );
  });
};

export { dbInit, getDaysByMonthYear };
