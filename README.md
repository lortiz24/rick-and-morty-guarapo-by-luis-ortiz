# Rick and Morty Guarapo

## Descripción

Este proyecto es una aplicación React que consume la API GraphQL de Rick and Morty. Aquí detallo las decisiones técnicas y patrones que apliqué durante el desarrollo:

## Decisiones y patrones implementados

1. **Uso de GraphQL**
   - Decidí utilizar GraphQL porque cada personaje tiene muchos metadatos, pero en la lista con scroll infinito solo necesito algunos campos. Así, ahorro en la cantidad de datos solicitados y optimizo el rendimiento de la app.

2. **Patrón Compound Components**
   - Apliqué el patrón Compound Components en la visualización de la información del personaje. Esto mejora la extensibilidad, ya que permite agregar fácilmente más metadatos o campos visuales en el futuro sin modificar la estructura principal del componente.

3. **Patrón Presentational & Container**
   - Separé la lógica de presentación y la lógica de negocio usando el patrón Presentational & Container, especialmente en los componentes `CharacterList` y la página `CharactersPage`. Esto facilita el testing, la reutilización y el mantenimiento del código.

4. **Testing con Vitest y React Testing Library**
   - Realicé pruebas unitarias y de integración usando Vitest y React Testing Library. Esto asegura que los componentes funcionen correctamente y que la experiencia de usuario sea estable ante cambios futuros.

5. **Buenas prácticas adicionales**
   - Encapsulé la lógica de negocio y de queries en custom hooks, siguiendo principios SOLID y Clean Code, lo que facilita la escalabilidad y el testing.
   - Implementé debouncing en los filtros para evitar consultas innecesarias a la API mientras el usuario escribe.

---

Si tienes dudas sobre la arquitectura, los patrones o el uso de alguna tecnología, ¡no dudes en preguntar!
