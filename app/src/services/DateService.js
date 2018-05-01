import * as moment from "moment";

class DateService {
  formatDate = timestamp => {
    let date = new moment(timestamp);
    return date.format("DD-MMM-YYYY HH:mm:ss");
  };

  getDate = timestamp => {
    return new moment(timestamp);
  };

  getCurrentDateTimestamp = () => {
    return new Date().getTime();
  };
}

export default new DateService();
