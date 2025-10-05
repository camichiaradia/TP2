import React from 'react';

class ErrorBoundary extends React.Component {
  // 1. Inicializa el estado para rastrear si un error ha sido atrapado.
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // 2. Método estático que se llama después de que un componente descendiente ha lanzado un error.
  //    Este método actualiza el estado para que el renderizado muestre la UI alternativa (fallback).
  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el próximo renderizado muestre la UI de fallback.
    return { hasError: true };
  }

  // 3. Método llamado después de que un descendiente lanza un error.
  //    Se usa para registrar la información del error en un servicio de registro (como Sentry o LogRocket).
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary capturó un error:", error, errorInfo);
    // Aquí es donde típicamente enviarías la información a un servicio de registro.
  }

  render() {
    if (this.state.hasError) {
      // 4. Muestra la UI alternativa cuando hay un error.
      return (
        <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#fee' }}>
          <h1>¡Ups! Algo salió mal. 😥</h1>
          <p>Lamentamos las molestias. Por favor, inténtalo de nuevo más tarde.</p>
        </div>
      );
    }

    // 5. Renderiza los componentes hijos normalmente si no hay errores.
    return this.props.children; 
  }
}

export default ErrorBoundary;