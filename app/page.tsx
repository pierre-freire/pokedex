import PokemonCard from "@/components/molecules/pokemonCard";

const types = [
	"normal",
	"fire",
	"water",
	"electric",
	"grass",
	"ice",
	"fighting",
	"poison",
	"ground",
	"flying",
	"psychic",
	"bug",
	"rock",
	"ghost",
	"dragon",
	"dark",
	"steel",
	"fairy",
];

export default function Home() {
	return (
		<main>
			<section className="grid grid-cols-4 gap-2">
				{types.map((elm, i) => {
					return <PokemonCard key={i} info={{ types: [elm] }} />;
				})}
			</section>
		</main>
	);
}
