const timeDisplayer = (secs: number) => {
  var sec_num = parseInt(secs.toString(), 10);
  var formattedHours = Math.floor(sec_num / 3600);
  var formattedMinutes = Math.floor(sec_num / 60) % 60;
  var formattedSeconds = sec_num % 60;

  return [formattedHours, formattedMinutes, formattedSeconds]
    .map(v => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

const secondsConverter = (hours: string, minutes: string, seconds: string) => {
  const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
  return totalSeconds;
};

export {timeDisplayer, secondsConverter};
