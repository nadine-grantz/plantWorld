export default function PlantDetails({ plant }) {
  const {
    title,
    description,
    location,
    watering,
    care,
    picture,
    place,
    level,
  } = plant;

  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>{description}</li>
        <li>{location}</li>
        <li>{watering}</li>
        <li>{care}</li>
        <li>{place}</li>
        <li>{level}</li>
        <img src={picture} alt={title} width={100} height={149} />
      </ul>
    </>
  );
}
