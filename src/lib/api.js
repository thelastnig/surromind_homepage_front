import axios from 'axios';
import queryString from 'query-string';

export const signupNormal = ({email, password, zodiacSign}) => axios.post(`/api/auth/signup`, {email, password, zodiacSign});

export const login = ({email, password}) => axios.post('/api/auth/login', {email, password});

export const logout = () => axios.post('/api/auth/logout');

export const checkStatus = () => axios.get('/api/auth/check');

export const readTarot = ({email}) => axios.post('/api/tarot/readtarot', {email});

export const deleteTarot = ({email, index}) => axios.post('/api/tarot/deletetarot', {email, index});

export const saveTarot = ({email, type, question, process1, process2, process3, process4, process5, process6, total}) => {
  axios.post('/api/tarot/savetarot', {email, type, question, process1, process2, process3, process4, process5, process6, total});
};
                          
export const changeName = ({email, name, zodiacSign}) => axios.post('/api/setting/name', {email, name, zodiacSign});
                          
export const changeSign = ({email, name, zodiacSign}) => axios.post('/api/setting/sign', {email, name, zodiacSign});

export const changePassword = ({email, password}) => axios.post('/api/setting/password', {email, password});
