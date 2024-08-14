export function getInitials (value) {
    const arrayOfValue = value?.split(" ")?.slice(0, 2);

    const result = arrayOfValue?.reduce((accumulator, currentVal) => {
        return accumulator+currentVal?.[0];
    }, '');
    
    return result.toUpperCase();
}



export function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}

export function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    return formattedTime;
}