// Next.js Dynamic Routes

import { useRouter } from "next/router";
import plants from "../../lib/plants.json";
import PlantDetails from "../../components/PlantDetails/plantDetails";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <div>Sorry, we do not found the plant</div>;
  }

  return (
    <>
      <PlantDetails plant={plant} />
    </>
  );
}
