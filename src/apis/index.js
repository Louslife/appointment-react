import axios from 'axios';

const basicAPI = axios.create(
  {
    baseURL: 'https://api.drvet.info'
  })

// 驗證 使用者登入
export const apiVerify = data => basicAPI.get('/api/checkin/verify', data);

// 取得 hostId 與當時的 OTP
export const apiGetIdAndTOTP = data => basicAPI.get('/api/checkin/totp', data);

// 取得 config
export const apiGetConfig = data => basicAPI.get(`/api/checkin/config`, data);

// 取得 reservation 資訊
export const apiCheckinReservation = data => basicAPI.get('/api/checkin', data);

// 驗證 reservation 資訊
export const apiVerifyReservation = data => basicAPI.put('/api/checkin', data);