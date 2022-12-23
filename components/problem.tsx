
import { useState } from "react";

type ProblemProps = {
  problemHeader: string;
  description: string[];
  solution: string;
  point: number;
  example?: string[];
  id: string;
  problem?: string;
  exampleImage?: React.ReactNode,
  problemImage?: React.ReactNode,
}

export function Problem(props: ProblemProps) {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e: any) => {
    setIsCorrect(input == props.solution)
    e.preventDefault();
  }

  return (
    <div className="pb-[500px] flex flex-col space-y-2" id={props.id}>
      <div className="flex space-x-4 items-end ">
        <div className="text-4xl text-red-700 underline">{props.problemHeader}</div>
        <p className="text-gray-700 text-2xl font-bold">{props.point} point</p>
      </div>
      {props.description &&
        <div>
          <p className="font-bold">Eksempel</p>
          {props.description.map(x => (
            <div key={x}>{x}</div>
          ))}
        </div>}

      {props.example &&
        <div>
          <p className="font-bold">Eksempel</p>
          {props.example.map(x => (
            <li key={x}>{x}</li>
          ))}
        </div>}

      {props.problem &&
        <>
          <div className="font-bold">Opgaven:</div>
          <div>{props.problem}</div>
        </>
      }
      {props.exampleImage && <>
        <p className="font-bold">Eksempel Billede</p>
        {props.exampleImage}
      </>}


      {props.problemImage && <>
        <p className="font-bold">Problem Billede</p>
        {props.problemImage}
      </>}


      <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
        <input className="border rounded p-1" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="bg-green-600 px-2 py-1 rounded text-white">Svar</button>

        {!isCorrect && <p className="text-red-400">
          Forkert svar!</p>}
      </form>

    </div>
  )
}