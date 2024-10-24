"use client";
import { fetchProductDetails } from "@/actions";
import AddToCartButton from "@/components/add-to-cart-button";

const PrdouctDetails = async ({ params }) => {
  const getProductDetails = await fetchProductDetails(params.details);
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 w-full lg:sticky bg-gray-100 top-0 text-center p-8">
            <img
              className="object-cover w-4/5 rounded"
              src={getProductDetails.data.thumbnail}
              alt={getProductDetails.data.title}
            />
            <hr className="border-gray-600 border-2 my-6" />
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {getProductDetails.data.images.map((imageItem) => (
                <img
                  key={imageItem}
                  className="w-24 cursor-pointer"
                  src={imageItem}
                  alt={imageItem}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800">
              {getProductDetails.data.title}
            </h2>
            <p className="mt-5 text-gray-800 text-xl">
              ${getProductDetails.data.price}
            </p>
            <h3>{getProductDetails.data.description}</h3>
            <AddToCartButton productItem={getProductDetails.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdouctDetails;
