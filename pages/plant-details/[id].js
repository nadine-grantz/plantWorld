// Next.js Dynamic Routes

import { useRouter } from "next/router";
import plants from "../../lib/plants.json";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;
  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <div>Sorry, we do not found the plant</div>;
  }

  return (
    <div>
      <h1>{plant.title}</h1>
      <p>{plant.description}</p>
      <p>{plant.location}</p>
      <p>{plant.watering}</p>
      <p>{plant.care}</p>
      <img src={plant.picture} alt={plant.title} />
    </div>
  );
}
