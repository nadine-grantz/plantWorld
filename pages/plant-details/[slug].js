// Next.js Dynamic Routes

import { useRouter } from "next/router";
// import plants from "../../lib/plants.json";
import PlantDetails from "../../components/PlantDetails/plantDetails";

export default function Details({ plants }) {
  const router = useRouter();
  const { slug } = router.query;
  const plant = plants.find((plant) => plant.title === slug);

  if (!plants) {
    return <div>Sorry, we do not found the plant</div>;
  }

  return (
    <>
      <PlantDetails plants={plant} />
    </>
  );
}
