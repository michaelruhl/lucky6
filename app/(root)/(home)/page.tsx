"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, {useState} from "react";

const Home = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState([])

  const generateNumbers = () => {
    let numbers: any = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(numbers);
  };

  const handleClick = () => {
    const numbers: any = generateNumbers();
    setGeneratedNumbers(numbers);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-blue-500">
      <img className="flex self-center rounded-full w-[50px] h-[50px]" src="/4leaf.png">
      </img>
      <span className="flex self-center">
      Random 6 number generator 1-49
        </span>
      <Input className="flex self-center w-[180px]" value={generatedNumbers.join(", ")} readOnly />
      <Button className="bg-blue-600" onClick={handleClick}>Click me</Button>
    </section>
  );
};

export default Home;
