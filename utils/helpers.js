module.exports = {
  format_date: (date) => {
    return date.toLocaleString(undefined, {
      weekday: 'short',
      day:    'numeric',
      month:  'numeric',
      year:   'numeric',
      hour:   '2-digit',
      minute: '2-digit',
  });
  },

  if_eq: (arg1, arg2) => {
    console.log(arg1, arg2);
    return arg1 == arg2;
  },

  if_or: (arg1, arg2) => {
    console.log(arg1, arg2);
    return arg1 || arg2;
  },
};
  