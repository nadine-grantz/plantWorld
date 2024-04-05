import plants from "../../lib/plants.json";
import Link from "next/link";

export default function PlantList({ plants }) {
  return (
    <>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            {/* <p>{plant.description}</p>
            <p>{plant.location}</p>
            <p>{plant.watering}</p>
            <p>{plant.care}</p> */}
            <Link href="/my-plants">
              <img src={plant.picture} width={100} height={149} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
