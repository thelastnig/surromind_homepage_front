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