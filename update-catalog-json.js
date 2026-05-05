const fs = require('fs');

const catMap = {
  administracion: 'Administración',
  ventas: 'Ventas',
  produccion: 'Producción',
  epp: 'EPP',
  mantenimiento: 'Mantenimiento',
  seguridad: 'Seguridad',
  imagen_corporativa: 'Imagen Corporativa'
};

// Intenta detectar marca desde descripción
function detectarMarca(desc) {
  const marcas = ['Sport-Tek','Port Authority','5.11','Red Kap','Gildan','Oakley','LICA','Lica'];
  for (const m of marcas) {
    if (desc.includes(m)) return m;
  }
  return 'UPE';
}

const items = [
  {"id":181,"titulo":"Camisa manga larga caballero","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"Ligeras y transpirables, nuestras camisas de algodón de alta calidad conservan su aspecto profesional gracias a un acabado anti manchas que las elimina durante el lavado. Económicas y duraderas, prácticamente sin necesidad de cuidados. 3.3 onzas, 55% algodón / 45% poliéster.","precio":522.72,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=773"},
  {"id":189,"titulo":"Camisa manga larga caballero (variante)","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"Ligeras y transpirables, con acabado anti manchas. 3.3 onzas, 55% algodón / 45% poliéster.","precio":522.72,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=777"},
  {"id":217,"titulo":"CHALECO HÍBRIDO PARA CABALLERO","categoria":"administracion","tipo_prenda":"N/A","descripcion":"Chalecos Sport-Tek de alto rendimiento, confeccionados con dos tejidos diferentes que mantienen abrigado con total libertad de movimiento. Deflectores 100% poliéster, tejido doble 90/10 poliéster/spandex. Acabado repelente al agua duradero (DWR).","precio":736.56,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=781"},
  {"id":241,"titulo":"Camisa manga larga dama","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"Ligeras y transpirables, con acabado anti manchas. 3.3 onzas, 55% algodón / 45% poliéster.","precio":520.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=774"},
  {"id":242,"titulo":"Camisa manga larga dama (variante)","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"Ligeras y transpirables, con acabado anti manchas. 3.3 onzas, 55% algodón / 45% poliéster.","precio":522.72,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=779"},
  {"id":244,"titulo":"CHAMARRA TIPO NEOPRENO PARA DAMA","categoria":"administracion","tipo_prenda":"Administrativo","descripcion":"Chamarra tipo neopreno 100% poliéster Port Authority. Impermeabilidad: 1000 mm. Transpirabilidad: 1000 g/m². Resistente al viento y repelente al agua. Cuello cadete con cremallera y protector de barbilla.","precio":767.16,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=855"},
  {"id":245,"titulo":"CHAMARRA TIPO NEOPRENO PARA CABALLERO","categoria":"administracion","tipo_prenda":"Administrativo","descripcion":"Chamarra tipo neopreno 100% poliéster Port Authority. Impermeabilidad: 1000 mm. Transpirabilidad: 1000 g/m². Resistente al viento y repelente al agua. Cuello cadete con cremallera y protector de barbilla.","precio":767.16,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=853"},
  {"id":246,"titulo":"POLO MANGA CORTA PARA CABALLERO","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"El polo Silk Touch Performance absorbe la humedad, resiste los enganches y conserva su color gracias a la tecnología PosiCharge®. Tejido doble de 4 onzas, 100% poliéster con tecnología PosiCharge.","precio":422.28,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=785"},
  {"id":247,"titulo":"POLO MANGA CORTA PARA DAMA","categoria":"administracion","tipo_prenda":"Corporativo","descripcion":"Diseñado para el máximo rendimiento con imagen profesional. Jersey de 133 gramos (4.7 onzas), 100% poliéster.","precio":422.28,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=787"},
  {"id":249,"titulo":"CHALECO HÍBRIDO PARA DAMA","categoria":"administracion","tipo_prenda":"N/A","descripcion":"Chalecos Sport-Tek de alto rendimiento, dos tejidos diferentes que mantienen abrigado con libertad de movimiento. Deflectores 100% poliéster, tejido doble 90/10 poliéster/spandex. Acabado DWR.","precio":736.56,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=783"},
  {"id":250,"titulo":"PANTALÓN DE TRABAJO","categoria":"administracion","tipo_prenda":"Industrial","descripcion":"Pantalón IL50 de resistencia industrial probado en 50 lavados. Sarga de 212 gramos (7.5 oz), 65% poliéster / 35% algodón con tecnología Touchtex PRO™. Comodidad transpirable, colores duraderos y resistencia a manchas. Tejido TruBlack.","precio":617.76,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=843"},
  {"id":185,"titulo":"camisa manga larga dama","categoria":"ventas","tipo_prenda":"Corporativo","descripcion":"Tejido bicolor resistente a las arrugas, popelina con textura agradable. 3 onzas, 60% algodón / 40% poliéster. Cuello y escote abiertos.","precio":632.88,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=789"},
  {"id":243,"titulo":"CHALECO PARA DAMA SOFT SHELL","categoria":"ventas","tipo_prenda":"N/A","descripcion":"Chaleco soft shell Port Authority. Impermeabilidad: 1000 mm. Transpirabilidad: 1000 g/m². Resistente al viento y repelente al agua. Cremalleras de bobina invertida. Cuello cadete con cremallera y protector de barbilla.","precio":728.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=794"},
  {"id":248,"titulo":"Camisa manga larga caballero","categoria":"ventas","tipo_prenda":"Corporativo","descripcion":"Tejido bicolor resistente a las arrugas, popelina. 3 onzas, 60% algodón / 40% poliéster.","precio":632.88,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=791"},
  {"id":251,"titulo":"PANTALÓN DE VESTIR CABALLERO","categoria":"ventas","tipo_prenda":"Industrial","descripcion":"Pantalón elegante y profesional, sastrería moderna. Tejido Sorona® de 193 gramos (6.8 oz), 57% poliéster / 43% elasterell-P. Transpirable, antiolor, elástico.","precio":1439.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=845"},
  {"id":252,"titulo":"PANTALÓN DE VESTIR DAMA","categoria":"ventas","tipo_prenda":"Industrial","descripcion":"Pantalón elegante y profesional. Tejido Sorona® de 193 gramos, 57% poliéster / 43% elasterell-P. Transpirable y antiolor.","precio":1439.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=847"},
  {"id":253,"titulo":"CHAMARRA SOFT SHELL PARA CABALLERO","categoria":"ventas","tipo_prenda":"Administrativo","descripcion":"Chaqueta softshell elástica, textura mini ripstop. Película resistente al agua y acabado DWR. Tejido 94/6 poliéster/spandex, interior de tricot cepillado 100% poliéster.","precio":578.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=796"},
  {"id":254,"titulo":"CHAMARRA SOFT SHELL PARA DAMA","categoria":"ventas","tipo_prenda":"Administrativo","descripcion":"Chaqueta softshell elástica, textura mini ripstop con acabado DWR. Tejido 94/6 poliéster/spandex, interior de tricot cepillado 100% poliéster.","precio":578.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=798"},
  {"id":255,"titulo":"POLO DE PIQUÉ PARA CABALLERO","categoria":"ventas","tipo_prenda":"Corporativo","descripcion":"Colección Wearever Signature. Piqué de 5 onzas, 65% poliéster / 35% algodón. Absorbe la humedad. UPF 20-40+. Resistente a arrugas y encogimiento.","precio":305.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=800"},
  {"id":256,"titulo":"POLO DE PIQUÉ PARA DAMA","categoria":"ventas","tipo_prenda":"Corporativo","descripcion":"Colección Wearever Signature. Piqué de 5 onzas, 65% poliéster / 35% algodón. Absorbe la humedad. UPF 20-40+. Resistente a arrugas y encogimiento.","precio":305.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=802"},
  {"id":257,"titulo":"POLO DE ALTO RENDIMIENTO PARA CABALLERO","categoria":"produccion","tipo_prenda":"Corporativo","descripcion":"Tejido de alto rendimiento que conserva el color y absorbe la humedad. Interlock 100% poliéster de 108 gramos con tecnología PosiCharge. Cuello de punto plano.","precio":261.36,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=804"},
  {"id":258,"titulo":"POLO DE ALTO RENDIMIENTO PARA DAMA","categoria":"produccion","tipo_prenda":"Corporativo","descripcion":"Tejido de alto rendimiento que conserva el color y absorbe la humedad. Interlock 100% poliéster de 108 gramos con tecnología PosiCharge. Cuello de punto plano.","precio":261.36,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=806"},
  {"id":259,"titulo":"PANTALÓN DE MEZCLILLA","categoria":"produccion","tipo_prenda":"Industrial","descripcion":"Jeans de corte clásico recto, cómodos en cadera, muslo y tobillo. Espacio extra en cadera y muslos. Pierna recta con cierre.","precio":348.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=849"},
  {"id":260,"titulo":"PANTALÓN DE MEZCLILLA PARA DAMA","categoria":"produccion","tipo_prenda":"Industrial","descripcion":"60% algodón, 23% viscosa, 16% poliéster, 1% elastano. Corte estrecho.","precio":1399.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=857"},
  {"id":261,"titulo":"CHAMARRA AISLANTE PARA DAMA","categoria":"produccion","tipo_prenda":"Administrativo","descripcion":"Combina calidez del aislamiento acolchado ligero con paneles laterales de tejido suave. Exterior tejido 100% poliéster. Forro estampado 100% poliéster con relleno de poliéster.","precio":884.88,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=810"},
  {"id":262,"titulo":"CHAMARRA AISLANTE PARA CABALLERO","categoria":"produccion","tipo_prenda":"Administrativo","descripcion":"Combina calidez del aislamiento acolchado ligero con paneles laterales de tejido suave. Exterior tejido 100% poliéster. Forro estampado 100% poliéster con relleno de poliéster.","precio":884.88,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=808"},
  {"id":230,"titulo":"Lentes de seguridad","categoria":"epp","tipo_prenda":"Industrial","descripcion":"100% policarbonato. Mica anti-impacto y anti-rayaduras. Armazón nailon resistente, flexible y ajustable. Protección UV. Certificación: ANSI Z.87.1.2003.","precio":440.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=761"},
  {"id":231,"titulo":"Tapones","categoria":"epp","tipo_prenda":"Industrial","descripcion":"Fabricados en Pu-Foam. Certificados. Nivel de Reducción de Ruido: 37 dB. Cordón plástico de 70 cm. Recomendado para ruidos de alta frecuencia y largas jornadas.","precio":6.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=763"},
  {"id":232,"titulo":"LENTES DE MICA CONTINUA","categoria":"epp","tipo_prenda":"Industrial","descripcion":"Lente Capataz de mica continua, campo de visión amplio. Patas ventiladas. Protección contra impacto de rebabas. Armazón nailon flexible y ajustable. Protección UV. Certificación: ANSI Z.87.1.2003.","precio":440.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=768"},
  {"id":233,"titulo":"CARETA FACIAL","categoria":"epp","tipo_prenda":"N/A","descripcion":"Visera con lente de policarbonato. Certificación ANSI Z89.1. Resiste golpe de proyectil de 500g desde 1.27 m. Vida útil: 3 años. Transmisión luminosa 90%.","precio":300.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=772"},
  {"id":234,"titulo":"MASCARILLA RESPIRATORIA","categoria":"epp","tipo_prenda":"Industrial","descripcion":"100% poliéster. Reduce exposición a partículas biológicas suspendidas en el aire. Mínimo 95% de eficiencia de filtración contra aerosoles sólidos y líquidos sin aceite.","precio":15.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=765"},
  {"id":235,"titulo":"BOTA DE SEGURIDAD","categoria":"epp","tipo_prenda":"N/A","descripcion":"Sistema pegado. Corte flor corregida cuero vacuno. Suela poliuretano (PU). Borceguí 14.5 cm. Color negro. Casco: Poliamida. Tallas 22-30. Dieléctrico. Hecho en México. NOM-113-STPS-2009.","precio":558.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=764"},
  {"id":236,"titulo":"BOTAS PVC","categoria":"epp","tipo_prenda":"N/A","descripcion":"Bota Industrial PVC marca LICA. Color negro con suela roja. Altura 40 cm. Tallas 23-30. Antiderrapante. Ideal para pisos resbalosos con aceite, líquidos corrosivos o grasas.","precio":300.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=771"},
  {"id":237,"titulo":"GUANTES DE CARNAZA","categoria":"epp","tipo_prenda":"N/A","descripcion":"100% piel de res. Guante corto con costuras reforzadas en la palma. Puño: manga ancha de seguridad. Color amarillo.","precio":97.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=766"},
  {"id":238,"titulo":"GUANTES REVESTIDO DE NITRILO","categoria":"epp","tipo_prenda":"N/A","descripcion":"40% algodón, 60% nitrilo. Revestimiento de nitrilo, palma de algodón y látex. Resistente a aceites, pinturas, derivados del petróleo y grasas. Color azul. Certificación: CE-EN-388-4121.","precio":23.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=767"},
  {"id":239,"titulo":"MANDIL CONTRA ÁCIDOS","categoria":"epp","tipo_prenda":"N/A","descripcion":"Talla unitalla. 100% nylon. Color blanco. 68 x 100 cm. Lona nailon fortoflex. Protege contra contaminación cruzada por fluidos, gérmenes y microorganismos.","precio":176.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=770"},
  {"id":240,"titulo":"RESPIRADOR PARA VAPORES","categoria":"epp","tipo_prenda":"Industrial","descripcion":"Respirador de media cara para gases y vapores orgánicos. Elastomérico con filtros y cartuchos reemplazables. No alergénico. Mínimo 95% de eficiencia de filtración.","precio":339.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=769"},
  {"id":263,"titulo":"CHALECO DE SEGURIDAD","categoria":"epp","tipo_prenda":"Operativo","descripcion":"100% algodón. Bolsillos a la altura del pecho. Bolsillos con cierres en la cintura. Cierre delantero tipo pata de elefante de 20\". Bandas reflectantes de PVC. Unitalla.","precio":450.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=812"},
  {"id":264,"titulo":"FILIPINA PARA DAMA","categoria":"mantenimiento","tipo_prenda":"Administrativo","descripcion":"65/35 poliéster/algodón. Estiramiento mecánico. Escote en V. Presilla para insignia de hombro. Bolsillos delanteros de carga superior con trabillas ocultas.","precio":371.34,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=813"},
  {"id":265,"titulo":"FILIPINA PARA CABALLERO","categoria":"mantenimiento","tipo_prenda":"Administrativo","descripcion":"65/35 poliéster/algodón. Estiramiento mecánico. Escote en V. Presilla para insignia. Bolsillos delanteros de carga superior con trabillas ocultas.","precio":472.50,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=815"},
  {"id":266,"titulo":"PANTALÓN CARGO PARA CABALLERO","categoria":"mantenimiento","tipo_prenda":"N/A","descripcion":"78/20/2 poliéster/rayón/spandex. Cintura plana con trabillas. Cordón ajustable y parte trasera elástica. Bolsillos delanteros inclinados. Bolsillos cargo con bolsillo interior.","precio":511.56,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=817"},
  {"id":267,"titulo":"PANTALÓN CARGO PARA DAMA","categoria":"mantenimiento","tipo_prenda":"Médico","descripcion":"78/20/2 poliéster/rayón/spandex. Cintura elástica con cordón ajustable. Bolsillos delanteros inclinados. Bolsillo cargo del lado derecho con bolsillo interior.","precio":491.94,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=819"},
  {"id":268,"titulo":"PANTALÓN DE CARGO PARA HOMBRE","categoria":"seguridad","tipo_prenda":"Industrial","descripcion":"Pantalón Icon 5.11®. Corte recto con movilidad optimizada. Tejido Flex-Tac® Ripstop con DWR, mezcla poliéster/algodón de 193 gramos. Resiste desgaste, repele humedad.","precio":1710.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=852"},
  {"id":269,"titulo":"MOCHILA DE PECHO","categoria":"seguridad","tipo_prenda":"N/A","descripcion":"Sistema de arnés ligero ajustable y de liberación rápida. Compartimento trasero ambidiestro para porte oculto de armas. Compartimento principal con bolsillos de alta organización. Panel trasero transpirable.","precio":1260.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=826"},
  {"id":277,"titulo":"CAMISA TÁCTICA","categoria":"seguridad","tipo_prenda":"Mantenimiento","descripcion":"Camisa Wyatt 5.11 de manga corta, con cuello y botones. Bolsillo discreto en el pecho izquierdo. Ideal para portar arma oculta. Popelín 60% algodón / 40% poliéster, 3.1 oz.","precio":1044.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=862"},
  {"id":278,"titulo":"LENTES","categoria":"seguridad","tipo_prenda":"Industrial","descripcion":"Lentes Plutonite® con protección UV superior (100% UVA, UVB, UVC). Ajuste de tres puntos. Marco O-Matter™ resistente, ligero y duradero. Certificación: ANSI Z.87.1.2003.","precio":440.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=866"},
  {"id":279,"titulo":"TENIS DE SEGURIDAD","categoria":"seguridad","tipo_prenda":"N/A","descripcion":"ATAC® 2.0 Low de 5.11. Entresuela ATAC con amortiguación. Plantilla Ortholite® doble densidad. Cuero pulible y nailon. Tratamiento antimicrobiano Agion®. Suela antideslizante.","precio":1800.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=864"},
  {"id":270,"titulo":"MOCHILA MODERNA","categoria":"imagen_corporativa","tipo_prenda":"N/A","descripcion":"Mochila compacta de tejido jaspeado. Poliéster jaspeado 600D, lona poliéster 300D. Compartimento principal, compartimento de oficina y compartimento acolchado para laptop. Bolsillos laterales de malla.","precio":656.28,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=837"},
  {"id":271,"titulo":"SUDADERA CON GORRO UNISEX","categoria":"imagen_corporativa","tipo_prenda":"Recepción","descripcion":"Colección Heavy Blend con tecnología MVS Air. 8 onzas, 50% algodón / 50% poliéster. Capucha con doble forro y cordón ajustable. Puños y cintura acanalados 1x1 con spandex. Bolsillo frontal tipo canguro.","precio":480.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=832"},
  {"id":272,"titulo":"SUDADERA CUELLO REDONDO UNISEX","categoria":"imagen_corporativa","tipo_prenda":"Administrativo","descripcion":"Colección Heavy Blend con tecnología MVS Air. 8 onzas, 50% algodón / 50% poliéster. Cuello, puños y cintura acanalados 1x1 con spandex.","precio":450.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=834"},
  {"id":273,"titulo":"GORRA DE 5 PANELES","categoria":"imagen_corporativa","tipo_prenda":"N/A","descripcion":"Sarga 100% algodón. Estructurada. De alto perfil. Cierre de velcro.","precio":200.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=828"},
  {"id":274,"titulo":"GORRO UNISEX","categoria":"imagen_corporativa","tipo_prenda":"N/A","descripcion":"Gorro de punto con forro texturizado que absorbe la humedad. 60% algodón / 40% acrílico. Forro 100% poliéster.","precio":165.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=836"},
  {"id":275,"titulo":"MALETÍN","categoria":"imagen_corporativa","tipo_prenda":"N/A","descripcion":"Lona poliéster 600D y sarga retorcida poliéster 360D. Compartimento principal con cremallera. Compartimento interior acolchado para laptop. Bolsillo frontal con panel organizador. Correa de hombro acolchada ajustable y extraíble.","precio":539.64,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=839"},
  {"id":276,"titulo":"MALETA","categoria":"imagen_corporativa","tipo_prenda":"N/A","descripcion":"Maleta de cabina con dos ruedas. Poliéster 600D con acabado DWR. Parte trasera moldeada con logotipo en relieve. Asa superior acolchada. Compartimentos principales con correas de compresión.","precio":3186.00,"imagen_url":"https://uniformesprofesionales.integranet.xyz/api/image.php?id=841"}
];

// Generar líneas JS
const lines = items.map(p => {
  const cat = catMap[p.categoria] || p.categoria;
  const marca = detectarMarca(p.descripcion);
  const desc = p.descripcion.replace(/"/g, '\\"');
  const nombre = p.titulo.replace(/"/g, '\\"');
  return `        { id: ${p.id}, nombre: "${nombre}", marca: "${marca}", categoria: "${cat}", img: "${p.imagen_url}", desc: "${desc}", etiqueta: "${p.tipo_prenda}", precio: ${p.precio} }`;
}).join(',\n');

// Reemplazar en catalogo.html
let html = fs.readFileSync('C:/Users/angel/upe-unifomres-mx/catalogo.html', 'utf8');

// Buscar el bloque productosDefault
const startMarker = 'const productosDefault = [';
const endMarker = '\n        ];\n';

const startIdx = html.indexOf(startMarker);
if (startIdx === -1) { console.error('No se encontró productosDefault'); process.exit(1); }

// Encontrar el cierre del array
let depth = 0, i = startIdx + startMarker.length;
while (i < html.length) {
  if (html[i] === '[') depth++;
  else if (html[i] === ']') {
    if (depth === 0) break;
    depth--;
  }
  i++;
}

const before = html.slice(0, startIdx + startMarker.length);
const after = html.slice(i); // desde el ']' de cierre

html = before + '\n' + lines + '\n    ' + after;

fs.writeFileSync('C:/Users/angel/upe-unifomres-mx/catalogo.html', html, 'utf8');
console.log('✅ Catálogo actualizado con', items.length, 'productos.');
