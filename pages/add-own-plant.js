// hier sollen alle pflanzen dargestellt werden und mit hilfe von einer bookmark hinzugefügt werden können
// zu my-plants. Es muss eine Suchfunktion geben in der man nach z.B. care, watering, sun etc filtern kann
import AddOwnPlant from "@/components/Forms/AddOwnPlant";

export default function AddOwnPlants({ plants, onAddNewPlant }) {
  return (
    <>
      <AddOwnPlant plants={plants} onAddNewPlant={onAddNewPlant} />
    </>
  );
}
