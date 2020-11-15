import moment from "moment";

const dateFormat = "DD.MM.YYYY";

export function sortByDate(array, ascending = true) {
  return array.sort((a, b) => {
    return (
      moment(ascending ? a.date : b.date, dateFormat).toDate() -
      moment(ascending ? b.date : a.date, dateFormat).toDate()
    );
  });
}
