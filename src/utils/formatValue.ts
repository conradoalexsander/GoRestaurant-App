const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const unformatValue = (value: string): number => {
  const numberValue = parseFloat(value.replace('R$', '').replace(',', ''));

  return numberValue;
};

export default formatValue;
