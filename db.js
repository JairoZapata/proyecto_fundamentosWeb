let carros =  [
    {
        nombre: "Sequoia",
        categoria: "Sitework & Site Utilities",
        imagen: "https://st1.uvnimg.com/dims4/default/26006d5/2147483647/thumbnail/1024x576/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F74%2F8b%2F226618f8404ba33ca8c04b3a4e27%2Ftoyota-sequoia-2023-1600-04.jpg",
        codigoProducto: "55301-271",
        precio: "$4.21B",
        modelo: 2011,
        transmicion: "5N1AA0NE3EN293517",
        color: "Teal"
    },
    {
        nombre: "Tacoma",
        categoria: "Plumbing & Medical Gas",
        imagen: "https://www.toyota.com/content/dam/toyota/upcoming-vehicles/tacoma/jellies/TAC_MY24_0032_V001_jzTzdzsEY1EiT_vA5kD0moF1R4wliwg.png",
        codigoProducto: "0145-1506",
        precio: "$437.47M",
        modelo: 1995,
        transmicion: "JM1CW2BL7D0130216",
        color: "Purple"
    },
    {
        nombre: "Millenia",
        categoria: "Epoxy Flooring",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_742966-MCO71526766185_092023-O.webp",
        codigoProducto: "25373-004",
        precio: "$283.98M",
        modelo: 1996,
        transmicion: "3G5DB03E92S595534",
        color: "Green"
    },
    {
        nombre: "Century",
        categoria: "Fire Sprinkler System",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/%2791-%2793_Buick_Century_Sedan.jpg/800px-%2791-%2793_Buick_Century_Sedan.jpg",
        codigoProducto: "0268-6723",
        precio: "$63.57M",
        modelo: 2004,
        transmicion: "WA1YD64B73N735341",
        color: "Purple"
    },
    {
        nombre: "Tracker",
        categoria: "Soft Flooring and Base",
        imagen: "https://autosdeprimera.com/wp-content/uploads/2020/11/chevrolet-tracker-turbo-premier-at-a.jpg",
        codigoProducto: "50332-0102",
        precio: "$556.34M",
        modelo: 1995,
        transmicion: "WAUVC58E04A099166",
        color: "Purple"
    },
    {
        nombre: "Cougar",
        categoria: "Asphalt Paving",
        imagen: "https://www.excelenciasdelmotor.com/sites/default/files/u7/7152445-1967-mercury-cougar-gt-s-code-std-c.jpg",
        codigoProducto: "36987-1313",
        precio: "$19.25B",
        modelo: 1989,
        transmicion: "1G6DC67A880367642",
        color: "Violet"
    },
    {
        nombre: "Element",
        categoria: "Waterproofing & Caulking",
        imagen: "https://makinas.do/wp-content/uploads/2015/07/Lujo-de-Altas-Prestaciones-Honda-en-el-Monterey-Car-Week-MAKINAS.jpg",
        codigoProducto: "42291-605",
        precio: "$202.5M",
        modelo: 2008,
        transmicion: "1C4RDJAG1DC454856",
        color: "Mauv"
    },
    {
        nombre: "Firebird Formula",
        categoria: "Soft Flooring and Base",
        imagen: "https://www.motortrend.com/uploads/sites/21/2012/07/hppp-1207-01-o-1979-pontiac-firebird-formula-side.jpg",
        codigoProducto: "12634-518",
        precio: "$836.36M",
        modelo: 1992,
        transmicion: "JN8AF5MR9CT299309",
        color: "Red"
    },
    {
        nombre: "F-350 Super Duty",
        categoria: "Casework",
        imagen: "https://media.ed.edmunds-media.com/ford/f-350-super-duty/2023/oem/2023_ford_f-350-super-duty_crew-cab-pickup_lariat_fq_oem_1_1600.jpg",
        codigoProducto: "52380-4892",
        precio: "$95.04M",
        modelo: 2006,
        transmicion: "1G4PT5SV4F4402290",
        color: "Crimson"
    },
    {
        nombre: "Bronco",
        categoria: "Electrical and Fire Alarm",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/2022_Ford_Bronco_2-Door_Big_Bend_with_Sasquatch_Package%2C_front_right%2C_10-28-2022.jpg/1200px-2022_Ford_Bronco_2-Door_Big_Bend_with_Sasquatch_Package%2C_front_right%2C_10-28-2022.jpg",
        codigoProducto: "59294-000",
        precio: "$21.91B",
        modelo: 1988,
        transmicion: "2C3CDXBGXFH092540",
        color: "Teal"
    },
    {
        nombre: "Tracker",
        categoria: "Wall Protection",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6QEOGOASKNCX3L5BY5DTDPAMKQ.webp",
        codigoProducto: "55319-162",
        precio: "$90.19M",
        modelo: 2001,
        transmicion: "2G61W5S87F9075380",
        color: "Purple"
    },
    {
        nombre: "RS 4",
        categoria: "Structural and Misc Steel (Fabrication)",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Audi_RS4_Avant_grey_Free_Car_Picture_-_Give_Credit_Via_Link_%28cropped%29.jpg/1200px-Audi_RS4_Avant_grey_Free_Car_Picture_-_Give_Credit_Via_Link_%28cropped%29.jpg",
        codigoProducto: "67046-136",
        precio: "$1.87B",
        modelo: 2008,
        transmicion: "19UUA766X8A993176",
        color: "Blue"
    },
    {
        nombre: "62",
        categoria: "HVAC",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/95/1962_Ford_Galaxie_500_XL_%285094707916%29.jpg",
        codigoProducto: "36987-2053",
        precio: "$4.32B",
        modelo: 2006,
        transmicion: "JN8AZ2KR7BT497703",
        color: "Turquoise"
    },
    {
        nombre: "Bonneville",
        categoria: "Temp Fencing, Decorative Fencing and Gates",
        imagen: "https://previews.123rf.com/images/buschmen/buschmen2006/buschmen200600399/149511190-berl%C3%ADn-05-de-mayo-de-2018-coche-de-tama%C3%B1o-completo-pontiac-bonneville-1968.jpg",
        codigoProducto: "61958-1301",
        precio: "$12.03M",
        modelo: 1987,
        transmicion: "JTEBU5JR1F5672681",
        color: "Red"
    },
    {
        nombre: "SJ",
        categoria: "Painting & Vinyl Wall Covering",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Porsche_911_Carrera_S_%287522427256%29.jpg",
        codigoProducto: "54868-6118",
        precio: "$487.29M",
        modelo: 1992,
        transmicion: "1G6YV36A285765007",
        color: "Puce"
    },
    {
        nombre: "Toronado",
        categoria: "Rebar & Wire Mesh Install",
        imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/04/oldsmobile-toronado-2686547.jpg?tf=3840x",
        codigoProducto: "36987-3014",
        precio: "$7.13B",
        modelo: 1992,
        transmicion: "WBABD33435P944707",
        color: "Violet"
    },
    {
        nombre: "TundraMax",
        categoria: "Exterior Signage",
        imagen: "https://www.carpro.com/hs-fs/hubfs/2022-Toyota-Tundra-TRD-Pro-Jerry-CarPro.jpg?width=1020&name=2022-Toyota-Tundra-TRD-Pro-Jerry-CarPro.jpg",
        codigoProducto: "60429-554",
        precio: "$808.23M",
        modelo: 2010,
        transmicion: "5UXKR2C54F0973696",
        color: "Fuscia"
    },
    {
        nombre: "Tahoe",
        categoria: "Roofing (Asphalt)",
        imagen: "https://www.chevrolet.com.pe/content/dam/chevrolet/south-america/peru/espanol/index/crossovers-and-suvs/2021-tahoe/02-images/colorizer/01-images/tahoe-cgi-negro.png?imwidth=960",
        codigoProducto: "51367-011",
        precio: "$2.7B",
        modelo: 2010,
        transmicion: "2T1BPRHE3FC117370",
        color: "Red"
    },
    {
        nombre: "DeVille",
        categoria: "Landscaping & Irrigation",
        imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/06/10-mejores-coches-lujo_6.jpg?tf=3840x",
        codigoProducto: "55316-065",
        precio: "$370.12M",
        modelo: 1992,
        transmicion: "WBASP4C5XBC862000",
        color: "Goldenrod"
    },
    {
        nombre: "Continental",
        categoria: "Framing (Steel)",
        imagen: "https://www.carrosyclasicos.com/media/k2/items/cache/a357c74e5dcf52fdc7e3c938e19974cd_XL.jpg",
        codigoProducto: "49349-379",
        precio: "n/a",
        modelo: 1996,
        transmicion: "JTDKDTB30C1189799",
        color: "Yellow"
    },
    {
        nombre: "Brat",
        categoria: "Hard Tile & Stone",
        imagen: "https://www.teletrans.com/wp-content/uploads/2021/03/alquiler-autos-de-lujo.jpg",
        codigoProducto: "10812-340",
        precio: "$2.77B",
        modelo: 1986,
        transmicion: "1G6YV36A775565691",
        color: "Red"
    },
    {
        nombre: "Dakota",
        categoria: "Asphalt Paving",
        imagen: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_20b4b858d9dc4b9f81cd7762a1db1a59.jpg",
        codigoProducto: "48951-1188",
        precio: "$81.49M",
        modelo: 2001,
        transmicion: "WDDUG7GB7FA615036",
        color: "Blue"
    },
    {
        nombre: "Avenger",
        categoria: "Sitework & Site Utilities",
        imagen: "https://todorefacciones.mx/cdn/shop/articles/historia-del-dodge-avenger_1024x1024.jpg?v=1565038009",
        codigoProducto: "37000-355",
        precio: "$145.49M",
        modelo: 1997,
        transmicion: "JN1AZ4EH3FM354955",
        color: "Teal"
    },
    {
        nombre: "LR3",
        categoria: "Retaining Wall and Brick Pavers",
        imagen: "https://avatars.mds.yandex.net/get-autoru-vos/9772983/b4cd72ba685cb42e0010e1fb672a76b3/456x342",
        codigoProducto: "0591-3703",
        precio: "$261.63M",
        modelo: 2006,
        transmicion: "WAUJC68E82A687303",
        color: "Fuscia"
    },
    {
        nombre: "VehiCROSS",
        categoria: "Rebar & Wire Mesh Install",
        imagen: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/5a36f649cf98b4d244f9611fea4d91ea2d15299a/photos/7qnHfjgXp.jpg?t=160403576766",
        codigoProducto: "30142-685",
        precio: "$12.63M",
        modelo: 2001,
        transmicion: "2D4RN7DG9BR940480",
        color: "Pink"
    },
    {
        nombre: "Probe",
        categoria: "Structural & Misc Steel Erection",
        imagen: "https://i.bstr.es/highmotor/2014/06/Probe-1-1024x619.jpg",
        codigoProducto: "65841-066",
        precio: "n/a",
        modelo: 1997,
        transmicion: "WUADNAFG4BN721525",
        color: "Indigo"
    },
    {
        nombre: "57",
        categoria: "Termite Control",
        imagen: "https://e7.pngegg.com/pngimages/913/825/png-clipart-bugatti-royale-car-bugatti-type-57-bugatti-type-13-bugatti-vintage-car-car.png",
        codigoProducto: "60913-017",
        precio: "$17.07M",
        modelo: 2007,
        transmicion: "WBAGL63453D010833",
        color: "Indigo"
    },
    {
        nombre: "Grand Vitara",
        categoria: "Structural and Misc Steel (Fabrication)",
        imagen: "https://suzukiderco.vteximg.com.br/arquivos/ids/156583-520-292/Gran-Vitara-Colors-Grey.png?v=638212453308600000",
        codigoProducto: "76237-116",
        precio: "$568.38M",
        modelo: 2008,
        transmicion: "19UUA56793A804796",
        color: "Khaki"
    },
    {
        nombre: "S60",
        categoria: "Overhead Doors",
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/51866/230889_new_volvo_s60_r-design_exterior.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*    ",
        codigoProducto: "53603-1007",
        precio: "$152.21M",
        modelo: 2008,
        transmicion: "W04GS5EC4B1411367",
        color: "Goldenrod"
    },
    {
        nombre: "LeMans",
        categoria: "Fire Sprinkler System",
        imagen: "https://cdn.motor1.com/images/mgl/x7J6P/s3/porsche-917k-1970.jpg",
        codigoProducto: "36800-066",
        precio: "$7.93B",
        modelo: 1965,
        transmicion: "WAUXL58E15A211452",
        color: "Indigo"
    },
    {
        nombre: "Torrent",
        categoria: "Glass & Glazing",
        imagen: "https://preview.redd.it/2007-pontiac-torrent-this-is-my-personal-car-and-im-curious-v0-yg7qspf44usa1.jpg?width=1080&crop=smart&auto=webp&s=513231fe12eff11940402b4b7aa5f4d85ba8814e",
        codigoProducto: "57955-5165",
        precio: "$113.53M",
        modelo: 2006,
        transmicion: "3VW467AT8CM246651",
        color: "Mauv"
    },
    {
        nombre: "400SE",
        categoria: "Elevator",
        imagen: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/-mOJBXPpxc.NWo-y2l1j.jpg?t=161307126224",
        codigoProducto: "49873-403",
        precio: "$57.56B",
        modelo: 1992,
        transmicion: "2G4WN58C291808452",
        color: "Mauv"
    },
    {
        nombre: "Monte Carlo",
        categoria: "Plumbing & Medical Gas",
        imagen: "https://www.carrosyclasicos.com/media/k2/items/cache/bb3400cb71c94c5c998d9d6fcc896dd9_XL.jpg",
        codigoProducto: "33992-0527",
        precio: "$8.36B",
        modelo: 2007,
        transmicion: "1G6DS5E34C0271260",
        color: "Orange"
    },
    {
        nombre: "S60",
        categoria: "Elevator",
        imagen: "https://hispanicmotorpress.org/wp-content/uploads/2023/11/2023-Volvo-S60-Recharge-1.jpg",
        codigoProducto: "62011-0045",
        precio: "$395.82M",
        modelo: 2010,
        transmicion: "WBAEJ13413A734729",
        color: "Green"
    },
    {
        nombre: "Savana",
        categoria: "Plumbing & Medical Gas",
        imagen: "https://static.wikia.nocookie.net/aztecakgames/images/7/73/SavannaGTABA.png/revision/latest?cb=20140228212458&path-prefix=es",
        codigoProducto: "75904-3246",
        precio: "n/a",
        modelo: 2006,
        transmicion: "YV1672MKXB2642417",
        color: "Indigo"
    },
    {
        nombre: "Q",
        categoria: "Marlite Panels (FED)",
        imagen: "https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/Mercedes-Benz-negro.-Esta-marca-fue-la-mas-vendida-en-Colombia-los-ultimos-5-anos..jpg",
        codigoProducto: "49781-054",
        precio: "n/a",
        modelo: 1995,
        transmicion: "SCFFDCBD3CG749498",
        color: "Orange"
    },
    {
        nombre: "Rocky",
        categoria: "Masonry",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_622783-MCO74844883136_032024-O.webp",
        codigoProducto: "55154-5627",
        precio: "$2.17B",
        modelo: 1992,
        transmicion: "W04GT5GCXB1771415",
        color: "Purple"
    },
    {
        nombre: "XG350",
        categoria: "Plumbing & Medical Gas",
        imagen: "https://cdn.wheel-size.com/automobile/body/hyundai-xg350-2004-2005-1665478070.9011803.jpg",
        codigoProducto: "0268-6702",
        precio: "$415.87M",
        modelo: 2002,
        transmicion: "WVWAP7AN1EE285305",
        color: "Green"
    },
    {
        nombre: "D350",
        categoria: "Structural & Misc Steel Erection",
        imagen: "https://carsales.pxcrush.net/carsales/car/dealer/bc8d0553d059f5812752575353079c20.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=900%2C600",
        codigoProducto: "64679-422",
        precio: "$386.9M",
        modelo: 1993,
        transmicion: "1G4GA5ER9CF155255",
        color: "Pink"
    },
    {
        nombre: "Protege",
        categoria: "RF Shielding",
        imagen: "https://cdn.elpopular.mx/notas/estilo/buen-gusto/2019/03/09/por-que-son-especiales-los-autos-de-lujo/por-que-son-especiales-los-autos-de-lujo-6882d55e8a4d316de42721545a94847c.jpg",
        codigoProducto: "24275-0385",
        precio: "$113.08B",
        modelo: 1998,
        transmicion: "1N6AA0EC0EN818131",
        color: "Purple"
    },
    {
        nombre: "Optima",
        categoria: "Electrical and Fire Alarm",
        imagen: "https://hips.hearstapps.com/hmg-prod/images/kia-optima-2021-1-1573550818.jpg?crop=0.812xw:0.705xh;0.184xw,0.206xh&resize=1200:*",
        codigoProducto: "11673-271",
        precio: "n/a",
        modelo: 2011,
        transmicion: "JTHBB1BA7B2302518",
        color: "Pink"
    },
    {
        nombre: "MGB",
        categoria: "Roofing (Metal)",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MG_MGB_open_roadster_1969.jpg",
        codigoProducto: "41250-605",
        precio: "n/a",
        modelo: 1977,
        transmicion: "WA1CMAFE8DD482509",
        color: "Indigo"
    },
    {
        nombre: "Ram 1500 Club",
        categoria: "Drilled Shafts",
        imagen: "https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_04d975981b5d4f5eadf11a6ed874f76a.jpg",
        codigoProducto: "49999-343",
        precio: "n/a",
        modelo: 1995,
        transmicion: "SCBZU25E31C205858",
        color: "Red"
    },
    {
        nombre: "Camaro",
        categoria: "Fire Sprinkler System",
        imagen: "https://www.shutterstock.com/image-photo/singapore-06-may-2016-real-600nw-427856797.jpg",
        codigoProducto: "37808-291",
        precio: "$111.85M",
        modelo: 2001,
        transmicion: "SCBDR33W99C459258",
        color: "Turquoise"
    },
    {
        nombre: "960",
        categoria: "Plumbing & Medical Gas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Volvo_960_front_20080331.jpg/1024px-Volvo_960_front_20080331.jpg",
        codigoProducto: "13537-196",
        precio: "$2.15B",
        modelo: 1996,
        transmicion: "WBAGH03461D367935",
        color: "Blue"
    },
    {
        nombre: "H3",
        categoria: "Structural and Misc Steel (Fabrication)",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_961316-MCO75343178158_032024-O.webp",
        codigoProducto: "60681-1806",
        precio: "$39.48B",
        modelo: 2007,
        transmicion: "1N6AA0EJ9FN851998",
        color: "Fuscia"
    },
    {
        nombre: "Concorde",
        categoria: "Waterproofing & Caulking",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZl00oZXAySiexGhQmfznMup_IM4WmvVs_Hg&s",
        codigoProducto: "54569-4391",
        precio: "$33.71M",
        modelo: 2004,
        transmicion: "WBAYF4C57FD328207",
        color: "Blue"
    },
    {
        nombre: "Bonneville",
        categoria: "Prefabricated Aluminum Metal Canopies",
        imagen: "https://www.coches.com/fotos_historicas/pontiac/Bonneville-Brougham-1979/med_pontiac_bonneville-brougham-1979_r2.jpg",
        codigoProducto: "51079-078",
        precio: "n/a",
        modelo: 1997,
        transmicion: "JH4CU2F69CC558035",
        color: "Mauv"
    },
    {
        nombre: "Bonneville",
        categoria: "Rebar & Wire Mesh Install",
        imagen: "https://cdn.buttercms.com/j0V1U4gPQwStzzde6I7h",
        codigoProducto: "55910-799",
        precio: "$3.72B",
        modelo: 1998,
        transmicion: "SAJWA4DC3BM200239",
        color: "Crimson"
    },
    {
        nombre: "Sable",
        categoria: "Granite Surfaces",
        imagen: "https://static.cargurus.com/images/forsale/2023/11/22/06/54/2008_mercury_sable-pic-5450092752953113567-1024x768.jpeg",
        codigoProducto: "54868-5440",
        precio: "$598.91M",
        modelo: 2009,
        transmicion: "WBADN53483G222289",
        color: "Aquamarine"
    }
];

