import React, { FC } from "react";
import NextLink from "next/link";
import { initialData } from "../../database/products";
import {
    Box,
    CardActionArea,
    CardMedia,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import { ItemCounter } from "../ui";
import { Button } from "@mui/material";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

interface Props {
    editable?: boolean;
}

export const CartList: FC<Props> = ({ editable }) => {
    return (
        <>
            {productsInCart.map((product) => (
                <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
                    <Grid item xs={3}>
                        {/* TODO: llevar a la pagina del producto */}
                        <NextLink href="/product/slug" passHref>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        image={`/products/${product.images[0]}`}
                                        component="img"
                                        sx={{ borderRadius: "5px" }}
                                    ></CardMedia>
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body1">
                                {product.title}
                            </Typography>
                            <Typography variant="body1">Talla:</Typography>
                            {editable ? (
                                <ItemCounter />
                            ) : (
                                <Typography variant="h5">3 items</Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Typography variant="subtitle1">
                            $ {product.price}
                        </Typography>
                        {editable && (
                            <Button variant="text" color="secondary">
                                Remover
                            </Button>
                        )}
                    </Grid>
                </Grid>
            ))}
        </>
    );
};