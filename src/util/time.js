/**
 * @file time.js
 * @description 时间函数，包含项目内 时间转换的一系列函数
 */

// 一些常量
export const oneMin = 60 * 1000;
export const oneHour = 60 * 60 * 1000;
export const oneDay = 24 * 60 * 60 * 1000;

// YY-MM-DD HH:MM
export function getFullTime(stamp) {
    if (!stamp) {
        return '-';
    }

    const target = new Date(stamp);
    const year = target.getFullYear();
    const month = zeroize(target.getMonth() + 1);
    const day = zeroize(target.getDate());
    const hour = zeroize(target.getHours());
    const min = zeroize(target.getMinutes());

    return `${year}-${month}-${day}   ${hour}:${min}`;

}

// YY年MM月DD日, 支持分支符
export function getTime(stamp, separator) {
    if (!stamp) {
        return '-';
    }
    const target = new Date(stamp);
    const year = `${target.getFullYear()}${separator ? separator : '年'}`;
    const month = separator
                    ? `${zeroize(target.getMonth() + 1)}${separator}`
                    : `${target.getMonth() + 1}月`;
    const day = separator
                    ? `${zeroize(target.getDate())}`
                    : `${target.getDate()}日`;

    return `${year}${month}${day}`;
}

// 今天/昨天/前天
export function getDayTime(stamp) {
    if (!stamp) {
        return '';
    }
    const target = new Date(stamp);
    // 今天24点时间戳
    const endStamp = new Date(new Date(new Date().toLocaleDateString()).getTime() + oneDay).getTime();
    const timeDiff = endStamp - target.getTime();

    if (timeDiff < 0) {
        return '';
    }
    if (timeDiff < oneDay) {
        return '今天';
    }
    if (timeDiff < 2 * oneDay) {
        return '昨天';
    }
    if (timeDiff < 3 * oneDay) {
        return '前天';
    }

    return '';
}

//  刚刚/几分钟前/几小时前/HH:MM
export function getHourTime(stamp) {
    if (!stamp) {
        return '-';
    }
    const target = new Date(stamp);

    if (getDayTime(stamp) === '今天') {
        const now = new Date();
        const timeDiff = now.getTime() - target.getTime();

        if (timeDiff < 0) {
            return '';
        }
        if (timeDiff < oneMin) {
            return '刚刚';
        }
        if (timeDiff < oneHour) {
            return `${Math.floor(timeDiff / oneMin)}分钟前`;
        }
        return `${Math.floor(timeDiff / oneHour)}小时前`;
    }

    return getFullTime(stamp);
    // return `${zeroize(target.getHours())} - ${zeroize(target.getMinutes())}`;
}

function zeroize(value) {
    return value < 10
        ? '0' + value
        : value;
}

const api = {
    oneMin,
    oneHour,
    oneDay,
    getTime,
    getFullTime,
    getHourTime,
    getDayTime
}

export default api;