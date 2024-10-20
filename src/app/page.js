import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center my-3 font-bold">Welcome to recipe app</h1>
      <Button variant="outline">
        <Link href={"/recipe-list"}>Explore More</Link>
      </Button>
    </div>
  );
}
