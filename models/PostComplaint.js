const db = require("../config/db");
class PostComplaint{
    constructor(compType,hos_id,issue,issue_date){
        this.compType = compType;
        this.hos_id = hos_id;
        this.issue = issue;
        this.issue_date = issue_date;
    }
save(){
    let sql = `
    INSERT INTO complaint(compType,hos_id,issue,issue_date)
    VALUES
    (
        '${this.compType}',
        '${this.hos_id}',
        '${this.issue}',
        '${this.issue_date}'
    );
    `;
    return db.execute(sql);
}    
}
module.exports = PostComplaint;