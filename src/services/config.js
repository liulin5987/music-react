const devBaseURL = "http://123.207.32.32:9001";
// 如有生产环境服务器，这需另外部署地址
const proBaseURL = "http://123.207.32.32:9001";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;