/**
 * 引入文件中的环境变量
 */

import { config } from 'dotenv'

config({
    path: `.env.${process.env.NODE_ENV || 'dev'}.local`,
})

export const CREDENTIALS = process.env.CREDENTIALS === 'true'
export const {
    NODE_ENV,
    PORT,
    SECRET_KEY,
    LOG_FORMAT,
    LOG_DIR,
    ORIGIN,
} =  process.env