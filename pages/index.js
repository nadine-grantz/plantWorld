import Link from "next/link";

export default function Homepage({ plants }) {
  return (
    <>
      <h2>Choose your Plants // index.js</h2>
      {/* <AddOwnPlants plants={plants} /> */}
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            {/* <p>{plant.description}</p>
            <p>{plant.location}</p>
            <p>{plant.watering}</p>
            <p>{plant.care}</p> */}
            <Link href={`/plant-details/${plant.id}`}>
              <img src={plant.picture} width={100} height={149} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