const carrosPerPage = 14;
let currentPage = 1;

const displayCarros = (carros) => {
    const carrosContainer = document.getElementById('carros-container');
    carrosContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * carrosPerPage;
    const endIndex = startIndex + carrosPerPage;
    const displayedCarros = carros.slice(startIndex, endIndex);

    displayedCarros.forEach(carro => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${carro.imagen}" alt="${carro.nombre}">
            <h2>${carro.nombre}</h2>
            <p><strong>Categoría:</strong> ${carro.categoria}</p>
            <p><strong>Código Producto:</strong> ${carro.codigoProducto}</p>
            <p><strong>Precio:</strong> ${carro.precio}</p>
            <p><strong>Modelo:</strong> ${carro.modelo}</p>
            <p><strong>Transmisión:</strong> ${carro.transmicion}</p>
            <p><strong>Color:</strong> ${carro.color}</p>
        `;
        carrosContainer.appendChild(card);
    });
}

const displayPagination = (totalCarros) => {
    const totalPages = Math.ceil(totalCarros / carrosPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayCarros(carros);
            displayPagination(carros.length);
        });
        paginationContainer.appendChild(button);
    }
}

// localStorage.setItem('carros', JSON.stringify(carros));
const handleSubmit = (event) => {
    event.preventDefault();

    // Valido el formulario
    const formulario = document.getElementById("registroForm");
    const errores = [];

    if (formulario.nombre.value === "") {
        errores.push("El campo Nombre es obligatorio.");
    }

    if (formulario.categoria.value === "") {
        errores.push("El campo Categoría es obligatorio.");
    }

    if (formulario.imagen.value === "") {
        errores.push("El campo Imagen es obligatorio.");
    }

    if (formulario.codigo.value === "") {
        errores.push("El campo Código Producto es obligatorio.");
    }

    if (formulario.precio.value === "") {
        errores.push("El campo Precio es obligatorio.");
    }

    if (formulario.modelo.value == "") {
        errores.push("El campo Modelo es obligatorio.");
    }

    if (formulario.transmicion.value == "") {
        errores.push("El campo Transmicion es obligatorio.");
    }

    if (formulario.color.value == "") {
        errores.push("El campo Color es obligatorio.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false; // Evitar que el formulario se envíe
    }

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const codigo = document.getElementById("codigo").value;
    const precio = document.getElementById("precio").value;
    const modelo = document.getElementById("modelo").value;
    const transmicion = document.getElementById("transmicion").value;
    const color = document.getElementById("color").value;

    const nuevoCarro = {
        nombre,
        categoria,
        imagen,
        codigo,
        precio,
        modelo,
        transmicion,
        color
    }

    carros.push(nuevoCarro);

    // Guardar el nuevo carro en localStorage
    const carrosRegistrados = JSON.parse(localStorage.getItem('carros')) || [];
    carrosRegistrados.push(nuevoCarro);
    localStorage.setItem('carros', JSON.stringify(carrosRegistrados));

    alert("¡El carro ha sido registrado correctamente!");

    document.getElementById("registroForm").reset();
};

const mostrarErrores = (errores) => {
    localStorage.setItem("errores", JSON.stringify(errores));
    window.location.href = "errores.html";
};

const buscar = () => {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const categoria = document.getElementById('categoria').value.toLowerCase();
    const modelo = document.getElementById('modelo').value;
    const tbody = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0];

    tbody.innerHTML = `<tr><td colspan="8">Buscando...</td></tr>`;

    setTimeout(() => {
        const resultados = carros.filter(carro => 
            (nombre === "" || carro.nombre.toLowerCase().includes(nombre)) &&
            (categoria === "" || carro.categoria.toLowerCase().includes(categoria)) &&
            (modelo === "" || carro.modelo.toString() === modelo)
        );
    
        mostrarResultados(resultados);
    }, 2000);    
}

const mostrarResultados = (resultados) => {
    const tbody = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; // Limpiar resultados anteriores

    resultados.forEach(carro => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = carro.nombre;
        row.insertCell(1).innerText = carro.categoria;
        row.insertCell(2).innerHTML = `<img src="${carro.imagen}" alt="${carro.nombre}" width="30">`;
        row.insertCell(3).innerText = carro.codigoProducto;
        row.insertCell(4).innerText = `$ `.carro.precio;
        row.insertCell(5).innerText = carro.modelo;
        row.insertCell(6).innerText = carro.transmicion;
        row.insertCell(7).innerText = carro.color;
    });
}

// Función para llenar los selects
const populateSelects = () => {
    const categoriaSelect = document.getElementById('categoria');
    const imagenSelect = document.getElementById('imagen');
    const transmicionSelect = document.getElementById('transmicion');

    // Usar Set para evitar duplicados
    const categorias = new Set();
    const imagenes = new Set(); 
    const transmisiones = new Set();

    carros.forEach(carro => {
        categorias.add(carro.categoria);
        imagenes.add(carro.imagen);
        transmisiones.add(carro.transmicion);
    });

    // Llenar el select de categorías
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        categoriaSelect.appendChild(option);
    });

    // Llenar el select de transmisiones
    transmisiones.forEach(transmicion => {
        const option = document.createElement('option');
        option.value = transmicion;
        option.textContent = transmicion;
        transmicionSelect.appendChild(option);
    });
    
}

// Ejecutar la función para llenar los selects al cargar la página
document.addEventListener('DOMContentLoaded', populateSelects);


window.onload = () => {
    // Recuperar los carros del localStorage o usar la lista vacía si no hay datos
    const carrosRegistrados = JSON.parse(localStorage.getItem('carros')) || [];
    // Si hay carros registrados, mostrarlos en la página
    if (carrosRegistrados.length > 0) {
        carros = carrosRegistrados;
        displayCarros(carros);
    }
    // Mostrar paginación 
    displayPagination(carros.length);
};