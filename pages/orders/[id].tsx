import React from "react";
import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Link,
    Typography,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import {
    CreditCardOffOutlined,
    CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout title={"Orden 123465"} pageDescription={"Orden 123456"}>
            <>
                <Typography variant="h1" component="h1">
                    Orden: 123456
                </Typography>
                <Chip
                    sx={{ my: 2 }}
                    label="Pendiente de pago"
                    variant="outlined"
                    color="error"
                    icon={<CreditCardOffOutlined />}
                />
                <Chip
                    sx={{ my: 2 }}
                    label="Orden ya fue pagada"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                />
                <Grid container>
                    <Grid item xs={12} sm={7}>
                        <CartList />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Card className="summary-card">
                            <CardContent>
                                <Typography variant="h2">
                                    Resumen (3 productos)
                                </Typography>

                                <Divider sx={{ my: 1 }} />

                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="subtitle1">
                                        Dirección de entrega
                                    </Typography>
                                    <NextLink href="/checkout/address" passHref>
                                        <Link underline="always">Editar</Link>
                                    </NextLink>
                                </Box>
                                <Typography>Camilo Valderrama</Typography>
                                <Typography>
                                    1234 Main Street, City, State 12345
                                </Typography>
                                <Typography>Buenos Aires, Argentina</Typography>
                                <Typography>+54 6 22 4561 2365</Typography>

                                <Divider sx={{ my: 1 }} />

                                <Box display="flex" justifyContent="end">
                                    <NextLink href="/cart" passHref>
                                        <Link underline="always">Editar</Link>
                                    </NextLink>
                                </Box>
                                <OrderSummary />
                                <Box sx={{ mt: 3 }}>
                                    <Button
                                        color="secondary"
                                        className="Circular-btn"
                                        fullWidth
                                    >
                                        Pagar
                                    </Button>
                                    <Chip
                                        sx={{ my: 2 }}
                                        label="Orden ya fue pagada"
                                        variant="outlined"
                                        color="success"
                                        icon={<CreditScoreOutlined />}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </>
        </ShopLayout>
    );
};

export default OrderPage;
