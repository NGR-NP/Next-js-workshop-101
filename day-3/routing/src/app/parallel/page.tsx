import { wait } from "../_lib/wait";

export default async function ParallelPage() {
  await wait(5);
//   throw new Error("parallel page errorll");
  return <div>Parallel page </div>;
}
 