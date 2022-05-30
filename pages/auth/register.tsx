import NextLink from "next/link";
import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../../components/layouts";

const RegisterPage = () => {
    return (
        <AuthLayout title={"Ingresar"}>
            <Box sx={{ width: 350, padding: "10px 20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" component="h1">
                            Crear Cuenta
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre Completo"
                            variant="filled"
                            fullWidth
                        >
                            Nombre Completo
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Correo" variant="filled" fullWidth>
                            Correo
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            variant="filled"
                            fullWidth
                            type="password"
                        >
                            Password
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            color="secondary"
                            className="circular-btn"
                            size="large"
                            fullWidth
                        >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="end">
                        <NextLink href="/auth/login" passHref>
                            <Link underline="always">
                                ¿Ya tienes una cuenta?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};

export default RegisterPage;
