import type { NextPage } from "next";
import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
    return (
        <ShopLayout title={"Shop - Home"} pageDescription={"LA mejor Tienda"}>
            <>
                <Typography variant="h1" component="h1">
                    Home
                </Typography>
                <Typography variant="h2" sx={{ mb: 1 }} component="h2">
                    Todos los Productos
                </Typography>

                <ProductList products={initialData.products as any} />
            </>
        </ShopLayout>
    );
};

export default Home;
