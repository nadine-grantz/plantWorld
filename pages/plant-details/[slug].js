// Next.js Dynamic Routes

import { useRouter } from "next/router";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Category Slug: {categorySlug}</p>
      <p>Page Number: {pageNumber}</p>
    </div>
  );
}

// import { plants } from "@/lib/data";
// import { useRouter } from "next/router";
// import Link from "next/link";

// export default function Plant() {
//   const router = useRouter();

//   if (!router.query) {
//     return null;
//   }
//   const { slug } = router.query;
//   const plant = plants.find((plant) => plant.slug === slug);

//   if (!plant) {
//     return null;
//   }

//   return (
//     <>
//       <div>
//         <button>
//           <link href="/">Back</link>
//         </button>
//         <h1>{plants.title}</h1>
//         <p>Description: {plants.description}</p>
//         <p>Location: {plants.location}</p>
//         <p>watering: {plants.watering}</p>
//         <p>Care: {plants.care}</p>
//         <Image src={plants.picture} />
//       </div>
//     </>
//   );
// }
