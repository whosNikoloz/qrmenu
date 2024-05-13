import React from "react";
import { Image, Button, Card, CardHeader } from "@nextui-org/react";

interface Item {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface CategorySectionProps {
  title: string;
  lang: string;
  items: Item[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  items,
  lang,
}) => {
  return (
    <div className="p-2">
      <h1 className="ml-4 text-black dark:text-white font-bold text-xl">
        {title}
      </h1>
      {items.map((item, index) => (
        <div className="flex justify-between bg-transparent p-6" key={index}>
          <Image
            src={item.imageUrl}
            width={200}
            alt="Sample Image"
            className="rounded-lg"
          />

          <div className="ml-4  flex w-full flex-col justify-between">
            <h1 className="text-md font-bold text-black dark:text-white ">
              {item.title}
            </h1>
            <p className="text-xs/3 text-white/70">{item.description}</p>

            <div className="mt-auto flex items-center justify-between">
              <p className="mr-2 text-sm  text-black dark:text-white">
                {item.price}
                <span className="text-xs ml-1">
                  {lang === "en" ? "GEL" : "₾"}
                </span>
              </p>

              <Button size="sm" className="text-white text-xs bg-green-600">
                დამატება
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="mx-4 mt-4 grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <div className="max-w-[200px] rounded-3xl border bg-white text-center font-semibold shadow-lg">
              <Image
                src={item.imageUrl}
                width={200}
                alt="Sample Image"
                className="rounded-3xl"
              />
              <h1 className="text-lg text-gray-700">{item.title}</h1>
              <h3 className="text-sm text-gray-400">{item.description}</h3>
              <Button
                size="md"
                className="text-white text-sm mb-4 mt-4  rounded-3xl px-8 py-2 font-bold  bg-green-600"
              >
                დამატება
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
