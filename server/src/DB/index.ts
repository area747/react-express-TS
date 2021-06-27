import mysql from 'mysql2/promise';
import mybatis, {Format, Params} from 'mybatis-mapper';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    port: 3306,
    database: process.env.DB_NAME,
});
const format: Format = {language: 'sql', indent: '  '};
const mapperPath = path.join(process.cwd(), 'server', 'mapper');
const mapperList: string[] = [];
const ls = fs.readdirSync(mapperPath, {withFileTypes: true});
(function listMapper(ls: fs.Dirent[], mapperPath): void {
    ls.forEach(element => {
        const filePath = path.join(mapperPath, element.name);
        if (element.isFile()) mapperList.push(filePath);
        if (element.isDirectory()) listMapper(fs.readdirSync(fs.realpathSync(filePath), {withFileTypes: true}), filePath);
    });
})(ls, mapperPath);
console.log(mapperList);
mybatis.createMapper(mapperList);

const execute = async (namespace: string, sql: string, param: Params): Promise<Array<any>> => {
    const conn = await connection.getConnection();
    try {
        const query = mybatis.getStatement(namespace, sql, param, format);
        const [row, etc] = await conn.query(query, param);
        conn.release();
        console.log(query);
        return JSON.parse(JSON.stringify(row));
    } catch (err) {
        console.log(err);
        conn.release();
        return [];
    }
};

export default execute;
