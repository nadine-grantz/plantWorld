import plants from "../../lib/plants.json";

export default function PlantList({ plants }) {
  return (
    <>
      <h1>Plant List</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <p>{plant.description}</p>
            <p>{plant.location}</p>
            <p>{plant.watering}</p>
            <p>{plant.care}</p>
            <img src={plant.picture} width={100} height={149} />
          </li>
        ))}
      </ul>
    </>
  );
}
