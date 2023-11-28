import { capitalizeFirstLetter } from "@/util";

interface TypeProps {
	type:
		| "normal"
		| "fire"
		| "water"
		| "electric"
		| "grass"
		| "ice"
		| "fighting"
		| "poison"
		| "ground"
		| "flying"
		| "psychic"
		| "bug"
		| "rock"
		| "ghost"
		| "dragon"
		| "dark"
		| "steel"
		| "fairy";
}

export default function Type({ type }: TypeProps) {
	return (
		<p
			style={{
				textShadow: "1px 1px rgba(0, 0, 0, 0.8)",
				boxShadow: "0 0 2px rgba(0, 0, 0, 0.4)",
			}}
			className={`px-4 py-2 rounded-full text-center text-white h-fit w-fit ${type}`}
		>
			{capitalizeFirstLetter(type)}
		</p>
	);
}
