
import { useState } from "react";

type ProblemProps = {
  problemHeader: string;
  description: string;
  solution: string;
  point: number;
  example?: string[];
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
    <div className="pb-[600px] flex flex-col space-y-2">
      <div className="text-4xl text-red-700">{props.problemHeader}</div>
      <p>{props.point} point</p>
      <p>{props.description}</p>

      {props.example &&
        <div>
          <p className="font-bold">Eksempel</p>
          {props.example.map(x => (
            <li key={x}>{x}</li>
          ))}
        </div>}

      {props.problem &&
        <>
          <div className="font-bold">Input:</div>
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


      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input className="border rounded p-1" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="bg-green-600 px-2 py-1 rounded text-white">Svar</button>

        {!isCorrect && <p className="text-red-400">
          Forkert svar!</p>}
      </form>

    </div>
  )
}