// Next.js Dynamic Routes

import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Category Slug: {categorySlug}</p>
      <p>Page Number: {pageNumber}</p>
    </div>
  );
}
