const shortLocaleDate = (date) => {
    const isoDate = new Date(date);
    const shortDate = isoDate.toLocaleDateString();
    return shortDate;
}
export default shortLocaleDate;