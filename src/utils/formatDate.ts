const formatDate = (isoString: Date): string => {
  const date = new Date(isoString);
  return Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDate;
