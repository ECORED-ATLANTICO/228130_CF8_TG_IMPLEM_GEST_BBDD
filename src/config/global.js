export default {
  global: {
    componenteFormativo: 'Conceptos básicos de sistemas operativos',
    descripcionCurso:
      'Es importante hoy en día conocer cómo se pueden generar escenarios de seguridad, acceso remoto, sitios web e integración de las organizaciones con los servicios en la nube; esto se logra habilitando un servidor que permita la creación y gestión de procesos que determinen tareas fundamentales como envíos de correos, seguridad de la información, almacenamiento de <em>software</em> y demás componentes que hacen parte del sistema operativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['animation-size-1', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['animation-size-2', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['animation-lr-1', 'd-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a los sistemas operativos de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Licenciamientos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos básicos de redes y <em>networking</em>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instalación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'DHCP',
      significado:
        'el protocolo de configuración dinámica de host es un protocolo de red de tipo cliente/servidor, mediante el cual, un servidor DHCP asigna dinámicamente una dirección IP y otros parámetros de configuración de red a cada dispositivo, en una red para que puedan comunicarse con otras redes IP.',
    },
    {
      termino: 'FTP',
      significado:
        'el protocolo de transferencia de archivos es un protocolo de red para la transferencia de archivos entre sistemas conectados a una red TCP, basado en la arquitectura cliente-servidor.',
    },
    {
      termino: 'HTTP',
      significado:
        'el protocolo de transferencia de hipertexto, es el protocolo de comunicación que permite las transferencias de información a través de archivos en la <em>World Wide Web</em>.',
    },
    {
      termino: 'IGP',
      significado:
        'el <em>Interior Gateway Protocol</em>, protocolo de pasarela interna o protocolo de pasarela interior, hace referencia a los usados dentro de un sistema autónomo.',
    },
    {
      termino: 'IP',
      significado:
        'una dirección IP es una dirección única que identifica a un dispositivo en internet o en una red local. IP significa “protocolo de internet”, que es el conjunto de reglas que rigen el formato de los datos enviados a través de Internet o la red local.',
    },
    {
      termino: 'ISNS',
      significado:
        'el protocolo propuesto del servicio de nombres de almacenamiento de internet permite el descubrimiento, la administración y la configuración automatizados de dispositivos <em>iSCSI</em> y <em>Fibre Channel</em> en una red TCP / IP.',
    },
    {
      termino: '<em>NETBIOS</em>',
      significado:
        'una especificación de interfaz para acceso a servicios de red, es decir, una capa de <em>software</em> desarrollado para enlazar un sistema operativo de red con <em>hardware</em> específico.',
    },
    {
      termino: 'NFS',
      significado:
        '<em>Network File System</em>, o NFS, es un protocolo de nivel de aplicación, según el Modelo OSI. Es utilizado para sistemas de archivos distribuidos en un entorno de red de computadoras de área local.',
    },
    {
      termino: 'OSI',
      significado:
        'es un estándar que tiene por objetivo conseguir interconectar sistemas de procedencia distinta para que estos pudieran intercambiar información, sin ningún tipo de impedimentos debido a los protocolos con los que estos operaban de forma propia según su fabricante.',
    },
    {
      termino: 'RIP',
      significado:
        'el Protocolo de Información de Encaminamiento, <em>Routing Information Protocol</em>, es un protocolo de puerta de enlace interna o interior utilizado por los <em>routers</em> o encaminadores para intercambiar información acerca de redes del <em>Internet Protocol</em> a las que se encuentran conectados.',
    },
    {
      termino: 'TCP',
      significado:
        'protocolo de control de transmisión, es uno de los protocolos fundamentales en internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cura, N. (2020). <em>Fundamentos de Sistemas Operativos</em>. Universitas.',
    },
    {
      referencia:
        'Kurose, J. (2017). <em>Redes De Computadoras: Un Enfoque Descendente.</em> Séptima Edición. Pearson Educación. ',
      link:
        'https://www.tecnologicoamazonasygs.edu.pe/biblioteca/files/original/59ec5708933778b10b8b6f711f91f9bb.pdf',
    },
    {
      referencia:
        'Lezcano, M. (2018). <em>Fundamentos de Sistemas Operativos: Entornos De Trabajo = Fundamentals of Operating Systems: Work Environments</em>. Fondo Editorial Universidad Cooperativa de Colombia.',
      link:
        'https://www.researchgate.net/profile/Mateo_Lezcano2/publication/326311409_Fundamentos_de_sistemas_operativos_Entornos_de_trabajo/links/5b48c5500f7e9b4637d5cf54/Fundamentos-de-sistemas-operativos-Entornos-de-trabajo.pdf',
    },
    {
      referencia:
        'Sánchez, M., Barchino, R. & Martínez, J. (2020) <em>Redes de Computadores.</em> Universidad de Alcalá, Servicio de Publicaciones. ',
    },
    {
      referencia:
        'Serna, M. y Allende, S. (2020). <em>Sistemas Operativos: Linux.</em> Jorge Sarmiento Editor – Universitas.',
    },
    {
      referencia:
        'Tanenbaum, A., Vidal, A. & Wetherall, D. (2022). <em>Redes De Computadoras.</em> 5a. Edición. Pearson Educación. ',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25733w/redes_de_computadoras-freelibros-org.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
