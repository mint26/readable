import * as moment from "moment";
class DateService {
  formatDate = timestamp => {
    let date = new moment(timestamp);
    return date.format("DD-MMM-YYYY HH:mm:ss");
  };
}

export default new DateService();
