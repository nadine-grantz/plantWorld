export default function PlantDetails({ plant }) {
  return (
    <>
      <div>
        <h1>{plant.title}</h1>
        <p>{plant.description}</p>
        <p>{plant.location}</p>
        <p>{plant.watering}</p>
        <p>{plant.care}</p>
        <img src={plant.picture} alt={plant.title} width={100} height={149} />
      </div>
    </>
  );
}
