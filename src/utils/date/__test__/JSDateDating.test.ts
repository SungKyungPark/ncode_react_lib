import {JSDateDating} from "../JSDateDating";
import {ENCTimezone} from "../enum/ENCTimezone";

describe('JSDateDating tests', () => {
    describe('format', () => {
        test('year', () => {
            const y1 = new Date().getFullYear().toString()

            const y2 = new JSDateDating().year().toString()
            expect(y1).toEqual(y2);

            const y3 = new JSDateDating().format("yyyy")
            expect(y1).toEqual(y3);

            const y4 = new JSDateDating().format("YYYY")
            expect(y1).toEqual(y4);
        });
    });
    describe('getStringWithTimezone', () =>{
        test('should be Europe/Rome', () =>{
            const localDate = new Date(); // 로컬시간
            const utcNow = localDate.getTime() + (localDate.getTimezoneOffset() * 60 * 1000);
            const timezoneOffset = ( localDate.getTimezoneOffset() / -60);
            let diffTime = 1;
            if(timezoneOffset !== 1 && timezoneOffset !== 2){
                return;
            }

            if(timezoneOffset === 2){
                diffTime = 2;
            }

            let romeTimeDiff = diffTime * 60 * 60 * 1000;
            const romeNow = new Date(utcNow + romeTimeDiff);

            const time1 = new JSDateDating().fromDate(romeNow).format('YYYY-MM-DD HH:mm:ss');  // js <-- 정답
            const time2 = new JSDateDating().getStringWithTimezone(ENCTimezone.EUROPE_ROME, 'YYYY-MM-DD HH:mm:ss');  // test

            expect(time1).toEqual(time2);
        })
    })
});