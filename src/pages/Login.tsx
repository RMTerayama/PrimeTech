import { Box, Button, TextField, Typography, Link, InputAdornment, IconButton, Card, CardContent } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Box display="flex" height="100vh" width="100vw">
      {/* Lado esquerdo com imagem */}
      <Box
        width="50vw"
        height="100vh"
        sx={{
          backgroundImage: 'url("/login-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Lado direito com formulário */}
      <Box
        width="50vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: '#fff' }}
        p={2}
      >
        <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3 }}>
          <CardContent>
            <Box textAlign="center" mb={3}>
              <img src="/logo.png" alt="Logo PrimeTech" width={120} />
              <Typography variant="subtitle2" fontWeight="bold">
                DESENVOLVENDO SOLUÇÕES, TRANSFORMANDO NEGÓCIOS
              </Typography>
            </Box>

            <Typography variant="h6" mb={2}>
              Acessar
            </Typography>

            <TextField
              label="Usuário"
              fullWidth
              margin="normal"
              placeholder="usuario.exemplo"
            />

            <TextField
              label="Senha"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              placeholder="Insira a sua senha"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box textAlign="right" mb={2}>
              <Link href="#" underline="hover" fontSize={14}>
                Esqueceu Sua Senha ?
              </Link>
            </Box>

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mb: 1 }}
            >
              Criar Conta
            </Button>

            <Button variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
