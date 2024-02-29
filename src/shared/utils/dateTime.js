export const formatTime = inputTime => {
  const inputDate = new Date(inputTime);
  const options = {hour: '2-digit', minute: '2-digit', hour12: true};
  const formattedTime = inputDate.toLocaleTimeString('en-US', options);
  return formattedTime;
};
