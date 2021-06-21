import mysql from 'mysql2/promise';
import mybatis, {Format, Params} from 'mybatis-mapper';
import fs from 'fs';
import path from 'path';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'sams',
});
const format: Format = {language: 'sql', indent: '  '};
const mapperPath = path.join(process.cwd(), 'server', 'mapper');
const ls = fs.readdirSync(mapperPath);
const mapperList: string[] = [];
ls.forEach(element => {
    mapperList.push(path.join(mapperPath, element));
});
mybatis.createMapper(mapperList);

const excute = async (namespace: string, sql: string, param: Params): Promise<Array<any>> => {
    const conn = await connection.getConnection();
    try {
        const query = mybatis.getStatement(namespace, sql, param, format);
        const [row, etc] = await conn.query(query, param);
        conn.release();
        return JSON.parse(JSON.stringify(row));
    } catch (err) {
        console.log(err);
        conn.release();
        return [];
    }
};

export default excute;
