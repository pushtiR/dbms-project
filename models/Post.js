const { createServer } = require("mysql2");
const db = require("../config/db");

class Post {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;
    let sql = `
            INSERT INTO entries(name,
                city,
                date)
            VALUES(
                '${this.name}',
                '${this.city}',
                '${createdAtDate}'
            );
        `;
    const [newPost, _] = db.execute(sql);
    return newPost;
  }
  static findAll() {
    let sql = " SELECT * FROM entries";
    return db.execute(sql);
  }
  static findById(name) {
    let sql = ` SELECT * FROM entries WHERE name = ${name};`;
    return db.execute(sql);
  }
}
module.exports = Post;
