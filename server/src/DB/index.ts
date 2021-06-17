import mysql from 'mysql2/promise';
import mybatis, {Format, Params} from 'mybatis-mapper';
import path from 'path';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'user',
});
const mapperPath = path.join(process.cwd());
const format: Format = {language: 'sql', indent: '  '};

const excute = async (namespace: string, sql: string, param: Params): Promise<Array<any>> => {
    const conn = await connection.getConnection();
    try {
        const query = mybatis.getStatement(namespace, sql, param, format);
        const [row, etc] = await conn.query(query, param);
        const res = JSON.parse(JSON.stringify(row));
        conn.release();
        return res;
    } catch (err) {
        console.log(err);
        conn.release();
        return [];
    }
};
