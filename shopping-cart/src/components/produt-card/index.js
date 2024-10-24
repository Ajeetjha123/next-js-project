"use client";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }) => {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
          <img
            className="h-full w-full object-cover object-top"
            src={item?.thumbnail}
            alt={item?.title}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-lg font-bold text-gray-900">
            {item.title}
          </CardTitle>
          <div className="mt-4 flex justify-between items-center flex-wrap">
            <p className="text-lg font-extrabold text-gray-800">
              ${item.price}
            </p>
            <div>
              <Button onClick={() => router.push(`/${item.id}`)}>
                Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
