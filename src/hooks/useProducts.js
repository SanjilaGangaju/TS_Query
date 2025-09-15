import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const api = "https://fakestoreapi.com";

// 🔹 Fetch all products
export const useProducts = () => {
  async function fetchProducts() {
    const res = await fetch(`${api}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  }

  // ✅ return useQuery, not inside fetchProducts
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5000,
    gcTime: 10000,
  });
};

// 🔹 Fetch one product by ID
export const useProductDetail = (id) => {
  async function fetchDetail() {
    const res = await fetch(`${api}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  }

  return useQuery({
    queryKey: ["product", id],
    queryFn: fetchDetail,
    enabled: !!id, // only fetch if id is truthy
  });
};

// 🔹 Add product mutation
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, price }) => {
      const res = await fetch(`${api}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price }), // ✅ fixed
      });

      if (!res.ok) throw new Error("Failed to add product");
      return res.json();
    },
    onSuccess: () => {
      // ✅ Refresh product list after adding
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
