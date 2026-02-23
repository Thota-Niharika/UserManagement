/**
 * Checks if a given date is a weekend (Saturday or Sunday)
 */
export const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
};

/**
 * Calculates a date after adding a specific number of working days
 */
export const addWorkingDays = (startDate, days) => {
    const date = new Date(startDate);
    let addedDays = 0;
    while (addedDays < days) {
        date.setDate(date.getDate() + 1);
        if (!isWeekend(date)) {
            addedDays++;
        }
    }
    return date;
};

/**
 * Checks if a certain number of working days have passed since the start date
 */
export const hasWorkingDaysPassed = (startDate, requiredDays) => {
    if (!startDate) return false;

    const start = new Date(startDate);
    const today = new Date();

    if (today < start) return false;

    let workingDaysCount = 0;
    const current = new Date(start);

    // Increment to the next day to start counting
    current.setDate(current.getDate() + 1);

    while (current <= today) {
        if (!isWeekend(current)) {
            workingDaysCount++;
        }
        current.setDate(current.getDate() + 1);
    }

    return workingDaysCount >= requiredDays;
};
