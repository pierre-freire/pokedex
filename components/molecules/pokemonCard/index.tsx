import Image from "next/image";
import PokemonName from "@/components/atoms/pokemonName";
import Type from "@/components/atoms/type";
import styles from "./index.module.css";

interface PokemonCardProps {
	info: {
		types: Array<string>;
	};
}

export default function PokemonCard({ info }: PokemonCardProps) {
	return (
		<div className={`grid grid-cols-2 p-2 relative`}>
			<div className={`${styles.background} ${info.types[0]}`} />
			<PokemonName />
			<div className="flex flex-col justify-end items-start gap-1">
				{info.types.map((elm, i) => (
					<Type type={elm} key={i} />
				))}
			</div>
			<Image
				src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"}
				alt="pokemon"
				width={200}
				height={200}
			/>
		</div>
	);
}
