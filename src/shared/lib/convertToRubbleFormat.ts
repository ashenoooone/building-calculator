/**
 * конвертирует число в рубли
 * @param number - число, которое надо конвертировать в рубли
 */
export function convertToRubbleFormat(number: number | string) {
	const numberFormat = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB'
	});
	return numberFormat.format(+number);
}
