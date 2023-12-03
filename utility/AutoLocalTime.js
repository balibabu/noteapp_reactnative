export default function convertUtcToLocal(utcTimeString) {
  const utcDate = new Date(utcTimeString);

  // Format the local date
  const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
  };

  const formattedLocalDate = utcDate.toLocaleString('en-US', options);
  return formattedLocalDate;
}
