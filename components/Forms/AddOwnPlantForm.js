import initialPlantsExamples from "../lib/plants.js";

export default function PlantList() {
  return (
    <>
      <h1>Plant List</h1>
      <ul>
        {initialPlantsExamples.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.title}</h2>
            <p>{plant.description}</p>
            <p>{plant.location}</p>
            <p>{plant.watering}</p>
            <p>{plant.care}</p>
            <p>{plant.picture}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
