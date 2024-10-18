import { Card } from "@/components/Card";
import Square, { Circle } from "@/components/Geometrics";
import { Person } from "@/components/Person";


function Page (){
  return (
    <div>
      <h1 className="text-bold text-3xl">Hello, World!</h1>
      <h1 className="italic">This is a React project with Next.</h1>

      <Card phrase = "Essa fera aí, bicho!" author = "Faustop" />

      <img className="border-4 border-dotted border-yellow-200" src="https://upload.wikimedia.org/wikipedia/en/9/91/The_Strokes_-_Comedown_Machine.jpg" alt="" />

    </div>
  );
}

export default Page;