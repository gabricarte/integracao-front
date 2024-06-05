// biblioteca CryptoJS
import CryptoJS from 'crypto-js';

export function encrypt(data) {
    const passphrase = 'secure-passphrase';
    return CryptoJS.AES.encrypt(data, passphrase).toString();
}
    
export function decrypt(data) {
    const passphrase = 'secure-passphrase';
    const bytes = CryptoJS.AES.decrypt(data, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
}
