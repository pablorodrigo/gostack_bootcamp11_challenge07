const formatDate = (created_at: Date): string => {
  const date = new Date(created_at);

  return new Intl.DateTimeFormat('en-US').format(date);
};

export default formatDate;
