module.exports = {
  binaryHour: function binaryHour(militaryDateTime) {
    // assuming a 24-hour clock
    const HOUR_BINARY = [16, 8, 4, 2, 1];
    let remainder = new Date(militaryDateTime).getHours();

    return HOUR_BINARY.map(function(bin) {
      let binaryRep = Math.floor(remainder / bin);
      remainder = remainder % bin;
      return binaryRep;
    });
  },

  binaryMinute: function binaryMinute(militaryDateTime) {
    const MINUTE_BINARY = [32, 16, 8, 4, 2, 1];
    let remainder = new Date(militaryDateTime).getMinutes();

    return MINUTE_BINARY.map(function(bin) {
      let binaryRep = Math.floor(remainder / bin);
      remainder = remainder % bin;
      return binaryRep;
    });
  },

  binaryDay: function binaryDay(militaryDateTime) {
    const DAY_BINARY = [16, 8, 4, 2, 1];
    let remainder = new Date(militaryDateTime).getUTCDate();

    return DAY_BINARY.map(function(bin) {
      let binaryRep = Math.floor(remainder / bin);
      remainder = remainder % bin;
      return binaryRep;
    });
  },

  binarySecond: function binarySecond(militaryDateTime) {
    const SECOND_BINARY = [32, 16, 8, 4, 2, 1];
    let remainder = new Date(militaryDateTime).getSeconds();

    return SECOND_BINARY.map(function(bin) {
      let binaryRep = Math.floor(remainder / bin);
      remainder = remainder % bin;
      return binaryRep;
    });
  }
};
