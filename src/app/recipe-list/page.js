import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

  
async function fetchRecipe(){
    try{
        const res=await fetch("https://dummyjson.com/recipes");
        const data=await res.json();
        return data.recipes;
    }
    catch(e){
        console.log("error is::",e);
    }
}


export default async function RecipeListPage() {

    const recipes=await fetchRecipe();

  return (
    <div className="w-10/12 max-w-[1180px] mx-auto">
        <h1 className="mt-6 text-3xl font-bold">Recipes</h1>  
        <Button className="my-2">
            <Link href="/">Go To Home</Link>
        </Button>      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                recipes && recipes.length>0 ? 
                (
                    recipes.map((recipe,index)=>(
                        <Link key={index} href={`/recipe-list/${recipe.id}`}>
                            <Card className="hover:scale-105 transition-all duration-200">
                                <CardContent>
                                    <div className="flex flex-col gap-3">
                                        <img src={recipe.image} loading="lazy"/>
                                        <p className="text-xl font-bold">{recipe.name}</p>
                                        <div className="flex justify-between">
                                            <h1 className="text-lg">{recipe.rating}</h1>
                                            <h1 className="text-lg">{recipe.cuisine}</h1>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                ):null
            }
        </div>
    </div>
  )
}
