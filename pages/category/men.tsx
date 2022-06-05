import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";
import { useProducts } from "../../hooks/useProducts";
import { FullScreenLoading } from "../../components/ui";

const MenPage: NextPage = () => {
    const { products, isLoading } = useProducts("/products?gender=men");

    return (
        <ShopLayout
            title={"Shop - Home"}
            pageDescription={"Los mejores productos para ellos"}
        >
            <>
                <Typography variant="h1" component="h1">
                    Hombres
                </Typography>
                <Typography variant="h2" sx={{ mb: 1 }} component="h2">
                    Todos los Productos de hombres
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

export default MenPage;
