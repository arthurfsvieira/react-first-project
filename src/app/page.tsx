import { Card } from "@/components/Card";
import Square, { Circle } from "@/components/Geometrics";
import { Person } from "@/components/Person";


function Page (){
  return (
    <div>
      <h1 className="text-bold text-3xl">Hello, World!</h1>
      <h1 className="italic">This is a React project with Next.</h1>

      <Card>
        <>
          <h3 className="text-3xl font-bold text-center italic">"Essa fera aí, bicho!"</h3>
          <p className="text-right text-sm">-Fausto Silva</p>
        </>
      </Card>

      <img src="https://upload.wikimedia.org/wikipedia/en/9/91/The_Strokes_-_Comedown_Machine.jpg" alt="" />

    </div>
  );
}

export default Page;