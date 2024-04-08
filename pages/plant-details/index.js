import Link from "next/link";
import plants from "../../lib/plants.json";

export default function PlantList() {
  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <Link href={`/plant-details/${plant.id}`}>
              <a>{plant.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
