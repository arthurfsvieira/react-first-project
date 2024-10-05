import Square, { Circle } from "@/components/Geometrics";
import { Person } from "@/components/Person";


function Page (){
  return (
    <div>
      <h1 className="text-bold text-3xl">Hello, World!</h1>
      <h1 className="italic">This is a React project with Next.</h1>

      <Person />

    </div>
  );
}

export default Page;