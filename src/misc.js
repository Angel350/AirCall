export function standardDate(d) {
  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  let tempDate = new Date(d);
  return `${monthNames[tempDate.getMonth()]} , ${tempDate.getDate()} ${tempDate.getFullYear()}`;
}
export function standardTime(d) {
  let tempDate = new Date(d);
  return `${tempDate.getHours() > 12 ? tempDate.getHours() - 12 : tempDate.getHours()}:${tempDate.getMinutes()} ${tempDate.getHours() > 12 ? "AM" : "PM"}`;
}
export function updateType(cid) {
  fetch('https://aircall-job.herokuapp.com/activities/'+cid , {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        is_archived: true
      }
    )
  })
}
