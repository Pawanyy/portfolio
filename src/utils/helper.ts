const convertDateToMonYear = (dateStr: string, seperator: string = "-"): string | null => {
    if (!dateStr) return null;
    // Split the input date string
    const [day, month, year] = dateStr.split("/");

    // Create a Date object
    const date = new Date(`${year}-${month}-${day}`);

    // Array of month names
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // Get the month name and return it with the year
    return `${monthNames[date.getMonth()]}${seperator}${year}`;
}

const convertDateRange = (startDate: string, endDate: string): string => {
    const start = convertDateToMonYear(startDate, " ");
    const end = endDate ? convertDateToMonYear(endDate, " ") : "Present";

    return `${start} - ${end}`;
}

export {
    convertDateToMonYear,
    convertDateRange,
}