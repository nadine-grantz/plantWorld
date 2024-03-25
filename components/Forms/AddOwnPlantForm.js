import initialPlantsExamples from "../lib/plants.js";

export default function PlantList() {
  return (
    <div>
      <h1>Pflanzen Liste</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
