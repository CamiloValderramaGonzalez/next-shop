import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks/useProducts";
import { FullScreenLoading } from "../components/ui";

const HomePage: NextPage = () => {
    const { products, isLoading } = useProducts("/products");

    return (
        <ShopLayout title={"Shop - Home"} pageDescription={"La mejor Tienda"}>
            <>
                <Typography variant="h1" component="h1">
                    Home
                </Typography>
                <Typography variant="h2" sx={{ mb: 1 }} component="h2">
                    Todos los Productos
                </Typography>

                {isLoading ? (
                    <FullScreenLoading />
                ) : (
                    <ProductList products={products} />
                )}
            </>
        </ShopLayout>
    );
};

export default HomePage;
