import { photosData } from "@/routes";

type Photo = {
  id: number,
  src: string
}
const Photos = async () => {
  const photos: Photo[] = await photosData;
  return (
    <div>
      {photos?.map(photo => (
        <div key={photo.id}>{photo.id}</div>
      ))}
    </div>
  )
};

export default Photos;