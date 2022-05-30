import React from "react";
import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>No. Productos</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>5 items</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>55.25</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuestos</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
                <Typography>5.25</Typography>
            </Grid>

            <Grid item xs={6} sx={{ mt: 2 }}>
                <Typography variant="subtitle1">Impuestos</Typography>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{ mt: 2 }}
                display="flex"
                justifyContent="end"
            >
                <Typography variant="subtitle1">60.50</Typography>
            </Grid>
        </Grid>
    );
};
