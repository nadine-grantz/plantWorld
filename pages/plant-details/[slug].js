// Next.js Dynamic Routes

import { useRouter } from "next/router";
import PlantDetails from "../../components/PlantDetails/plantDetails";

export default function Details({ plants }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPlant = plants.find((plant) => plant.slug === slug);

  if (!currentPlant) {
    return <div>Sorry, we do not found the plant</div>;
  }

  return (
    <>
      <PlantDetails plant={currentPlant} />
    </>
  );
}
