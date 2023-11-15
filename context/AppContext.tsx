import React, { createContext } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

export const AppContext = createContext({} as AppContextData);

interface IbodyProduct {
  name: string;
  price: string;
  photo: string;
  isLoading: boolean;
  isError: boolean;
}

export function useProduct() {
  return React.useContext(AppContext);
}

export function AppProvider({ children }: any) {
  const queryClient = new QueryClient();

  const fetchProducts = async (): Promise<IbodyProduct[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products?page=1&rows=20&sortBy=id&orderBy=DESC`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.products;
  };

  const { data: products = [], isLoading, isError } = useQuery<IbodyProduct[]>("products", fetchProducts);

  const provided = {
    products,
	  isLoading,
    isError,
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={provided}>{children}</AppContext.Provider>
      </QueryClientProvider>
    </>
  );
}

type AppContextData = {
  products: IbodyProduct[];
  isLoading: any
  isError: any
};
