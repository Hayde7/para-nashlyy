# Proyecto San Valentín para Nash

Este proyecto es una página web interactiva creada especialmente para Nash como regalo de San Valentín.

## Características Implementadas

1.  **Pantalla de Bienvenida**:
    *   Mensaje: "¡Feliz San Valentín Nash!"
    *   GIF de un gato enamorado.
    *   **Efecto de Fondo**: Corazones flotantes que suben suavemente por la pantalla.
    *   Botón "Siguiente".

2.  **Sección de Recuerditos**:
    *   Galería de fotos (placeholders para que el usuario suba sus fotos).
    *   Diseño tipo polaroid.

3.  **Sección Musical**:
    *   Reproductor de música visual (placeholder).
    *   Espacio para dedicatoria sobre el significado de la canción.

4.  **Carta Sorpresa**:
    *   Animación de sobre de carta.
    *   Interacción "¿Quieres abrirla?" con un gato curioso.
    *   **Botón Escurridizo**: El botón "No" se escapa cuando intentas tocarlo.

5.  **La Carta**:
    *   Espacio para el texto de la carta personal.
    *   Diseño elegante y romántico.

6.  **Final Mágico (Poema y Mariposas)**:
    *   **Fondo**: Negro elegante.
    *   **Luna Gigante**: Una única luna blanca y brillante creada con CSS (garantizado que es una sola).
    *   **Cielo Animado**: Estrellas parpadeantes y cometas pasando.
    *   **Mariposas Rosas**: Mariposas animadas volando por la pantalla.
    *   **Flor Gigante**: La flor animada que crece y se abre.
    *   **Poema**: El texto especial aparece letra por letra al lado de la flor.

## Tecnologías Utilizadas

*   **React**: Framework principal.
*   **Tailwind CSS**: Estilos y diseño responsivo.
*   **Framer Motion**: Animaciones complejas (flor, mariposas, transiciones).
*   **Lucide React**: Iconos vectoriales.

## Cómo Personalizar

1.  **Fotos**: Reemplaza los iconos de imagen en `src/components/Valentine.tsx` (Step 2) con las fotos reales.
2.  **Música**: Agrega un elemento `<audio>` o un enlace a Spotify en `Step3`.
3.  **Texto de la Carta**: Edita el contenido en `Step6` dentro de `src/components/Valentine.tsx`.
4.  **Poema Final**: Modifica la variable `fullText` en `Step7` si deseas cambiar el poema.

## Comandos de Desarrollo

*   `npm run dev`: Iniciar servidor de desarrollo.
*   `npm run build`: Construir para producción.
