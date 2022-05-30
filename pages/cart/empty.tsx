import React from "react";
import NextLink from "next/link";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";

const emptyPage = () => {
    return (
        <ShopLayout
            title="Carrito Vacio"
            pageDescription="No hay artículos en el carrito de compra"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
                sx={{ flexDirection: { sx: "columns", sm: "row" } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography>Su carrito esta vacio</Typography>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography variant="h4" color="secondary">
                                Regresar
                            </Typography>
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    );
};

export default emptyPage;
