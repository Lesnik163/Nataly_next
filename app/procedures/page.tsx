import { proceduresData } from "@/routes";

type Procedure = {
  id: number,
  title: string,
  description: string,
  src: string[]
}
const Procedures = async () => {
  const procedures: Procedure[] = await proceduresData;
  return (
    <div>
      {procedures.map(procedure => (
        <div key={procedure.id}>
          <h1>{procedure.title}</h1>
          <span>{procedure.description}</span>
        </div>
      ))}
    </div>
  )
};
export default Procedures;