import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ShopLayout } from "../components/layouts/ShopLayout";

const Custom404 = () => {
    return (
        <ShopLayout
            title="Página no encontrada"
            pageDescription="Página no encontrada"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
                sx={{ flexDirection: { sx: "columns", sm: "row" } }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    fontSize={60}
                    fontWeight={200}
                >
                    404 |
                </Typography>
                <Typography>&nbsp; Página no encontrada</Typography>
            </Box>
        </ShopLayout>
    );
};

export default Custom404;
