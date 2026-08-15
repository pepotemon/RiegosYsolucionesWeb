import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "como-elegir-un-sistema-de-riego",
    title: "Como elegir un sistema de riego para su cultivo",
    excerpt:
      "Factores técnicos y comerciales para seleccionar una solución eficiente según cultivo, disponibilidad de agua y topografía del predio.",
    image:
      "https://images.unsplash.com/photo-1777063012749-fc1a709aa617?auto=format&fit=crop&w=1200&q=80",
    date: "2026-01-15",
    readTime: "8 min",
    content: [
      {
        type: "paragraph",
        text: "La decisión de qué sistema de riego instalar es, probablemente, una de las más importantes que tomará en su finca. Una elección correcta puede reducir el consumo de agua hasta un 50 %, mejorar la uniformidad de aplicación y disminuir los costos operativos a largo plazo. Una elección equivocada, por el contrario, puede derivar en pérdidas de cultivo, sobrecostos de energía y equipos que quedan obsoletos antes de tiempo.",
      },
      {
        type: "h2",
        text: "Una decisión técnica, no solo comercial",
      },
      {
        type: "paragraph",
        text: "El mercado ofrece muchas opciones, y los vendedores de insumos suelen tener incentivos para recomendar lo que tienen en inventario. Por eso, antes de comprar cualquier equipo, es fundamental partir de un análisis honesto de las condiciones reales del proyecto. No existe un sistema de riego universalmente superior: existe el sistema más adecuado para cada situación particular.",
      },
      {
        type: "h2",
        text: "Los cuatro factores que más pesan en la decisión",
      },
      {
        type: "h3",
        text: "1. El tipo y fisiología del cultivo",
      },
      {
        type: "paragraph",
        text: "Cada cultivo tiene una arquitectura radicular y una demanda hídrica distinta. Un cultivo de raíz superficial como la fresa o la lechuga se beneficia enormemente del riego por goteo superficial, que mantiene húmeda la zona radicular sin mojar el follaje. En cambio, el maíz o la soja —con sistemas radiculares más profundos y amplios— pueden responder mejor a la aspersión. Los cultivos leñosos como el aguacate, el cítrico o el café tienen sus propias particularidades: requieren microaspersión o goteo según la densidad de siembra y las características del suelo.",
      },
      {
        type: "h3",
        text: "2. La disponibilidad y calidad del agua",
      },
      {
        type: "paragraph",
        text: "El caudal disponible determina cuántas hectáreas puede regar simultáneamente y a qué presión. La calidad del agua —pH, sólidos en suspensión, salinidad, presencia de hierro o manganeso— define el nivel de filtración necesario y el tipo de emisores adecuados. Un agua con alta carga de sedimentos y un sistema de goteo sin filtración correcta garantiza obstrucción de goteros y fallas constantes. Este es uno de los errores más costosos y más comunes en la región.",
      },
      {
        type: "h3",
        text: "3. La topografía y extensión del predio",
      },
      {
        type: "paragraph",
        text: "En terrenos con pendientes pronunciadas, la presión varía significativamente entre los puntos más altos y los más bajos de la red. Esto obliga a diseñar con compensadores de presión o a sectorizar la red para equilibrar la distribución. En terrenos planos y extensos, la aspersión con pivote central puede ser la alternativa más eficiente. La distancia entre la fuente de agua y las zonas de riego también afecta directamente el dimensionamiento de tuberías y la potencia de la bomba.",
      },
      {
        type: "h3",
        text: "4. El presupuesto inicial y el horizonte de retorno",
      },
      {
        type: "paragraph",
        text: "El goteo tiene un costo de instalación mayor que la aspersión convencional, pero los ahorros en agua y energía suelen compensar esa diferencia en 2 o 3 temporadas. Para cultivos de alto valor comercial —berries, tomates, pimentón— la inversión en un sistema tecnificado tiene retorno claro. Para cultivos extensivos de bajo margen, puede ser más razonable priorizar un diseño correcto de aspersión que un sistema de goteo complejo mal dimensionado.",
      },
      {
        type: "h2",
        text: "Los cuatro sistemas principales y cuándo usar cada uno",
      },
      {
        type: "list",
        items: [
          "Riego por goteo: aplica el agua directamente en la zona radicular. Eficiencia del 85–95 %. Ideal para hortalizas, frutales en alta densidad, berries y cultivos bajo invernadero.",
          "Aspersión convencional: simula la lluvia distribuyendo el agua en un área. Eficiencia del 70–80 %. Recomendado para pasturas, cereales, caña de azúcar y grandes extensiones.",
          "Microaspersión: aspersores de bajo caudal y radio reducido. Eficiencia del 80–90 %. Adecuado para frutales en espaldera, café, cacao y viveros.",
          "Riego superficial o por gravedad: conduce el agua por surcos o tablones. Eficiencia del 40–60 %. Persiste en arroz y algunos tubérculos por su bajo costo operativo en zonas con agua abundante.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Recomendación técnica",
        text: "Nunca tome la decisión de sistema sin antes medir el caudal real de su fuente en las horas críticas de demanda. Un caudal sobredimensionado en papel puede quedar corto en temporada seca cuando la microcuenca baja. La visita técnica al predio no es un gasto extra: es la diferencia entre un diseño real y una suposición costosa.",
      },
      {
        type: "h2",
        text: "El error más frecuente: comprar sin diseñar",
      },
      {
        type: "paragraph",
        text: "El escenario más común que encontramos en campo es el siguiente: un agricultor compra equipos por recomendación de un vecino o de un almacén agropecuario, los instala sin un diseño hidráulico previo, y a los seis meses tiene presiones desequilibradas, emisores obstruidos y zonas del cultivo con déficit hídrico que se atribuyen falsamente a la calidad de las semillas o al suelo.",
      },
      {
        type: "quote",
        text: "Un sistema de riego no instalado correctamente no riega: desperdicia agua, energía y tiempo. El diseño es la parte más barata y la más ignorada.",
        source: "Principio básico de hidráulica agrícola",
      },
      {
        type: "paragraph",
        text: "Los errores más frecuentes que se originan por omitir el diseño:",
      },
      {
        type: "list",
        items: [
          "Instalaciones sin cálculo de pérdidas de carga: la presión no llega al último gotero.",
          "Filtración insuficiente para la calidad real del agua.",
          "Bombas sobredimensionadas que consumen tres veces la energía necesaria.",
          "Tuberías subdimensionadas que generan velocidades de flujo fuera de rango.",
          "Sin sectorización: todo riega a la vez y el caudal no alcanza para ningún sector.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "50 %", label: "Ahorro de agua — goteo vs. superficie" },
          { value: "3×", label: "Sobrecosto típico de bomba mal seleccionada" },
          { value: "2–3", label: "Temporadas para recuperar inversión en goteo" },
        ],
      },
      {
        type: "h2",
        text: "Por qué la visita técnica es el primer paso",
      },
      {
        type: "paragraph",
        text: "Un técnico especializado necesita ver el predio, medir la fuente, analizar el cultivo y revisar la topografía antes de proponer cualquier solución. Con esa información puede calcular el caudal requerido, definir la presión de trabajo, seleccionar el tipo de emisor correcto y diseñar una red que funcione con uniformidad en todos los sectores. Sin esa información, cualquier propuesta es una suposición.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Diagnóstico inicial sin costo",
        text: "En Riegos y Soluciones Agrícolas del Norte ofrecemos una visita técnica diagnóstica sin costo para proyectos en la región. Llevamos los instrumentos de campo necesarios y entregamos una memoria técnica con las recomendaciones específicas para su predio.",
      },
    ],
  },

  {
    slug: "tipos-de-bombas-agricolas",
    title: "Tipos de bombas agrícolas",
    excerpt:
      "Guía técnica para entender bombas centrífugas, sumergibles, de turbina y solares, y saber cuándo aplica cada una en proyectos rurales.",
    image:
      "https://images.unsplash.com/photo-1764697761858-e126b8c7aaa6?auto=format&fit=crop&w=1200&q=80",
    date: "2026-01-22",
    readTime: "9 min",
    content: [
      {
        type: "paragraph",
        text: "La bomba es el corazón de cualquier sistema de riego. Es el componente que mueve el agua desde la fuente hasta el último emisor, y de su correcta selección depende que el sistema funcione de manera eficiente, económica y duradera. Sin embargo, es también el componente más frecuentemente mal seleccionado en proyectos agrícolas de pequeña y mediana escala.",
      },
      {
        type: "h2",
        text: "Por qué la selección incorrecta cuesta más de lo que parece",
      },
      {
        type: "paragraph",
        text: "Una bomba sobredimensionada consume más energía de la necesaria y puede generar golpe de ariete en tuberías y válvulas. Una bomba subdimensionada no alcanza la presión ni el caudal requeridos, comprometiendo la uniformidad del riego. En ambos casos, el resultado es un sistema que no funciona como fue diseñado —o que directamente no fue diseñado.",
      },
      {
        type: "stats",
        items: [
          { value: "60 %", label: "Energía que consume el bombeo en sistemas típicos" },
          { value: "3×", label: "Sobrecosto operativo de bomba mal seleccionada" },
          { value: "15 años", label: "Vida útil esperada con mantenimiento correcto" },
        ],
      },
      {
        type: "h2",
        text: "Tipos principales de bombas para riego agrícola",
      },
      {
        type: "h3",
        text: "Bomba centrífuga horizontal",
      },
      {
        type: "paragraph",
        text: "Es la más utilizada en sistemas de riego superficial. Opera en superficie, es fácil de mantener, y ofrece un amplio rango de caudales y presiones. Requiere que la fuente de agua esté cerca —generalmente menos de 6–7 metros de altura de succión. Es la elección más común para sistemas de aspersión y goteo que toman agua de ríos, quebradas, lagos o pozos superficiales. Su mayor ventaja es la accesibilidad para mantenimiento y reparación en campo.",
      },
      {
        type: "h3",
        text: "Bomba sumergible",
      },
      {
        type: "paragraph",
        text: "Se instala dentro del pozo, directamente en el agua. Al estar sumergida, no tiene limitaciones de altura de succión. Es la solución estándar para pozos profundos. Su principal ventaja es que opera sin necesidad de cebado y sin problemas de cavitación. Su desventaja es que el mantenimiento requiere extraer la bomba del pozo, lo que implica mayor logística y costo de intervención.",
      },
      {
        type: "h3",
        text: "Bomba de turbina vertical",
      },
      {
        type: "paragraph",
        text: "Diseñada para pozos de gran diámetro o fuentes con nivel de agua variable. El motor queda en superficie y la turbina dentro del agua. Permite trabajar a grandes profundidades y con caudales altos. Es común en proyectos de riego de gran escala: distritos de riego, ingenios azucareros y grandes extensiones de caña o arroz.",
      },
      {
        type: "h3",
        text: "Sistema de bombeo solar fotovoltaico",
      },
      {
        type: "paragraph",
        text: "La bomba solar —generalmente sumergible accionada por paneles fotovoltaicos— está ganando terreno rápidamente en zonas rurales sin acceso confiable a la red eléctrica. Su costo inicial es mayor, pero elimina el costo operativo del combustible o la energía convencional. La producción de agua es mayor en las horas de mayor radiación, que suelen coincidir con las horas de mayor evapotranspiración del cultivo.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "¿Solar o convencional?",
        text: "Si su predio tiene más de 6 horas diarias de sol directo y la distancia a la red eléctrica supera los 500 metros, el bombeo solar puede tener un retorno de inversión inferior a 4 años frente a la alternativa de llevar energía convencional. Calcúlelo con un técnico antes de decidir.",
      },
      {
        type: "h2",
        text: "Variables técnicas que definen la selección correcta",
      },
      {
        type: "list",
        items: [
          "Caudal requerido (Q): cuántos litros por hora o por segundo necesita el sistema en operación simultánea.",
          "Altura Dinámica Total (ADT): suma de la altura geométrica, las pérdidas por fricción en tuberías y la presión de trabajo de los emisores.",
          "Tipo y profundidad de la fuente: río, pozo superficial, pozo profundo, reservorio o acueducto.",
          "Calidad del agua: aguas con sólidos en suspensión, arena fina o pH extremo requieren materiales específicos en el impulsor y la carcasa.",
          "Disponibilidad energética: voltaje y frecuencia de la red, o disponibilidad de diesel o energía solar.",
          "Frecuencia de operación: ¿riega a diario? ¿en turnos? ¿de manera automatizada con controlador?",
        ],
      },
      {
        type: "h2",
        text: "La curva característica: el documento más importante",
      },
      {
        type: "paragraph",
        text: "Todo fabricante entrega una curva característica de cada modelo de bomba. Esta curva relaciona el caudal con la altura que puede desarrollar. El punto de operación del sistema —la intersección entre la curva de la bomba y la curva del sistema hidráulico— debe estar en el rango de mayor eficiencia del equipo. Operar fuera de ese punto significa mayor consumo energético, mayor desgaste y menor vida útil.",
      },
      {
        type: "quote",
        text: "Seleccionar una bomba sin calcular la curva del sistema es como comprar un motor de carro sin saber el peso del vehículo.",
        source: "Principio básico de selección de equipos de bombeo",
      },
      {
        type: "h2",
        text: "Mantenimiento preventivo: lo que no puede ignorarse",
      },
      {
        type: "list",
        items: [
          "Revisión mensual de empaque mecánico o sello: la primera señal de falla es una pequeña fuga por el eje.",
          "Limpieza del filtro de succión: la obstrucción parcial crea cavitación que daña el impulsor en pocas horas de operación.",
          "Verificación de presión de descarga: cambios inesperados indican desgaste del impulsor o problemas en la red.",
          "Control del motor: temperatura anormal, vibración o ruido son indicadores tempranos de falla mecánica o eléctrica.",
          "Lubricación de rodamientos según ficha técnica del fabricante y las condiciones de operación.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Señal de alerta",
        text: "Si su bomba arranca con normalidad pero la presión en el sistema es menor que la habitual, no asuma que es un problema de la red de tuberías. Puede ser desgaste del impulsor, entrada de aire por una unión floja, o cavitación por bajo nivel en la fuente. Diagnóstiquelo antes de que el daño se agrave.",
      },
    ],
  },

  {
    slug: "como-ahorrar-agua-en-una-finca",
    title: "Como ahorrar agua en una finca",
    excerpt:
      "Prácticas operativas, de mantenimiento y de instrumentación para reducir el desperdicio hídrico sin comprometer el rendimiento del cultivo.",
    image:
      "https://images.unsplash.com/photo-1773247290009-a45ea0232d11?auto=format&fit=crop&w=1200&q=80",
    date: "2026-02-02",
    readTime: "8 min",
    content: [
      {
        type: "paragraph",
        text: "El agua es el insumo más crítico de la producción agrícola y, paradójicamente, el que más se desperdicia. En sistemas de riego mal diseñados o mal operados, entre el 30 % y el 50 % del agua aplicada nunca llega a la zona radicular del cultivo. Se pierde por evaporación, escorrentía, fugas en la red y aplicaciones fuera de tiempo. Identificar esas pérdidas es el primer paso para reducirlas.",
      },
      {
        type: "stats",
        items: [
          { value: "30–50 %", label: "Agua perdida en sistemas mal operados" },
          { value: "25 %", label: "Ahorro promedio con riego nocturno" },
          { value: "85 %+", label: "Eficiencia alcanzable con goteo bien diseñado" },
        ],
      },
      {
        type: "h2",
        text: "El diagnóstico como punto de partida obligatorio",
      },
      {
        type: "paragraph",
        text: "Antes de hablar de tecnología, hay que medir. Un diagnóstico básico del sistema de riego incluye la medición de caudal en la fuente y en los emisores, la verificación de presiones en distintos puntos de la red, y la revisión visual de fugas, obstrucciones y emisores dañados. Con esos datos se puede calcular el coeficiente de uniformidad —el indicador que revela qué tan pareja es la distribución del agua— y tomar decisiones informadas.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Coeficiente de Uniformidad (CU)",
        text: "El CU mide qué tan homogéneamente se distribuye el agua en el área regada. Un CU mayor al 85 % se considera aceptable. Por debajo del 75 %, algunas zonas reciben exceso y otras déficit, lo que afecta la calidad del cultivo y el rendimiento final sin que el productor lo note directamente.",
      },
      {
        type: "h2",
        text: "Prácticas de bajo costo con alto impacto",
      },
      {
        type: "h3",
        text: "Regar en las horas correctas",
      },
      {
        type: "paragraph",
        text: "El riego nocturno o en las primeras horas de la mañana reduce la evaporación entre un 20 % y un 30 % respecto al riego de mediodía. En zonas con vientos frecuentes, regar de noche también mejora la uniformidad en sistemas de aspersión, porque el viento afecta la distribución del agua cuando los aspersores operan durante el día. Este cambio no cuesta nada y tiene impacto inmediato en la eficiencia.",
      },
      {
        type: "h3",
        text: "Sectorización adecuada del sistema",
      },
      {
        type: "paragraph",
        text: "Un sistema sin sectores riega todo a la vez, obligando a distribuir el caudal disponible entre todas las áreas simultáneamente. Cuando el caudal no alcanza, la presión cae y los emisores quedan por debajo de su presión de trabajo óptima, reduciendo la uniformidad. Sectorizar permite regar cada área con el caudal y la presión correctos, optimizando el uso del agua y la energía en cada turno.",
      },
      {
        type: "h3",
        text: "Mantenimiento sistemático de emisores",
      },
      {
        type: "paragraph",
        text: "Los goteros obstruidos o las toberas de aspersores desgastadas alteran completamente la distribución del agua. Un gotero obstruido crea zonas de estrés hídrico; una tobera desgastada aumenta el caudal y puede generar encharcamiento. La revisión periódica —al menos una vez por ciclo de cultivo— permite detectar y corregir estas fallas antes de que afecten la producción.",
      },
      {
        type: "list",
        items: [
          "Limpiar filtros de goteo cada 15–30 días según la calidad del agua.",
          "Revisar goteros con baja o nula emisión y reemplazarlos oportunamente.",
          "Medir presión al inicio y al final de cada lateral para detectar pérdidas de carga.",
          "Verificar que las válvulas de sector cierren completamente para evitar riegos involuntarios.",
          "Inspeccionar uniones y codos en busca de fugas visibles y humedades anómalas en el suelo.",
        ],
      },
      {
        type: "h2",
        text: "Tecnología accesible que marca la diferencia",
      },
      {
        type: "h3",
        text: "Controladores de riego",
      },
      {
        type: "paragraph",
        text: "Un controlador básico con programación por turnos puede eliminar por completo los riegos olvidados y los riegos en momentos equivocados. Los controladores modernos con sensores de humedad del suelo van un paso más allá: solo activan el riego cuando el cultivo realmente lo necesita, no cuando un horario lo dice. El retorno de inversión de estos equipos suele medirse en semanas, no en años.",
      },
      {
        type: "h3",
        text: "Manómetros y medidores de caudal",
      },
      {
        type: "paragraph",
        text: "Instrumentar el sistema con manómetros en puntos clave y un medidor de caudal en la línea principal es la inversión más barata con mayor retorno en información. Permite detectar fugas (caída de presión sin válvulas abiertas), sobreconsumos (caudal anormalmente alto), y pérdidas progresivas por desgaste de equipos. Lo que no se mide, no se puede controlar.",
      },
      {
        type: "quote",
        text: "Lo que no se mide no se controla. Y lo que no se controla, se desperdicia.",
        source: "Principio básico de gestión del riego",
      },
      {
        type: "h2",
        text: "Resultados esperados con un plan de mejora",
      },
      {
        type: "paragraph",
        text: "La experiencia en proyectos reales muestra que con una combinación de mejoras operativas —horarios correctos, mantenimiento de emisores, sectorización adecuada y filtración en buen estado— es posible reducir el consumo de agua entre un 20 % y un 35 % sin cambiar los emisores ni la bomba. Con la incorporación de controladores automáticos, el ahorro puede llegar al 40 % respecto al riego manual sin programación.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Punto de partida recomendado",
        text: "Antes de invertir en nuevos equipos, solicite una revisión técnica del sistema actual. En muchos casos, las mejoras operativas y de mantenimiento tienen mayor impacto que reemplazar equipos en buen estado por tecnología más nueva. El diagnóstico le dice exactamente dónde está perdiendo agua.",
      },
    ],
  },

  {
    slug: "ventajas-del-riego-por-goteo",
    title: "Ventajas del riego por goteo",
    excerpt:
      "Por qué el riego por goteo puede mejorar eficiencia hídrica, control nutricional y sanidad del cultivo —y en qué casos no es la solución correcta.",
    image:
      "https://images.unsplash.com/photo-1752775312083-1cefe2f93358?auto=format&fit=crop&w=1200&q=80",
    date: "2026-02-14",
    readTime: "9 min",
    content: [
      {
        type: "paragraph",
        text: "El riego por goteo es, en términos de eficiencia hídrica, el sistema de irrigación más avanzado disponible para agricultura comercial. Nacido en Israel en la década de 1960 como respuesta a la escasez de agua, se ha expandido globalmente y hoy es el estándar para cultivos de alto valor en casi todos los países con agricultura tecnificada. Entender sus ventajas —y sus limitaciones reales— es esencial para decidir si es la opción correcta para su proyecto.",
      },
      {
        type: "stats",
        items: [
          { value: "90–95 %", label: "Eficiencia en aplicación de agua" },
          { value: "40 %", label: "Menos agua vs. aspersión convencional" },
          { value: "30 %", label: "Reducción en enfermedades foliares" },
        ],
      },
      {
        type: "h2",
        text: "¿Cómo funciona realmente el goteo?",
      },
      {
        type: "paragraph",
        text: "El sistema conduce el agua presurizada desde la fuente hasta una red de laterales que recorre el cultivo. Cada lateral tiene goteros o emisores instalados a intervalos regulares, que reducen la presión y liberan el agua gota a gota directamente sobre el suelo, cerca de la base de cada planta. El volumen y la frecuencia de aplicación se programan según la demanda del cultivo en cada etapa de desarrollo. El bulbo de humedecimiento —la zona de suelo que se moja— varía según el caudal del emisor, la textura del suelo y la frecuencia de riego.",
      },
      {
        type: "h2",
        text: "Las ventajas que marcan la diferencia",
      },
      {
        type: "h3",
        text: "Alta eficiencia en el uso del agua",
      },
      {
        type: "paragraph",
        text: "El goteo bien diseñado alcanza eficiencias de aplicación del 90 % al 95 %, frente al 60–70 % de la aspersión convencional y al 40–50 % del riego superficial. Esto significa que casi toda el agua que sale de la fuente llega al suelo cerca de la raíz, sin pérdidas significativas por evaporación o escorrentía. En zonas con restricción de agua o costos altos de bombeo, esta diferencia tiene impacto directo en los costos de producción.",
      },
      {
        type: "h3",
        text: "El follaje permanece seco",
      },
      {
        type: "paragraph",
        text: "A diferencia de la aspersión, el goteo no moja hojas, tallos ni frutos. Esto tiene una consecuencia directa sobre la sanidad del cultivo: las enfermedades fúngicas —que requieren humedad en el follaje para desarrollarse— se reducen significativamente. En cultivos como el tomate, el pimentón, la uva o el aguacate, esto puede traducirse en menor aplicación de fungicidas y menores pérdidas en poscosecha.",
      },
      {
        type: "h3",
        text: "Fertirriego: fertilización y riego en un solo paso",
      },
      {
        type: "paragraph",
        text: "El goteo permite inyectar fertilizantes directamente en el agua de riego —fertirriego— llevándolos con precisión hasta la zona radicular activa. Esto mejora la absorción, reduce las pérdidas por volatilización y lixiviación, y permite fraccionar la nutrición del cultivo a lo largo de todo el ciclo productivo. La eficiencia de uso de fertilizantes puede mejorar entre un 20 % y un 40 % respecto a la aplicación foliar o al voleo.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Fertirriego bien implementado",
        text: "Para hacer fertirriego correctamente se necesita un inyector calibrado (venturi, bomba de dosificación o tanque de fertilización), fertilizantes solubles de grado fertirriego, y un protocolo de lavado de laterales al final de cada aplicación. Sin lavado, los goteros se obstruyen por precipitación química de los fertilizantes.",
      },
      {
        type: "h3",
        text: "Menor consumo energético",
      },
      {
        type: "paragraph",
        text: "Los sistemas de goteo trabajan a presiones menores que la aspersión —típicamente entre 0.8 y 1.5 bar en el emisor frente a los 2.5–4 bar de los aspersores. Esto se traduce en menor potencia de bomba requerida y menores costos de energía por metro cúbico de agua distribuida, siempre que la red esté bien diseñada y los laterales no sean demasiado largos.",
      },
      {
        type: "h2",
        text: "En qué cultivos funciona mejor",
      },
      {
        type: "list",
        items: [
          "Hortalizas: tomate, pimentón, pepino, melón, sandía, cebolla, ajo.",
          "Frutales: aguacate, cítricos, mango, uva, maracuyá, gulupa, mora.",
          "Berries: fresa, arándano, frambuesa.",
          "Cultivos bajo invernadero: prácticamente cualquier especie en producción protegida.",
          "Café y cacao: especialmente en sistemas de alta densidad con fertirriego integrado.",
          "Caña de azúcar: con goteo enterrado en zonas de alta demanda hídrica.",
        ],
      },
      {
        type: "h2",
        text: "Cuándo el goteo NO es la mejor opción",
      },
      {
        type: "paragraph",
        text: "El goteo no es la solución universal. En pasturas extensivas, el costo de instalación por hectárea es difícil de justificar con el margen del cultivo. En arroz bajo inundación, no aplica por definición del sistema productivo. En suelos muy arenosos con riego infrecuente, el bulbo de humedecimiento puede ser demasiado estrecho para desarrollar un sistema radicular robusto. Y en proyectos con agua de mala calidad sin inversión en filtración, los goteros se obstruirán en pocas semanas.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "El goteo falla sin filtración correcta",
        text: "El componente de mayor impacto en la vida útil de un sistema de goteo es la filtración. Agua con partículas en suspensión, algas, hierro disuelto o carbonatos sin el tratamiento adecuado destruirá los emisores en una o dos temporadas. Antes de instalar goteo, analice el agua y diseñe la filtración en consecuencia.",
      },
      {
        type: "h2",
        text: "Vida útil y costos reales",
      },
      {
        type: "paragraph",
        text: "Un sistema de goteo bien instalado, con el mantenimiento correcto, puede durar entre 8 y 15 años. Los laterales de polietileno de calidad UV tienen una vida útil de 5–8 años en condiciones de exposición directa; en sistemas enterrados o bajo cobertura, pueden superar los 15 años. Las cintas de goteo económicas, en cambio, pueden deteriorarse en 1–3 temporadas. La diferencia entre invertir en calidad y comprar lo más barato puede ser enorme a largo plazo.",
      },
      {
        type: "quote",
        text: "El goteo no es caro. Caro es reinstalar un sistema mal especificado cada dos años.",
        source: "Experiencia frecuente en proyectos agrícolas de la región",
      },
    ],
  },

  {
    slug: "cuando-conviene-perforar-un-pozo-profundo",
    title: "Cuando conviene perforar un pozo profundo",
    excerpt:
      "Criterios técnicos, legales y económicos para evaluar una fuente subterránea como alternativa de abastecimiento hídrico en proyectos agrícolas.",
    image:
      "https://images.unsplash.com/photo-1776196463688-5f21c9632c75?auto=format&fit=crop&w=1200&q=80",
    date: "2026-03-01",
    readTime: "10 min",
    content: [
      {
        type: "paragraph",
        text: "En muchas regiones agrícolas de Colombia y América Latina, la primera fuente de agua que se evalúa son las superficiales: ríos, quebradas, reservorios o acueductos rurales. Pero cuando estas fuentes son insuficientes, irregulares o técnicamente inaccesibles, el agua subterránea —captada a través de un pozo profundo— puede ser la alternativa más viable y confiable para el proyecto.",
      },
      {
        type: "h2",
        text: "¿Qué es un pozo profundo y cómo funciona?",
      },
      {
        type: "paragraph",
        text: "Un pozo profundo o pozo perforado es una estructura vertical que penetra el subsuelo hasta alcanzar un acuífero —una capa de roca o sedimento saturada de agua. A diferencia de los pozos artesanales o jagüeyes, que captan agua superficial o freática, un pozo profundo accede a acuíferos confinados o semiconfinados que generalmente ofrecen mejor calidad de agua y mayor estabilidad a lo largo del año.",
      },
      {
        type: "h2",
        text: "Señales de que puede necesitar un pozo profundo",
      },
      {
        type: "list",
        items: [
          "La fuente superficial no tiene caudal suficiente en época seca para cubrir la demanda del proyecto.",
          "La fuente superficial presenta alta variabilidad estacional o es sensible a contaminación por actividades cercanas.",
          "La distancia desde la fuente hasta las zonas de riego hace inviable técnica o económicamente el bombeo superficial.",
          "El acueducto rural o municipal no tiene capacidad para atender la demanda agrícola adicional.",
          "El estudio hidrogeológico de la zona indica presencia de acuíferos productivos a profundidades accesibles.",
        ],
      },
      {
        type: "h2",
        text: "El proceso de evaluación: paso a paso",
      },
      {
        type: "h3",
        text: "1. Estudio hidrogeológico previo",
      },
      {
        type: "paragraph",
        text: "Antes de perforar, un estudio hidrogeológico —que puede incluir revisión de la geología local, antecedentes de pozos cercanos, y en algunos casos pruebas de resistividad eléctrica o sísmica superficial— permite estimar la probabilidad de encontrar agua a distintas profundidades, el tipo de acuífero esperado y la calidad probable. No perforar sin este análisis es el error más costoso en el desarrollo de fuentes subterráneas: un pozo seco o infructuoso puede representar entre 15 y 40 millones de pesos perdidos.",
      },
      {
        type: "h3",
        text: "2. La perforación exploratoria",
      },
      {
        type: "paragraph",
        text: "La perforación se realiza con equipos rotatorios o percusivos según la geología del área. Durante el proceso se toman muestras de los estratos para identificar las capas de acuífero y su potencial productivo. El diámetro de la perforación se define según el caudal esperado y el tipo de bomba que se instalará. Una perforación bien ejecutada incluye también la instalación de entubado y filtros de grava que protegen el pozo y optimizan la captación.",
      },
      {
        type: "h3",
        text: "3. Prueba de bombeo",
      },
      {
        type: "paragraph",
        text: "Una vez completada la perforación, se realiza una prueba de bombeo que consiste en extraer agua a caudal constante durante un período definido —generalmente 24 a 72 horas— mientras se mide el nivel del agua dentro del pozo. Esta prueba permite determinar el caudal seguro de explotación del acuífero sin comprometer su recuperación, y es el dato técnico más importante para el diseño del sistema de bombeo.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "No sobreexplote el acuífero",
        text: "Extraer más agua de la que el acuífero puede recuperar genera descenso progresivo del nivel piezométrico, aumento de la profundidad de bombeo y, en casos extremos, colapso parcial del acuífero. La prueba de bombeo no es opcional: es el único instrumento técnico que define el caudal máximo de explotación sostenible.",
      },
      {
        type: "h3",
        text: "4. Análisis de calidad del agua",
      },
      {
        type: "paragraph",
        text: "El agua subterránea no es necesariamente apta para todos los usos agrícolas. Puede tener altos contenidos de hierro, manganeso, flúor, nitratos, salinidad o dureza que afectan los emisores de riego, los cultivos y en algunos casos el suelo. Un análisis fisicoquímico completo —y en zonas con actividad minera o industrial, un análisis de metales pesados— es indispensable antes de instalar cualquier sistema de riego conectado al pozo.",
      },
      {
        type: "stats",
        items: [
          { value: "60–150 m", label: "Profundidad típica en acuíferos productivos" },
          { value: "72 h", label: "Duración mínima recomendada de prueba de bombeo" },
          { value: "20 años", label: "Vida útil esperada del pozo con diseño correcto" },
        ],
      },
      {
        type: "h2",
        text: "Permisos y marco legal en Colombia",
      },
      {
        type: "paragraph",
        text: "En Colombia, el aprovechamiento de aguas subterráneas requiere concesión de agua otorgada por la autoridad ambiental competente (Corporación Autónoma Regional). La perforación sin permiso puede resultar en sanciones, obligación de sellar el pozo y pérdida total de la inversión. El proceso de concesión requiere el estudio hidrogeológico previo, información técnica del pozo y un plan de uso. Los tiempos de trámite varían entre 3 y 12 meses según la CAR.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Marco legal vigente",
        text: "El Decreto 1541 de 1978 y sus normas concordantes regulan el aprovechamiento de aguas en Colombia. La concesión de aguas subterráneas se tramita ante la CAR de la jurisdicción. Iniciar el proceso antes de la perforación evita demoras costosas y protege la inversión.",
      },
      {
        type: "h2",
        text: "¿Cuándo NO vale la pena perforar?",
      },
      {
        type: "paragraph",
        text: "Cuando el estudio hidrogeológico indica baja probabilidad de acuíferos productivos, el riesgo económico es alto. En esos casos puede ser más viable invertir en reservorios de captación de agua lluvia o en infraestructura para aprovechar mejor la fuente superficial existente. También cuando la calidad del agua subterránea esperada —por actividades industriales o mineras cercanas— implica costos de tratamiento que superan la alternativa superficial.",
      },
      {
        type: "h2",
        text: "El equipamiento del pozo: no improvise",
      },
      {
        type: "paragraph",
        text: "Una vez confirmado el pozo, la selección de la bomba sumergible, la tubería de impulsión, los tableros eléctricos de control y los equipos de medición deben hacerse con base en los datos reales de la prueba de bombeo. Un equipo correctamente especificado puede durar 15 o 20 años; uno improvisado o mal calculado puede fallar en la primera temporada de operación.",
      },
      {
        type: "list",
        items: [
          "Bomba sumergible dimensionada para el caudal de explotación y la profundidad real del nivel dinámico.",
          "Sello sanitario en la cabeza del pozo para evitar contaminación superficial.",
          "Tablero eléctrico con protección contra marcha en seco (nivel mínimo de agua).",
          "Manómetro y medidor de caudal en la línea de impulsión.",
          "Caudalímetro para registro del volumen extraído (requerido por la concesión de agua).",
        ],
      },
      {
        type: "quote",
        text: "Un pozo bien diseñado es un activo que dura décadas. Un pozo improvisado es un pasivo que cuesta años de problemas.",
        source: "Experiencia acumulada en proyectos de captación subterránea",
      },
    ],
  },
];
