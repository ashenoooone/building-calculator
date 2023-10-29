export type Mods = Record<string, string | boolean>;

/**
 * функция необходимая для удобной работы с классами, принимает три параметра:
 * @param cls - основной класс для элемента
 * @param mods - модификаторы для элемента, {[cls.mod]:true|false|string}
 * @param additional - дополнительные классы для элемента ['class','class2']
 */
export function classNames(
	cls: string,
	mods: Mods = {},
	additional: (string | undefined)[] = []
) {
	return [
		cls,
		...Object.entries(mods)
			.filter(([_, flag]) => Boolean(flag))
			.map(([className]) => className),
		...additional
	].join(' ');
}
