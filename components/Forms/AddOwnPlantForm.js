export default function () {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description</label>
        <input type="description" id="description" name="description" />

        <label htmlFor="location">Location</label>
        <input type="location" id="location" name="location" />

        <label htmlFor="watering plants">watering plants</label>
        <input
          type="watering plants"
          id="watering plants"
          name="watering plants"
        />

        <label htmlFor="care">Care</label>
        <input type="care" id="care" name="care" />

        <label htmlFor="picture">Picture</label>
        <input type="picture" id="picture" name="picture" />
      </form>
    </>
  );
}
