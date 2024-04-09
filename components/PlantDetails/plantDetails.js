export default function PlantDetails({ plants }) {
  return (
    <>
      <h1>{plant.title}</h1>
      <ul>
        <li>{plant.description}</li>
        <li>{plant.location}</li>
        <li>{plant.watering}</li>
        <li>{plant.care}</li>
        <img src={plant.picture} alt={plant.title} width={100} height={149} />
      </ul>
    </>
  );
}
