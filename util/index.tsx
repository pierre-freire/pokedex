export function capitalizeFirstLetter(params: string) {
	const firstLetter = params.charAt(0).toUpperCase();
	const stringToConcat = params.slice(1);

	return firstLetter.concat(stringToConcat);
}
