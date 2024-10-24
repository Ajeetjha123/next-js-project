"use server";

export async function fetchAllPOrducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });
    const data = await result.json();
    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "some error occured please try again",
    };
  }
}
export async function fetchProductDetails(getCurrentID) {
  try {
    const result = await fetch(
      `https://dummyjson.com/products/${getCurrentID}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await result.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "some error occured please try again",
    };
  }
}
