import moment from 'moment';

export const stringToDate = (raw_string) => {
    const dateFormat = new Date(raw_string)
    return dateFormat
}

export const dateToString = (raw_date) => {
    const stringFormat = moment(raw_date).format('YYYY.MM.DD');
    return String(stringFormat);

}

export const dateToStringId = (raw_date) => {
    const stringFormat = moment(raw_date).format('YYYYMMDD');
    return String(stringFormat);
}

export const checkAdminLogin = (isForlogin) => {
    if (localStorage.getItem("isSMRAdminLogin") === null || localStorage.getItem("isSMRAdminLogin") === false) {
        if (!isForlogin) {
            alert("잘못된 접근입니다.");
        }
        return false;
    }
    return true;
}