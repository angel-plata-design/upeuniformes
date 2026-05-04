const fs = require('fs');
let content = fs.readFileSync('C:/Users/angel/upe-unifomres-mx/catalogo.html','utf8');

const items = [
  { id: 9,  nombre: "Bota Big Rig 6in Punta Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Seguridad", img: "https://www.upefr.mx/cdn/shop/files/10042550_1.jpg", desc: "Bota de trabajo con punta de composite impermeable de 6 pulgadas. Suela antideslizante y plantilla de memoria. Ideal para trabajo pesado en ambientes humedo. Modelo 10042550." },
  { id: 10, nombre: "Bota Big Rig 8in Punta Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Seguridad", img: "https://www.upefr.mx/cdn/shop/files/10053573_1.jpg", desc: "Bota de trabajo de 8 pulgadas con punta de composite y tecnologia impermeable. Mayor proteccion de tobillo, suela de hule antideslizante resistente a aceites. Modelo 10053573." },
  { id: 11, nombre: "Bota Big Rig Impermeable Puntera Compuesta Classic", categoria: "calzado", marca: "ARIAT", etiqueta: "Impermeable", img: "https://www.upefr.mx/cdn/shop/files/10033993_1.jpg", desc: "Bota de trabajo con puntera compuesta e impermeabilidad avanzada. Soporte de arco integrado y amortiguacion ATS para largas jornadas. Modelo 10033993." },
  { id: 12, nombre: "Bota Chelsea Composite Impermeable Cuna", categoria: "calzado", marca: "ARIAT", etiqueta: "Sin Agujetas", img: "https://www.upefr.mx/cdn/shop/files/10061115_1.jpg", desc: "Bota estilo Chelsea sin agujetas con punta de composite y cuna de varilla. Facil de poner y quitar. Impermeable, suela antifatiga. Modelo 10061115." },
  { id: 13, nombre: "Bota Big Rig BOA Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Sistema BOA", img: "https://www.upefr.mx/cdn/shop/files/10053617_1.jpg", desc: "Bota con sistema de cierre BOA para ajuste preciso. Punta de composite impermeable. Amortiguacion superior y suela de traccion maxima. Modelo 10053617." },
  { id: 14, nombre: "Bota Rebar Flex Western Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Western", img: "https://www.upefr.mx/cdn/shop/files/10034157_1.jpg", desc: "Diseno western con punta de composite y membrana impermeable. Ideal para construccion, campo y sitios de obra. Horma ancha de comfort premium. Modelo 10034157." },
  { id: 15, nombre: "Bota Slip-On Cuna Material Compuesto", categoria: "calzado", marca: "ARIAT", etiqueta: "Sin Agujetas", img: "https://www.upefr.mx/cdn/shop/files/10053613_1.jpg", desc: "Bota slip-on con punta de material compuesto, cuna de varilla e impermeabilidad. Comoda y resistente, facil de colocar. Para trabajo en planta o campo. Modelo 10053613." },
  { id: 16, nombre: "Bota Mocasin Cuna Varilla Impermeable 6in", categoria: "calzado", marca: "ARIAT", etiqueta: "Mocasin", img: "https://www.upefr.mx/cdn/shop/files/10053615_1.jpg", desc: "Bota estilo mocasin de 6 pulgadas con cuna de varilla de refuerzo y punta de material compuesto. Impermeable, suela antideslizante. Modelo 10053615." },
  { id: 17, nombre: "Bota Big Rig Puntera Compuesta Clasica", categoria: "calzado", marca: "ARIAT", etiqueta: "Trabajo Pesado", img: "https://www.upefr.mx/cdn/shop/files/10033966_1.jpg", desc: "Bota de trabajo clasica Big Rig con puntera compuesta de alto impacto. Piel de grano completo, suela de hule resistente a resbalones. Para uso industrial. Modelo 10033966." },
  { id: 18, nombre: "Bota WorkHog CSA Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "CSA", img: "https://www.upefr.mx/cdn/shop/files/10042554_1.jpg", desc: "Bota WorkHog certificada CSA con puntera compuesta y membrana impermeable. Maxima proteccion para ambientes industriales exigentes. Suela no conductora. Modelo 10042554." },
  { id: 19, nombre: "Bota WorkHog CSA XTR Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "CSA XTR", img: "https://www.upefr.mx/cdn/shop/files/10042491_1.jpg", desc: "Bota WorkHog XTR con certificacion CSA y membrana impermeable avanzada. Mayor traccion en terrenos dificiles, soporte de tobillo reforzado. Modelo 10042491." },
  { id: 20, nombre: "Bota Rebar Flex VentTEK Incognito Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "VentTEK", img: "https://www.upefr.mx/cdn/shop/files/10040432_1.jpg", desc: "Bota con tecnologia VentTEK para ventilacion activa. Punta de composite con diseno tipo zapatilla deportiva. Ligera, flexible y protegida. Modelo 10040432." },
  { id: 21, nombre: "Bota Big Rig Tread VentTEK Puntera Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "VentTEK", img: "https://www.upefr.mx/cdn/shop/files/10050834_1.jpg", desc: "Bota con sistema VentTEK y puntera compuesta. Suela de traccion Big Tread para maximo agarre en superficies resbaladizas. Modelo 10050834." },
  { id: 22, nombre: "Bota WorkHog CSA Aislante Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Aislante", img: "https://www.upefr.mx/cdn/shop/files/10042552_1.jpg", desc: "Bota WorkHog con aislamiento termico, certificacion CSA y membrana impermeable. Ideal para trabajo en ambientes frios y humedos. Modelo 10042552." },
  { id: 23, nombre: "Bota Edge LTE Moc Puntera Compuesta Ligera", categoria: "calzado", marca: "ARIAT", etiqueta: "Ligera", img: "https://www.upefr.mx/cdn/shop/files/10044578_1.jpg", desc: "Bota ultraligera estilo mocasin con puntera compuesta. Diseno Edge LTE para maxima comodidad durante largas jornadas de pie. Modelo 10044578." },
  { id: 24, nombre: "Bota Stump Jumper BOA 8in Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "Sistema BOA", img: "https://www.upefr.mx/cdn/shop/files/10048059_1.jpg", desc: "Bota Stump Jumper de 8 pulgadas con sistema BOA, punta de composite e impermeabilidad. Diseno forestal de alto rendimiento para terrenos dificiles. Modelo 10048059." },
  { id: 25, nombre: "Bota Stump Jumper BOA 6in Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "Sistema BOA", img: "https://www.upefr.mx/cdn/shop/files/10048060_1.jpg", desc: "Bota Stump Jumper de 6 pulgadas con sistema de cierre BOA y punta de composite. Ligera, impermeable y de alto agarre. Modelo 10048060." },
  { id: 26, nombre: "Bota Big Rig Chelsea Impermeable Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "Chelsea", img: "https://www.upefr.mx/cdn/shop/files/10042544_1.jpg", desc: "Bota Big Rig estilo Chelsea con puntera compuesta e impermeabilidad total. Sin agujetas, ajuste elastico lateral. Para uso industrial diario. Modelo 10042544." },
  { id: 27, nombre: "Bota Stump Jumper Sin Agujetas Composite", categoria: "calzado", marca: "ARIAT", etiqueta: "Sin Agujetas", img: "https://www.upefr.mx/cdn/shop/files/10038282_1.jpg", desc: "Bota Stump Jumper sin agujetas con punta compuesta impermeable. Diseno slip-on practico para trabajo forestal e industrial. Modelo 10038282." },
  { id: 28, nombre: "Bota Intrepid Live Wire Composite Impermeable", categoria: "calzado", marca: "ARIAT", etiqueta: "Premium", img: "https://www.upefr.mx/cdn/shop/files/10050829_1.jpg", desc: "Bota Intrepid Live Wire con tecnologia de punta de composite e impermeabilidad avanzada. Construccion premium para las condiciones mas exigentes. Modelo 10050829." }
];

const newProductLines = items.map(p => {
  return `        { id: ${p.id}, nombre: "${p.nombre}", categoria: "${p.categoria}", marca: "${p.marca}", etiqueta: "${p.etiqueta}", img: "${p.img}", desc: "${p.desc}" }`;
}).join(',\n');

const target = '    ];\n\n    let productos = JSON.parse';
if (!content.includes(target)) {
  console.error('Target string not found!');
  process.exit(1);
}

content = content.replace(target, ',\n' + newProductLines + '\n    ];\n\n    let productos = JSON.parse');
fs.writeFileSync('C:/Users/angel/upe-unifomres-mx/catalogo.html', content, 'utf8');
console.log('Done. Products added:', items.length);
