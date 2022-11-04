import dayjs from 'dayjs';
export default function getRemainingTimeUntilMsTimeStamp(timeStampMs){
const timestampDayjs = dayjs(timeStampMs);
const nowDayjs = dayjs();
return{
    seconds : getRemainingSeconds(nowDayjs,timeStampMs),
    minutes : getRemainingMinutes(nowDayjs,timeStampMs),
    hours : getRemainingHours(nowDayjs,timeStampMs)
} ;

}

function getRemainingSeconds(nowDayjs, timestampDayjs){
 const seconds = timestampDayjs.diff(nowDayjs,'seconds') % 60;
 return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayjs){
    const minutes = timestampDayjs.diff(nowDayjs,'minutes') % 60;
    return minutes;
}

function getRemainingHours(nowDayjs, timestampDayjs){
    const hours = timestampDayjs.diff(nowDayjs,'hours') % 24;
    return hours;
}