import { Button } from "@/components/ui/button";
import Link from "next/link";

async function fetchDetails(id){
    try{
        const res=await fetch(`https://dummyjson.com/recipes/${id}`);
        const data=await res.json();
        return data;
    }
    catch(e){
        console.log("error while fetching recipe Details::",e);
    }
}

export default async function RecipeDetails({params}) {

    const recipeDetails=await fetchDetails(params.recipedetails);

  return (
    <div className="w-10/12 max-w-[1180px] mx-auto relative">
        <Button className="my-6">
            <Link href={"/recipe-list"}>Go to Recipe List</Link>
        </Button>
        <div className="flex flex-col-reverse lg:flex-row gap-12 pb-[50px]">
            <img src={recipeDetails.image} className="w-full lg:w-1/2"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{recipeDetails.name}</h1>
                <p className="text-xl font-medium">{recipeDetails.mealType[0]}</p>
                <p className="text-xl font-medium">{recipeDetails.cuisine}</p>
                <div className="">
                    <h1 className="text-2xl font-extrabold">Ingredients</h1>
                    <ul className="list-disc pl-4 mt-3">
                        {
                            recipeDetails.ingredients.map((e,index)=>(
                                <li className="text-base font-medium" key={index}>{e}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
