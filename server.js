// COLE AQUI A TUA LISTA GIGANTE DE PRODUTOS
const defaultProducts = [
  {
    "id": "2931",
    "name": "Massa Tomate Tommi 210G Lata Abertura Facil",
    "category": "alimenticios",
    "price": 764,
    "stock": 100,
    "desc": "Massa Tomate Tommi 210G Lata Abertura Facil",
    "img": "/imagens/massa-tomate-tommi-210g-lata-abertura-facil.jpg",
    "encomenda": false
  },

  {
    "id": "3",
    "name": "Atum Em Posta Branco Food Love 160G Lata",
    "category": "alimenticios",
    "price": 2237,
    "stock": 100,
    "desc": "Atum Em Posta Branco Food Love 160G Lata",
    "img": "/imagens/atum-em-posta-branco-food-love-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "4",
    "name": "Tomate Pelado Food Love 800G Lata",
    "category": "alimenticios",
    "price": 3262,
    "stock": 100,
    "desc": "Tomate Pelado Food Love 800G Lata",
    "img": "/imagens/tomate-pelado-food-love-800g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "5",
    "name": "Tomate Pelado Food Love 400G Lata",
    "category": "alimenticios",
    "price": 1638,
    "stock": 100,
    "desc": "Tomate Pelado Food Love 400G Lata",
    "img": "/imagens/tomate-pelado-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "6",
    "name": "Sardinhas Em Oleo Food Love 125G Lata",
    "category": "alimenticios",
    "price": 1511,
    "stock": 100,
    "desc": "Sardinhas Em Oleo Food Love 125G Lata",
    "img": "/imagens/sardinhas-em-oleo-food-love-125g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "7",
    "name": "Salsicha De Vaca Groot 400G Lata",
    "category": "alimenticios",
    "price": 3186,
    "stock": 100,
    "desc": "Salsicha De Vaca Groot 400G Lata",
    "img": "/imagens/salsicha-de-vaca-groot-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "8",
    "name": "Salsicha De Vaca Food Love 400G Lata",
    "category": "alimenticios",
    "price": 3082,
    "stock": 100,
    "desc": "Salsicha De Vaca Food Love 400G Lata",
    "img": "/imagens/salsicha-de-vaca-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "9",
    "name": "Salsicha De Galinha Groot 400G Lata",
    "category": "alimenticios",
    "price": 2815,
    "stock": 100,
    "desc": "Salsicha De Galinha Groot 400G Lata",
    "img": "/imagens/salsicha-de-galinha-groot-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "10",
    "name": "Salsicha De Aves Food Love 400G Lata",
    "category": "alimenticios",
    "price": 3186,
    "stock": 100,
    "desc": "Salsicha De Aves Food Love 400G Lata",
    "img": "/imagens/salsicha-de-aves-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "11",
    "name": "Salada De Fruta Em Calda Food Love 820G Lata",
    "category": "alimenticios",
    "price": 4313,
    "stock": 100,
    "desc": "Salada De Fruta Em Calda Food Love 820G Lata",
    "img": "/imagens/salada-de-fruta-em-calda-food-love-820g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "12",
    "name": "Salada De Fruta Em Calda Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2716,
    "stock": 100,
    "desc": "Salada De Fruta Em Calda Food Love 425G Lata",
    "img": "/imagens/salada-de-fruta-em-calda-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "13",
    "name": "Pilchard Tomate Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2593,
    "stock": 100,
    "desc": "Pilchard Tomate Food Love 425G Lata",
    "img": "/imagens/pilchard-tomate-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "14",
    "name": "Pilchard Tomate Food Love 155G Lata",
    "category": "alimenticios",
    "price": 1111,
    "stock": 100,
    "desc": "Pilchard Tomate Food Love 155G Lata",
    "img": "/imagens/pilchard-tomate-food-love-155g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "15",
    "name": "Pilchard Picante Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2593,
    "stock": 100,
    "desc": "Pilchard Picante Food Love 425G Lata",
    "img": "/imagens/pilchard-picante-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "16",
    "name": "Pilchard Picante Food Love 155G Lata",
    "category": "alimenticios",
    "price": 1111,
    "stock": 100,
    "desc": "Pilchard Picante Food Love 155G Lata",
    "img": "/imagens/pilchard-picante-food-love-155g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "17",
    "name": "Pessego Em Calda Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2293,
    "stock": 100,
    "desc": "Pessego Em Calda Food Love 425G Lata",
    "img": "/imagens/pessego-em-calda-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "18",
    "name": "Pera Em Calda Food Love 820G Lata",
    "category": "alimenticios",
    "price": 3617,
    "stock": 100,
    "desc": "Pera Em Calda Food Love 820G Lata",
    "img": "/imagens/pera-em-calda-food-love-820g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "19",
    "name": "Pera Em Calda Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2156,
    "stock": 100,
    "desc": "Pera Em Calda Food Love 425G Lata",
    "img": "/imagens/pera-em-calda-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "20",
    "name": "Mistura De Legumes Food Love 400G Lata",
    "category": "alimenticios",
    "price": 354,
    "stock": 100,
    "desc": "Mistura De Legumes Food Love 400G Lata",
    "img": "/imagens/mistura-de-legumes-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "21",
    "name": "Mini Salsicha De Vaca Food Love 405G Lata",
    "category": "alimenticios",
    "price": 2697,
    "stock": 100,
    "desc": "Mini Salsicha De Vaca Food Love 405G Lata",
    "img": "/imagens/mini-salsicha-de-vaca-food-love-405g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "22",
    "name": "Mini Salsicha De Vaca Food Love 180G Lata",
    "category": "alimenticios",
    "price": 1615,
    "stock": 100,
    "desc": "Mini Salsicha De Vaca Food Love 180G Lata",
    "img": "/imagens/mini-salsicha-de-vaca-food-love-180g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "23",
    "name": "Mini Salsicha De Aves Food Love 405G Lata",
    "category": "alimenticios",
    "price": 2697,
    "stock": 100,
    "desc": "Mini Salsicha De Aves Food Love 405G Lata",
    "img": "/imagens/mini-salsicha-de-aves-food-love-405g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "24",
    "name": "Mini Salsicha De Aves Food Love 180G Lata",
    "category": "alimenticios",
    "price": 1615,
    "stock": 100,
    "desc": "Mini Salsicha De Aves Food Love 180G Lata",
    "img": "/imagens/mini-salsicha-de-aves-food-love-180g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "25",
    "name": "Milho Doce Food Love 425G Lata",
    "category": "alimenticios",
    "price": 1283,
    "stock": 100,
    "desc": "Milho Doce Food Love 425G Lata",
    "img": "/imagens/milho-doce-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "26",
    "name": "Milho Doce Food Love 340G Lata",
    "category": "alimenticios",
    "price": 1296,
    "stock": 100,
    "desc": "Milho Doce Food Love 340G Lata",
    "img": "/imagens/milho-doce-food-love-340g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "27",
    "name": "Massa Tomate Tommi 70G Lata Abertura Facil",
    "category": "alimenticios",
    "price": 245,
    "stock": 100,
    "desc": "Massa Tomate Tommi 70G Lata Abertura Facil",
    "img": "/imagens/massa-tomate-tommi-70g-lata-abertura-facil.jpg",
    "encomenda": false
  },
  {
    "id": "28",
    "name": "Massa Tomate Tommi 400G Lata Abertura Facil",
    "category": "alimenticios",
    "price": 1214,
    "stock": 100,
    "desc": "Massa Tomate Tommi 400G Lata Abertura Facil",
    "img": "/imagens/massa-tomate-tommi-400g-lata-abertura-facil.jpg",
    "encomenda": false
  },
  {
    "id": "29",
    "name": "Massa Tomate Tommi 2.2Kg Lata",
    "category": "alimenticios",
    "price": 5610,
    "stock": 100,
    "desc": "Massa Tomate Tommi 2.2Kg Lata",
    "img": "/imagens/massa-tomate-tommi-2-2kg-lata.jpg",
    "encomenda": false
  },
  {
    "id": "30",
    "name": "Maca Em Calda Food Love 820G Lata",
    "category": "alimenticios",
    "price": 4013,
    "stock": 100,
    "desc": "Maca Em Calda Food Love 820G Lata",
    "img": "/imagens/maca-em-calda-food-love-820g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "31",
    "name": "Maca Em Calda Food Love 425G Lata",
    "category": "alimenticios",
    "price": 2293,
    "stock": 100,
    "desc": "Maca Em Calda Food Love 425G Lata",
    "img": "/imagens/maca-em-calda-food-love-425g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "32",
    "name": "Grao De Bico Food Love 400G Lata",
    "category": "alimenticios",
    "price": 1692,
    "stock": 100,
    "desc": "Grao De Bico Food Love 400G Lata",
    "img": "/imagens/grao-de-bico-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "33",
    "name": "Fiambre De Vaca Food Love 800G Lata",
    "category": "alimenticios",
    "price": 4194,
    "stock": 100,
    "desc": "Fiambre De Vaca Food Love 800G Lata",
    "img": "/imagens/fiambre-de-vaca-food-love-800g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "34",
    "name": "Fiambre De Galinha Food Love 190G Lata",
    "category": "alimenticios",
    "price": 1793,
    "stock": 100,
    "desc": "Fiambre De Galinha Food Love 190G Lata",
    "img": "/imagens/fiambre-de-galinha-food-love-190g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "35",
    "name": "Feijao Preto Food Love 3000G Lata",
    "category": "alimenticios",
    "price": 8463,
    "stock": 100,
    "desc": "Feijao Preto Food Love 3000G Lata",
    "img": "/imagens/feijao-preto-food-love-3000g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "36",
    "name": "Ervilhas Verdes Food Love 400G Lata",
    "category": "alimenticios",
    "price": 1255,
    "stock": 100,
    "desc": "Ervilhas Verdes Food Love 400G Lata",
    "img": "/imagens/ervilhas-verdes-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "37",
    "name": "Doce Food Love Morango 260G Frasco",
    "category": "alimenticios",
    "price": 2320,
    "stock": 100,
    "desc": "Doce Food Love Morango 260G Frasco",
    "img": "/imagens/doce-food-love-morango-260g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "38",
    "name": "Doce Food Love Maca 260G Frasco",
    "category": "alimenticios",
    "price": 2115,
    "stock": 100,
    "desc": "Doce Food Love Maca 260G Frasco",
    "img": "/imagens/doce-food-love-maca-260g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "39",
    "name": "Doce Food Love Cereja 260G Frasco",
    "category": "alimenticios",
    "price": 2798,
    "stock": 100,
    "desc": "Doce Food Love Cereja 260G Frasco",
    "img": "/imagens/doce-food-love-cereja-260g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "40",
    "name": "Doce Food Love Bagas Mistas 260G Frasco",
    "category": "alimenticios",
    "price": 2866,
    "stock": 100,
    "desc": "Doce Food Love Bagas Mistas 260G Frasco",
    "img": "/imagens/doce-food-love-bagas-mistas-260g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "41",
    "name": "Doce Food Love Amora Preta 260G Frasco",
    "category": "alimenticios",
    "price": 2730,
    "stock": 100,
    "desc": "Doce Food Love Amora Preta 260G Frasco",
    "img": "/imagens/doce-food-love-amora-preta-260g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "42",
    "name": "Cogumelos Laminados Food Love 400G Lata",
    "category": "alimenticios",
    "price": 2184,
    "stock": 100,
    "desc": "Cogumelos Laminados Food Love 400G Lata",
    "img": "/imagens/cogumelos-laminados-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "43",
    "name": "Cogumelos Inteiros Food Love 400G Lata",
    "category": "alimenticios",
    "price": 2033,
    "stock": 100,
    "desc": "Cogumelos Inteiros Food Love 400G Lata",
    "img": "/imagens/cogumelos-inteiros-food-love-400g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "44",
    "name": "Azeitona Verde Inteira Tremoceira 360G Frasco",
    "category": "alimenticios",
    "price": 5305,
    "stock": 100,
    "desc": "Azeitona Verde Inteira Tremoceira 360G Frasco",
    "img": "/imagens/azeitona-verde-inteira-tremoceira-360g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "45",
    "name": "Pure De Batata Em Flocos Ferbar 250G",
    "category": "alimenticios",
    "price": 4777,
    "stock": 100,
    "desc": "Pure De Batata Em Flocos Ferbar 250G",
    "img": "/imagens/pure-de-batata-em-flocos-ferbar-250g.jpg",
    "encomenda": false
  },
  {
    "id": "46",
    "name": "Farinha Amido De Milho Maizena 400G",
    "category": "alimenticios",
    "price": 6372,
    "stock": 100,
    "desc": "Farinha Amido De Milho Maizena 400G",
    "img": "/imagens/farinha-amido-de-milho-maizena-400g.jpg",
    "encomenda": false
  },
  {
    "id": "47",
    "name": "Cereal E Chocolate Chooks Nacional 300G",
    "category": "alimenticios",
    "price": 3412,
    "stock": 100,
    "desc": "Cereal E Chocolate Chooks Nacional 300G",
    "img": "/imagens/cereal-e-chocolate-chooks-nacional-300g.jpg",
    "encomenda": false
  },
  {
    "id": "48",
    "name": "Tempero Portugues Boa Mesa 1L",
    "category": "alimenticios",
    "price": 4727,
    "stock": 100,
    "desc": "Tempero Portugues Boa Mesa 1L",
    "img": "/imagens/tempero-portugues-boa-mesa-1l.jpg",
    "encomenda": false
  },
  {
    "id": "49",
    "name": "Tempero Portugues Boa Mesa 500Ml",
    "category": "alimenticios",
    "price": 2667,
    "stock": 100,
    "desc": "Tempero Portugues Boa Mesa 500Ml",
    "img": "/imagens/tempero-portugues-boa-mesa-500ml.jpg",
    "encomenda": false
  },
  {
    "id": "50",
    "name": "Caldos Em Cubo Kicaldo Tomate 10G 4Pcs",
    "category": "alimenticios",
    "price": 481,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Tomate 10G 4Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-tomate-10g-4pcs.jpg",
    "encomenda": false
  },
  {
    "id": "51",
    "name": "Ccaldos Em Po Kicaldo Carne 15G Fita 8Pcs",
    "category": "alimenticios",
    "price": 518,
    "stock": 100,
    "desc": "Ccaldos Em Po Kicaldo Carne 15G Fita 8Pcs",
    "img": "/imagens/ccaldos-em-po-kicaldo-carne-15g-fita-8pcs.jpg",
    "encomenda": false
  },
  {
    "id": "52",
    "name": "Caldos Em Cubo Kicaldo Carne 10G 12Pcs",
    "category": "alimenticios",
    "price": 1363,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Carne 10G 12Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-carne-10g-12pcs.jpg",
    "encomenda": false
  },
  {
    "id": "53",
    "name": "Caldos Em Cubo Kicaldo Carne 10G 1Pcs",
    "category": "alimenticios",
    "price": 74,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Carne 10G 1Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-carne-10g-1pcs.jpg",
    "encomenda": false
  },
  {
    "id": "54",
    "name": "Caldos Em Po Kicaldo Carne 1Kg Balde",
    "category": "alimenticios",
    "price": 8477,
    "stock": 100,
    "desc": "Caldos Em Po Kicaldo Carne 1Kg Balde",
    "img": "/imagens/caldos-em-po-kicaldo-carne-1kg-balde.jpg",
    "encomenda": false
  },
  {
    "id": "55",
    "name": "Caldos Em Cubo Kicaldo Carne 10G 4Pcs",
    "category": "alimenticios",
    "price": 481,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Carne 10G 4Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-carne-10g-4pcs.jpg",
    "encomenda": false
  },
  {
    "id": "56",
    "name": "Caldos Em Po Kicaldo Galinha 15G Fita 8Pcs",
    "category": "alimenticios",
    "price": 518,
    "stock": 100,
    "desc": "Caldos Em Po Kicaldo Galinha 15G Fita 8Pcs",
    "img": "/imagens/caldos-em-po-kicaldo-galinha-15g-fita-8pcs.jpg",
    "encomenda": false
  },
  {
    "id": "57",
    "name": "Caldos Em Cubo Kicaldo Galinha 10G 12Pcs",
    "category": "alimenticios",
    "price": 1363,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Galinha 10G 12Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-galinha-10g-12pcs.jpg",
    "encomenda": false
  },
  {
    "id": "58",
    "name": "Caldos Em Cubo Kicaldo Galinha 10G 1Pcs",
    "category": "alimenticios",
    "price": 74,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Galinha 10G 1Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-galinha-10g-1pcs.jpg",
    "encomenda": false
  },
  {
    "id": "59",
    "name": "Caldos Em Cubo Kicaldo Galinha 10G 4Pcs",
    "category": "alimenticios",
    "price": 481,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Galinha 10G 4Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-galinha-10g-4pcs.jpg",
    "encomenda": false
  },
  {
    "id": "60",
    "name": "Caldos Em Cubo Kicaldo Simples 10G 4Pcs",
    "category": "alimenticios",
    "price": 481,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Simples 10G 4Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-simples-10g-4pcs.jpg",
    "encomenda": false
  },
  {
    "id": "61",
    "name": "Caldos Em Cubo Kicaldo Tomate 10G 12Pcs",
    "category": "alimenticios",
    "price": 1363,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Tomate 10G 12Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-tomate-10g-12pcs.jpg",
    "encomenda": false
  },
  {
    "id": "62",
    "name": "Caldos Em Cubo Kicaldo Tomate 10G 1Pcs",
    "category": "alimenticios",
    "price": 74,
    "stock": 100,
    "desc": "Caldos Em Cubo Kicaldo Tomate 10G 1Pcs",
    "img": "/imagens/caldos-em-cubo-kicaldo-tomate-10g-1pcs.jpg",
    "encomenda": false
  },
  {
    "id": "63",
    "name": "Caldos Em Po Kicaldo Tomate 15G Fita 8Pcs",
    "category": "alimenticios",
    "price": 518,
    "stock": 100,
    "desc": "Caldos Em Po Kicaldo Tomate 15G Fita 8Pcs",
    "img": "/imagens/caldos-em-po-kicaldo-tomate-15g-fita-8pcs.jpg",
    "encomenda": false
  },
  {
    "id": "64",
    "name": "Caldos Em Cubo Vita Galinha 10G 100Pcs",
    "category": "alimenticios",
    "price": 7661,
    "stock": 100,
    "desc": "Caldos Em Cubo Vita Galinha 10G 100Pcs",
    "img": "/imagens/caldos-em-cubo-vita-galinha-10g-100pcs.jpg",
    "encomenda": false
  },
  {
    "id": "65",
    "name": "Caldos Em Cubo Vita Vaca 10G 100Pcs",
    "category": "alimenticios",
    "price": 7706,
    "stock": 100,
    "desc": "Caldos Em Cubo Vita Vaca 10G 100Pcs",
    "img": "/imagens/caldos-em-cubo-vita-vaca-10g-100pcs.jpg",
    "encomenda": false
  },
  {
    "id": "66",
    "name": "Tempero Portugues Original 0.75L",
    "category": "alimenticios",
    "price": 5216,
    "stock": 100,
    "desc": "Tempero Portugues Original 0.75L",
    "img": "/imagens/tempero-portugues-original-0-75l.jpg",
    "encomenda": false
  },
  {
    "id": "67",
    "name": "Louro Folhas Delicia Negra 120G",
    "category": "alimenticios",
    "price": 7335,
    "stock": 100,
    "desc": "Louro Folhas Delicia Negra 120G",
    "img": "/imagens/louro-folhas-delicia-negra-120g.jpg",
    "encomenda": false
  },
  {
    "id": "68",
    "name": "Oregaos Folha Delicia Negra 4G",
    "category": "alimenticios",
    "price": 400,
    "stock": 100,
    "desc": "Oregaos Folha Delicia Negra 4G",
    "img": "/imagens/oregaos-folha-delicia-negra-4g.jpg",
    "encomenda": false
  },
  {
    "id": "69",
    "name": "Coentros Moidos Delicia Negra 800G",
    "category": "alimenticios",
    "price": 19162,
    "stock": 100,
    "desc": "Coentros Moidos Delicia Negra 800G",
    "img": "/imagens/coentros-moidos-delicia-negra-800g.jpg",
    "encomenda": false
  },
  {
    "id": "70",
    "name": "Louro Folhas Delicia Negra 3G",
    "category": "alimenticios",
    "price": 444,
    "stock": 100,
    "desc": "Louro Folhas Delicia Negra 3G",
    "img": "/imagens/louro-folhas-delicia-negra-3g.jpg",
    "encomenda": false
  },
  {
    "id": "71",
    "name": "Pimentao Doce Delicia Negra 14G",
    "category": "alimenticios",
    "price": 652,
    "stock": 100,
    "desc": "Pimentao Doce Delicia Negra 14G",
    "img": "/imagens/pimentao-doce-delicia-negra-14g.jpg",
    "encomenda": false
  },
  {
    "id": "72",
    "name": "Caril Moido Delicia Negra 14G",
    "category": "alimenticios",
    "price": 652,
    "stock": 100,
    "desc": "Caril Moido Delicia Negra 14G",
    "img": "/imagens/caril-moido-delicia-negra-14g.jpg",
    "encomenda": false
  },
  {
    "id": "73",
    "name": "Pimenta Preta Moida Delicia Negra 14G",
    "category": "alimenticios",
    "price": 889,
    "stock": 100,
    "desc": "Pimenta Preta Moida Delicia Negra 14G",
    "img": "/imagens/pimenta-preta-moida-delicia-negra-14g.jpg",
    "encomenda": false
  },
  {
    "id": "74",
    "name": "Pimenta Branca Moida Delicia Negra 50G Saco",
    "category": "alimenticios",
    "price": 1630,
    "stock": 100,
    "desc": "Pimenta Branca Moida Delicia Negra 50G Saco",
    "img": "/imagens/pimenta-branca-moida-delicia-negra-50g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "75",
    "name": "Pimenta Preta Moida Delicia Negra 50G Saco",
    "category": "alimenticios",
    "price": 1630,
    "stock": 100,
    "desc": "Pimenta Preta Moida Delicia Negra 50G Saco",
    "img": "/imagens/pimenta-preta-moida-delicia-negra-50g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "76",
    "name": "Canela Moida Delicia Negra 12G",
    "category": "alimenticios",
    "price": 622,
    "stock": 100,
    "desc": "Canela Moida Delicia Negra 12G",
    "img": "/imagens/canela-moida-delicia-negra-12g.jpg",
    "encomenda": false
  },
  {
    "id": "77",
    "name": "Acafrao Indias Delicia Negra/Caminho Da Indias 14G",
    "category": "alimenticios",
    "price": 622,
    "stock": 100,
    "desc": "Acafrao Indias Delicia Negra/Caminho Da Indias 14G",
    "img": "/imagens/acafrao-indias-delicia-negra-caminho-da-indias-14g.jpg",
    "encomenda": false
  },
  {
    "id": "78",
    "name": "Semente Linhaca Amarela Delicia Negra 250G",
    "category": "alimenticios",
    "price": 2534,
    "stock": 100,
    "desc": "Semente Linhaca Amarela Delicia Negra 250G",
    "img": "/imagens/semente-linhaca-amarela-delicia-negra-250g.jpg",
    "encomenda": false
  },
  {
    "id": "79",
    "name": "Semente Linhaca Castanha Delicia Negra 250G",
    "category": "alimenticios",
    "price": 2223,
    "stock": 100,
    "desc": "Semente Linhaca Castanha Delicia Negra 250G",
    "img": "/imagens/semente-linhaca-castanha-delicia-negra-250g.jpg",
    "encomenda": false
  },
  {
    "id": "80",
    "name": "Sementes Sesamo Delicia Negra 250G",
    "category": "alimenticios",
    "price": 3912,
    "stock": 100,
    "desc": "Sementes Sesamo Delicia Negra 250G",
    "img": "/imagens/sementes-sesamo-delicia-negra-250g.jpg",
    "encomenda": false
  },
  {
    "id": "81",
    "name": "Fermento Em Po Para Bolo Bakers Best 50G Saco",
    "category": "alimenticios",
    "price": 266,
    "stock": 100,
    "desc": "Fermento Em Po Para Bolo Bakers Best 50G Saco",
    "img": "/imagens/fermento-em-po-para-bolo-bakers-best-50g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "82",
    "name": "Chocolate Negro Em Barra 72% Biagio 200G",
    "category": "alimenticios",
    "price": 7172,
    "stock": 100,
    "desc": "Chocolate Negro Em Barra 72% Biagio 200G",
    "img": "/imagens/chocolate-negro-em-barra-72-biagio-200g.jpg",
    "encomenda": false
  },
  {
    "id": "83",
    "name": "Corante Gel Biagio Amarelo 170G",
    "category": "alimenticios",
    "price": 9973,
    "stock": 100,
    "desc": "Corante Gel Biagio Amarelo 170G",
    "img": "/imagens/corante-gel-biagio-amarelo-170g.jpg",
    "encomenda": false
  },
  {
    "id": "84",
    "name": "Gelato Soft Biagio Caramelo Toffe 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Caramelo Toffe 500Gx2",
    "img": "/imagens/gelato-soft-biagio-caramelo-toffe-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "85",
    "name": "Mousse Biagio Cacau 100G",
    "category": "alimenticios",
    "price": 2015,
    "stock": 100,
    "desc": "Mousse Biagio Cacau 100G",
    "img": "/imagens/mousse-biagio-cacau-100g.jpg",
    "encomenda": false
  },
  {
    "id": "86",
    "name": "Topping Biagio Caramelo 500G",
    "category": "alimenticios",
    "price": 6728,
    "stock": 100,
    "desc": "Topping Biagio Caramelo 500G",
    "img": "/imagens/topping-biagio-caramelo-500g.jpg",
    "encomenda": false
  },
  {
    "id": "87",
    "name": "Volupan Melhorante Para Pao Biagio 15Gx10",
    "category": "alimenticios",
    "price": 4371,
    "stock": 100,
    "desc": "Volupan Melhorante Para Pao Biagio 15Gx10",
    "img": "/imagens/volupan-melhorante-para-pao-biagio-15gx10.jpg",
    "encomenda": false
  },
  {
    "id": "88",
    "name": "Pasta Acucar Biagio Amarelo 600G",
    "category": "alimenticios",
    "price": 8062,
    "stock": 100,
    "desc": "Pasta Acucar Biagio Amarelo 600G",
    "img": "/imagens/pasta-acucar-biagio-amarelo-600g.jpg",
    "encomenda": false
  },
  {
    "id": "89",
    "name": "Pasta Acucar Biagio Laranja 600G",
    "category": "alimenticios",
    "price": 8966,
    "stock": 100,
    "desc": "Pasta Acucar Biagio Laranja 600G",
    "img": "/imagens/pasta-acucar-biagio-laranja-600g.jpg",
    "encomenda": false
  },
  {
    "id": "90",
    "name": "Volupan Mulemba Biagio 10Kg",
    "category": "alimenticios",
    "price": 50951,
    "stock": 100,
    "desc": "Volupan Mulemba Biagio 10Kg",
    "img": "/imagens/volupan-mulemba-biagio-10kg.jpg",
    "encomenda": false
  },
  {
    "id": "91",
    "name": "Volupan Mulemba Biagio 500G",
    "category": "alimenticios",
    "price": 3512,
    "stock": 100,
    "desc": "Volupan Mulemba Biagio 500G",
    "img": "/imagens/volupan-mulemba-biagio-500g.jpg",
    "encomenda": false
  },
  {
    "id": "92",
    "name": "Desmoldante B90 Jerrican Biagio 1L",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Desmoldante B90 Jerrican Biagio 1L",
    "img": "/imagens/desmoldante-b90-jerrican-biagio-1l.jpg",
    "encomenda": false
  },
  {
    "id": "93",
    "name": "Gelatina Biagio Light Frutos Silvestres 90G",
    "category": "alimenticios",
    "price": 2208,
    "stock": 100,
    "desc": "Gelatina Biagio Light Frutos Silvestres 90G",
    "img": "/imagens/gelatina-biagio-light-frutos-silvestres-90g.jpg",
    "encomenda": false
  },
  {
    "id": "94",
    "name": "Gelato Soft Biagio Chocolate 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Chocolate 500Gx2",
    "img": "/imagens/gelato-soft-biagio-chocolate-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "95",
    "name": "Gelato Soft Biagio Coco 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Coco 500Gx2",
    "img": "/imagens/gelato-soft-biagio-coco-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "96",
    "name": "Chocolate Em Po Biagio 125G Saco",
    "category": "alimenticios",
    "price": 1407,
    "stock": 100,
    "desc": "Chocolate Em Po Biagio 125G Saco",
    "img": "/imagens/chocolate-em-po-biagio-125g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "97",
    "name": "Chocolate Em Po Biagio 150G",
    "category": "alimenticios",
    "price": 2119,
    "stock": 100,
    "desc": "Chocolate Em Po Biagio 150G",
    "img": "/imagens/chocolate-em-po-biagio-150g.jpg",
    "encomenda": false
  },
  {
    "id": "98",
    "name": "Capriccio Para Gelado Biagio Chocolate 130G",
    "category": "alimenticios",
    "price": 2964,
    "stock": 100,
    "desc": "Capriccio Para Gelado Biagio Chocolate 130G",
    "img": "/imagens/capriccio-para-gelado-biagio-chocolate-130g.jpg",
    "encomenda": false
  },
  {
    "id": "99",
    "name": "Corante Gel Biagio Azul 170G",
    "category": "alimenticios",
    "price": 9973,
    "stock": 100,
    "desc": "Corante Gel Biagio Azul 170G",
    "img": "/imagens/corante-gel-biagio-azul-170g.jpg",
    "encomenda": false
  },
  {
    "id": "100",
    "name": "Mousse Biagio Chocolate 100G",
    "category": "alimenticios",
    "price": 1956,
    "stock": 100,
    "desc": "Mousse Biagio Chocolate 100G",
    "img": "/imagens/mousse-biagio-chocolate-100g.jpg",
    "encomenda": false
  },
  {
    "id": "101",
    "name": "Mousse Biagio Limao Lima 100G",
    "category": "alimenticios",
    "price": 2015,
    "stock": 100,
    "desc": "Mousse Biagio Limao Lima 100G",
    "img": "/imagens/mousse-biagio-limao-lima-100g.jpg",
    "encomenda": false
  },
  {
    "id": "102",
    "name": "Bi Natural Amendoa Palitada Biagio 500G",
    "category": "alimenticios",
    "price": 13308,
    "stock": 100,
    "desc": "Bi Natural Amendoa Palitada Biagio 500G",
    "img": "/imagens/bi-natural-amendoa-palitada-biagio-500g.jpg",
    "encomenda": false
  },
  {
    "id": "103",
    "name": "Corante Gel Biagio Laranja 170G",
    "category": "alimenticios",
    "price": 9973,
    "stock": 100,
    "desc": "Corante Gel Biagio Laranja 170G",
    "img": "/imagens/corante-gel-biagio-laranja-170g.jpg",
    "encomenda": false
  },
  {
    "id": "104",
    "name": "Essencia Com Sabor Biagio Baunilha 30Ml",
    "category": "alimenticios",
    "price": 1896,
    "stock": 100,
    "desc": "Essencia Com Sabor Biagio Baunilha 30Ml",
    "img": "/imagens/essencia-com-sabor-biagio-baunilha-30ml.jpg",
    "encomenda": false
  },
  {
    "id": "105",
    "name": "Gelato Soft Biagio Laranja 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Laranja 500Gx2",
    "img": "/imagens/gelato-soft-biagio-laranja-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "106",
    "name": "Gelato Soft Biagio Maracuja 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Maracuja 500Gx2",
    "img": "/imagens/gelato-soft-biagio-maracuja-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "107",
    "name": "Gelato Soft Biagio Morango 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Morango 500Gx2",
    "img": "/imagens/gelato-soft-biagio-morango-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "108",
    "name": "Merengue E Glace Biagio 150G",
    "category": "alimenticios",
    "price": 1992,
    "stock": 100,
    "desc": "Merengue E Glace Biagio 150G",
    "img": "/imagens/merengue-e-glace-biagio-150g.jpg",
    "encomenda": false
  },
  {
    "id": "109",
    "name": "Mistura De Bolo Biagio Chocolate 400G Saco",
    "category": "alimenticios",
    "price": 2637,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Chocolate 400G Saco",
    "img": "/imagens/mistura-de-bolo-biagio-chocolate-400g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "110",
    "name": "Optipan Biagio Baguette Francesa 10Kg",
    "category": "alimenticios",
    "price": 41822,
    "stock": 100,
    "desc": "Optipan Biagio Baguette Francesa 10Kg",
    "img": "/imagens/optipan-biagio-baguette-francesa-10kg.jpg",
    "encomenda": false
  },
  {
    "id": "111",
    "name": "Creme Pasteleiro Biagio 500Gx2",
    "category": "alimenticios",
    "price": 10299,
    "stock": 100,
    "desc": "Creme Pasteleiro Biagio 500Gx2",
    "img": "/imagens/creme-pasteleiro-biagio-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "112",
    "name": "Corante Gel Biagio Roxo 170G",
    "category": "alimenticios",
    "price": 9973,
    "stock": 100,
    "desc": "Corante Gel Biagio Roxo 170G",
    "img": "/imagens/corante-gel-biagio-roxo-170g.jpg",
    "encomenda": false
  },
  {
    "id": "113",
    "name": "Creme Tipo Chantilly Biagio 125G",
    "category": "alimenticios",
    "price": 2208,
    "stock": 100,
    "desc": "Creme Tipo Chantilly Biagio 125G",
    "img": "/imagens/creme-tipo-chantilly-biagio-125g.jpg",
    "encomenda": false
  },
  {
    "id": "114",
    "name": "Mistura De Bolo Biagio Chocolate 450G Pacote",
    "category": "alimenticios",
    "price": 3927,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Chocolate 450G Pacote",
    "img": "/imagens/mistura-de-bolo-biagio-chocolate-450g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "115",
    "name": "Veludin Biscuit Biagio 10Kg Saco",
    "category": "alimenticios",
    "price": 48520,
    "stock": 100,
    "desc": "Veludin Biscuit Biagio 10Kg Saco",
    "img": "/imagens/veludin-biscuit-biagio-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "116",
    "name": "Mistura De Bolo Biagio Coco 450G Pacote",
    "category": "alimenticios",
    "price": 3645,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Coco 450G Pacote",
    "img": "/imagens/mistura-de-bolo-biagio-coco-450g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "117",
    "name": "Mistura De Bolo Biagio Laranja 400G Saco",
    "category": "alimenticios",
    "price": 2178,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Laranja 400G Saco",
    "img": "/imagens/mistura-de-bolo-biagio-laranja-400g-saco.jpg",
    "encomenda": false
  },
  {
    "id": "118",
    "name": "Veludin Chocobiscuit Biagio 10Kg Saco",
    "category": "alimenticios",
    "price": 65252,
    "stock": 100,
    "desc": "Veludin Chocobiscuit Biagio 10Kg Saco",
    "img": "/imagens/veludin-chocobiscuit-biagio-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "119",
    "name": "Leite Creme Biagio 80G",
    "category": "alimenticios",
    "price": 1126,
    "stock": 100,
    "desc": "Leite Creme Biagio 80G",
    "img": "/imagens/leite-creme-biagio-80g.jpg",
    "encomenda": false
  },
  {
    "id": "120",
    "name": "Mistura De Bolo Biagio Laranja 450G Pacote",
    "category": "alimenticios",
    "price": 3645,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Laranja 450G Pacote",
    "img": "/imagens/mistura-de-bolo-biagio-laranja-450g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "121",
    "name": "Mistura De Bolo Biagio Manteiga 450G Pacote",
    "category": "alimenticios",
    "price": 3645,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Manteiga 450G Pacote",
    "img": "/imagens/mistura-de-bolo-biagio-manteiga-450g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "122",
    "name": "Mistura De Bolo Biagio Red Velvet 450G Pacote",
    "category": "alimenticios",
    "price": 3645,
    "stock": 100,
    "desc": "Mistura De Bolo Biagio Red Velvet 450G Pacote",
    "img": "/imagens/mistura-de-bolo-biagio-red-velvet-450g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "123",
    "name": "Gelati Base 100 Para Gelad0 Biagio 500Gx2",
    "category": "alimenticios",
    "price": 25268,
    "stock": 100,
    "desc": "Gelati Base 100 Para Gelad0 Biagio 500Gx2",
    "img": "/imagens/gelati-base-100-para-gelad0-biagio-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "124",
    "name": "Molho Bechamel Biagio 60G",
    "category": "alimenticios",
    "price": 1511,
    "stock": 100,
    "desc": "Molho Bechamel Biagio 60G",
    "img": "/imagens/molho-bechamel-biagio-60g.jpg",
    "encomenda": false
  },
  {
    "id": "125",
    "name": "Gelato Soft Biagio Ananas 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Ananas 500Gx2",
    "img": "/imagens/gelato-soft-biagio-ananas-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "126",
    "name": "Gelato Soft Biagio Tutti Frutti 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Tutti Frutti 500Gx2",
    "img": "/imagens/gelato-soft-biagio-tutti-frutti-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "127",
    "name": "Gelato Soft Biagio Baunilha 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Baunilha 500Gx2",
    "img": "/imagens/gelato-soft-biagio-baunilha-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "128",
    "name": "Cremfil Chantilly Biagio 10Kg Saco",
    "category": "alimenticios",
    "price": 112083,
    "stock": 100,
    "desc": "Cremfil Chantilly Biagio 10Kg Saco",
    "img": "/imagens/cremfil-chantilly-biagio-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "129",
    "name": "Essencia Com Sabor Biagio Limao 30Ml",
    "category": "alimenticios",
    "price": 1896,
    "stock": 100,
    "desc": "Essencia Com Sabor Biagio Limao 30Ml",
    "img": "/imagens/essencia-com-sabor-biagio-limao-30ml.jpg",
    "encomenda": false
  },
  {
    "id": "130",
    "name": "Gelatina Biagio Ananas 170G",
    "category": "alimenticios",
    "price": 2682,
    "stock": 100,
    "desc": "Gelatina Biagio Ananas 170G",
    "img": "/imagens/gelatina-biagio-ananas-170g.jpg",
    "encomenda": false
  },
  {
    "id": "131",
    "name": "Gelatina Biagio Frutos Vermelhos 170G",
    "category": "alimenticios",
    "price": 2445,
    "stock": 100,
    "desc": "Gelatina Biagio Frutos Vermelhos 170G",
    "img": "/imagens/gelatina-biagio-frutos-vermelhos-170g.jpg",
    "encomenda": false
  },
  {
    "id": "132",
    "name": "Corante Gel Biagio Vermelho 170G",
    "category": "alimenticios",
    "price": 9973,
    "stock": 100,
    "desc": "Corante Gel Biagio Vermelho 170G",
    "img": "/imagens/corante-gel-biagio-vermelho-170g.jpg",
    "encomenda": false
  },
  {
    "id": "133",
    "name": "Bridor Total Biagio 10Kg Saco",
    "category": "alimenticios",
    "price": 36501,
    "stock": 100,
    "desc": "Bridor Total Biagio 10Kg Saco",
    "img": "/imagens/bridor-total-biagio-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "134",
    "name": "Gelatina Biagio Laranja 170G",
    "category": "alimenticios",
    "price": 2697,
    "stock": 100,
    "desc": "Gelatina Biagio Laranja 170G",
    "img": "/imagens/gelatina-biagio-laranja-170g.jpg",
    "encomenda": false
  },
  {
    "id": "135",
    "name": "Gelato Soft Biagio Banana 500Gx2",
    "category": "alimenticios",
    "price": 12552,
    "stock": 100,
    "desc": "Gelato Soft Biagio Banana 500Gx2",
    "img": "/imagens/gelato-soft-biagio-banana-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "136",
    "name": "Cacau Em Po Biagio 100G",
    "category": "alimenticios",
    "price": 2089,
    "stock": 100,
    "desc": "Cacau Em Po Biagio 100G",
    "img": "/imagens/cacau-em-po-biagio-100g.jpg",
    "encomenda": false
  },
  {
    "id": "137",
    "name": "Cacau Em Po Biagio 125G",
    "category": "alimenticios",
    "price": 2964,
    "stock": 100,
    "desc": "Cacau Em Po Biagio 125G",
    "img": "/imagens/cacau-em-po-biagio-125g.jpg",
    "encomenda": false
  },
  {
    "id": "138",
    "name": "Essencia Com Sabor Biagio Morango 30Ml",
    "category": "alimenticios",
    "price": 1896,
    "stock": 100,
    "desc": "Essencia Com Sabor Biagio Morango 30Ml",
    "img": "/imagens/essencia-com-sabor-biagio-morango-30ml.jpg",
    "encomenda": false
  },
  {
    "id": "139",
    "name": "Bi Natural Semente Sesamo Biagio 500G",
    "category": "alimenticios",
    "price": 8736,
    "stock": 100,
    "desc": "Bi Natural Semente Sesamo Biagio 500G",
    "img": "/imagens/bi-natural-semente-sesamo-biagio-500g.jpg",
    "encomenda": false
  },
  {
    "id": "140",
    "name": "Margarina Folhada Biagio 2Kg",
    "category": "alimenticios",
    "price": 17922,
    "stock": 100,
    "desc": "Margarina Folhada Biagio 2Kg",
    "img": "/imagens/margarina-folhada-biagio-2kg.jpg",
    "encomenda": false
  },
  {
    "id": "141",
    "name": "Farinha Especial C/ Fermento Biagio 1Kg",
    "category": "alimenticios",
    "price": 3903,
    "stock": 100,
    "desc": "Farinha Especial C/ Fermento Biagio 1Kg",
    "img": "/imagens/farinha-especial-c-fermento-biagio-1kg.jpg",
    "encomenda": false
  },
  {
    "id": "142",
    "name": "Gelatina Biagio Laranja 85G",
    "category": "alimenticios",
    "price": 1348,
    "stock": 100,
    "desc": "Gelatina Biagio Laranja 85G",
    "img": "/imagens/gelatina-biagio-laranja-85g.jpg",
    "encomenda": false
  },
  {
    "id": "143",
    "name": "Bi Natural Cereja Crstalizada Biagio 100G",
    "category": "alimenticios",
    "price": 2904,
    "stock": 100,
    "desc": "Bi Natural Cereja Crstalizada Biagio 100G",
    "img": "/imagens/bi-natural-cereja-crstalizada-biagio-100g.jpg",
    "encomenda": false
  },
  {
    "id": "144",
    "name": "Bi Natural Coco Laminado Biagio 40G",
    "category": "alimenticios",
    "price": 1433,
    "stock": 100,
    "desc": "Bi Natural Coco Laminado Biagio 40G",
    "img": "/imagens/bi-natural-coco-laminado-biagio-40g.jpg",
    "encomenda": false
  },
  {
    "id": "145",
    "name": "Bi Natural Nives Cacau Biagio 80G",
    "category": "alimenticios",
    "price": 2104,
    "stock": 100,
    "desc": "Bi Natural Nives Cacau Biagio 80G",
    "img": "/imagens/bi-natural-nives-cacau-biagio-80g.jpg",
    "encomenda": false
  },
  {
    "id": "146",
    "name": "Bi Natural Manga Confitada Biagio 80G",
    "category": "alimenticios",
    "price": 2143,
    "stock": 100,
    "desc": "Bi Natural Manga Confitada Biagio 80G",
    "img": "/imagens/bi-natural-manga-confitada-biagio-80g.jpg",
    "encomenda": false
  },
  {
    "id": "147",
    "name": "Bi Natural Chia Branca Biagio 100G",
    "category": "alimenticios",
    "price": 3712,
    "stock": 100,
    "desc": "Bi Natural Chia Branca Biagio 100G",
    "img": "/imagens/bi-natural-chia-branca-biagio-100g.jpg",
    "encomenda": false
  },
  {
    "id": "148",
    "name": "Bi Natural Caju Biagio 100G",
    "category": "alimenticios",
    "price": 3868,
    "stock": 100,
    "desc": "Bi Natural Caju Biagio 100G",
    "img": "/imagens/bi-natural-caju-biagio-100g.jpg",
    "encomenda": false
  },
  {
    "id": "149",
    "name": "Chocolate Negro Em Barra 90% Biagio 60G",
    "category": "alimenticios",
    "price": 4282,
    "stock": 100,
    "desc": "Chocolate Negro Em Barra 90% Biagio 60G",
    "img": "/imagens/chocolate-negro-em-barra-90-biagio-60g.jpg",
    "encomenda": false
  },
  {
    "id": "150",
    "name": "Doce Tradicional Biagio Maracuja 270G",
    "category": "alimenticios",
    "price": 5661,
    "stock": 100,
    "desc": "Doce Tradicional Biagio Maracuja 270G",
    "img": "/imagens/doce-tradicional-biagio-maracuja-270g.jpg",
    "encomenda": false
  },
  {
    "id": "151",
    "name": "Doce Tradicional Biagio Goiaba 270G",
    "category": "alimenticios",
    "price": 5216,
    "stock": 100,
    "desc": "Doce Tradicional Biagio Goiaba 270G",
    "img": "/imagens/doce-tradicional-biagio-goiaba-270g.jpg",
    "encomenda": false
  },
  {
    "id": "152",
    "name": "Doce Tradicional Biagio Papaia 270G",
    "category": "alimenticios",
    "price": 5661,
    "stock": 100,
    "desc": "Doce Tradicional Biagio Papaia 270G",
    "img": "/imagens/doce-tradicional-biagio-papaia-270g.jpg",
    "encomenda": false
  },
  {
    "id": "153",
    "name": "Mousse De Chocolate Biagio 500Gx2",
    "category": "alimenticios",
    "price": 15694,
    "stock": 100,
    "desc": "Mousse De Chocolate Biagio 500Gx2",
    "img": "/imagens/mousse-de-chocolate-biagio-500gx2.jpg",
    "encomenda": false
  },
  {
    "id": "154",
    "name": "Chocolate Negro Em Barra 85% Biagio 120G",
    "category": "alimenticios",
    "price": 5216,
    "stock": 100,
    "desc": "Chocolate Negro Em Barra 85% Biagio 120G",
    "img": "/imagens/chocolate-negro-em-barra-85-biagio-120g.jpg",
    "encomenda": false
  },
  {
    "id": "155",
    "name": "Cakedor Biagio Iogurte 1Kg Saco",
    "category": "alimenticios",
    "price": 4081,
    "stock": 100,
    "desc": "Cakedor Biagio Iogurte 1Kg Saco",
    "img": "/imagens/cakedor-biagio-iogurte-1kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "156",
    "name": "Doce Tradicional Biagio Maracuja 40G",
    "category": "alimenticios",
    "price": 2445,
    "stock": 100,
    "desc": "Doce Tradicional Biagio Maracuja 40G",
    "img": "/imagens/doce-tradicional-biagio-maracuja-40g.jpg",
    "encomenda": false
  },
  {
    "id": "157",
    "name": "Doce Tradicional Biagio Papaia 40G",
    "category": "alimenticios",
    "price": 2445,
    "stock": 100,
    "desc": "Doce Tradicional Biagio Papaia 40G",
    "img": "/imagens/doce-tradicional-biagio-papaia-40g.jpg",
    "encomenda": false
  },
  {
    "id": "158",
    "name": "Farinha Especial De Trigo Melhorante Biagio 1Kg",
    "category": "alimenticios",
    "price": 3903,
    "stock": 100,
    "desc": "Farinha Especial De Trigo Melhorante Biagio 1Kg",
    "img": "/imagens/farinha-especial-de-trigo-melhorante-biagio-1kg.jpg",
    "encomenda": false
  },
  {
    "id": "159",
    "name": "Mousse Biagio Coco 100G",
    "category": "alimenticios",
    "price": 1926,
    "stock": 100,
    "desc": "Mousse Biagio Coco 100G",
    "img": "/imagens/mousse-biagio-coco-100g.jpg",
    "encomenda": false
  },
  {
    "id": "160",
    "name": "Gelatina Biagio Frutos Vermelhos 85G",
    "category": "alimenticios",
    "price": 1348,
    "stock": 100,
    "desc": "Gelatina Biagio Frutos Vermelhos 85G",
    "img": "/imagens/gelatina-biagio-frutos-vermelhos-85g.jpg",
    "encomenda": false
  },
  {
    "id": "161",
    "name": "Biagio Glucose 600G",
    "category": "alimenticios",
    "price": 8892,
    "stock": 100,
    "desc": "Biagio Glucose 600G",
    "img": "/imagens/biagio-glucose-600g.jpg",
    "encomenda": false
  },
  {
    "id": "162",
    "name": "Molho Piri Piri Tremoceira 100G Frasco",
    "category": "alimenticios",
    "price": 2237,
    "stock": 100,
    "desc": "Molho Piri Piri Tremoceira 100G Frasco",
    "img": "/imagens/molho-piri-piri-tremoceira-100g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "163",
    "name": "Azeitona Preta Descarocada Tremoceira 360G Frasco",
    "category": "alimenticios",
    "price": 5661,
    "stock": 100,
    "desc": "Azeitona Preta Descarocada Tremoceira 360G Frasco",
    "img": "/imagens/azeitona-preta-descarocada-tremoceira-360g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "164",
    "name": "Molho Gindungo Tremoceira 100G Frasco",
    "category": "alimenticios",
    "price": 2889,
    "stock": 100,
    "desc": "Molho Gindungo Tremoceira 100G Frasco",
    "img": "/imagens/molho-gindungo-tremoceira-100g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "165",
    "name": "Molho Picante Verde Tremoceira 100G Frasco",
    "category": "alimenticios",
    "price": 2208,
    "stock": 100,
    "desc": "Molho Picante Verde Tremoceira 100G Frasco",
    "img": "/imagens/molho-picante-verde-tremoceira-100g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "166",
    "name": "Tremoco Tremoceira 580G",
    "category": "alimenticios",
    "price": 4176,
    "stock": 100,
    "desc": "Tremoco Tremoceira 580G",
    "img": "/imagens/tremoco-tremoceira-580g.jpg",
    "encomenda": false
  },
  {
    "id": "167",
    "name": "Molho Piri Piri Forte Tremoceira 100G Frasco",
    "category": "alimenticios",
    "price": 2326,
    "stock": 100,
    "desc": "Molho Piri Piri Forte Tremoceira 100G Frasco",
    "img": "/imagens/molho-piri-piri-forte-tremoceira-100g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "168",
    "name": "Azeitona Verde Inteira Tremoceira 360G Frasco",
    "category": "alimenticios",
    "price": 5305,
    "stock": 100,
    "desc": "Azeitona Verde Inteira Tremoceira 360G Frasco",
    "img": "/imagens/azeitona-verde-inteira-tremoceira-360g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "169",
    "name": "Batata Frita Kracks Paprika 45G Lata",
    "category": "alimenticios",
    "price": 1883,
    "stock": 100,
    "desc": "Batata Frita Kracks Paprika 45G Lata",
    "img": "/imagens/batata-frita-kracks-paprika-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "170",
    "name": "Batata Frita Kracks Quiejo 160G Lata",
    "category": "alimenticios",
    "price": 4436,
    "stock": 100,
    "desc": "Batata Frita Kracks Quiejo 160G Lata",
    "img": "/imagens/batata-frita-kracks-quiejo-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "171",
    "name": "Batata Frita Kracks Quiejo 45G Lata",
    "category": "alimenticios",
    "price": 1883,
    "stock": 100,
    "desc": "Batata Frita Kracks Quiejo 45G Lata",
    "img": "/imagens/batata-frita-kracks-quiejo-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "172",
    "name": "Batata Frita Kracks Tomate 160G Lata",
    "category": "alimenticios",
    "price": 4436,
    "stock": 100,
    "desc": "Batata Frita Kracks Tomate 160G Lata",
    "img": "/imagens/batata-frita-kracks-tomate-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "173",
    "name": "Batata Frita Kracks Alho E Cebola 160G Lata",
    "category": "alimenticios",
    "price": 4245,
    "stock": 100,
    "desc": "Batata Frita Kracks Alho E Cebola 160G Lata",
    "img": "/imagens/batata-frita-kracks-alho-e-cebola-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "174",
    "name": "Batata Frita Kracks Alho E Cebola 45G Lata",
    "category": "alimenticios",
    "price": 2006,
    "stock": 100,
    "desc": "Batata Frita Kracks Alho E Cebola 45G Lata",
    "img": "/imagens/batata-frita-kracks-alho-e-cebola-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "175",
    "name": "Batata Frita Kracks Tomate 45G Lata",
    "category": "alimenticios",
    "price": 1815,
    "stock": 100,
    "desc": "Batata Frita Kracks Tomate 45G Lata",
    "img": "/imagens/batata-frita-kracks-tomate-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "176",
    "name": "Batata Frita Kracks Barbeque 160G Lata",
    "category": "alimenticios",
    "price": 4436,
    "stock": 100,
    "desc": "Batata Frita Kracks Barbeque 160G Lata",
    "img": "/imagens/batata-frita-kracks-barbeque-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "177",
    "name": "Batata Frita Kracks Paprika 160G Lata",
    "category": "alimenticios",
    "price": 4436,
    "stock": 100,
    "desc": "Batata Frita Kracks Paprika 160G Lata",
    "img": "/imagens/batata-frita-kracks-paprika-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "178",
    "name": "Batata Frita Kracks Barbeque 45G Lata",
    "category": "alimenticios",
    "price": 2006,
    "stock": 100,
    "desc": "Batata Frita Kracks Barbeque 45G Lata",
    "img": "/imagens/batata-frita-kracks-barbeque-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "179",
    "name": "Batata Frita Kracks Hot E Spicy 160G Lata",
    "category": "alimenticios",
    "price": 4245,
    "stock": 100,
    "desc": "Batata Frita Kracks Hot E Spicy 160G Lata",
    "img": "/imagens/batata-frita-kracks-hot-e-spicy-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "180",
    "name": "Batata Frita Kracks Hot E Spicy 45G Lata",
    "category": "alimenticios",
    "price": 2006,
    "stock": 100,
    "desc": "Batata Frita Kracks Hot E Spicy 45G Lata",
    "img": "/imagens/batata-frita-kracks-hot-e-spicy-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "181",
    "name": "Batata Frita Kracks Original 160G Lata",
    "category": "alimenticios",
    "price": 4245,
    "stock": 100,
    "desc": "Batata Frita Kracks Original 160G Lata",
    "img": "/imagens/batata-frita-kracks-original-160g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "182",
    "name": "Batata Frita Kracks Original 45G Lata",
    "category": "alimenticios",
    "price": 1883,
    "stock": 100,
    "desc": "Batata Frita Kracks Original 45G Lata",
    "img": "/imagens/batata-frita-kracks-original-45g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "183",
    "name": "Bolacha Recheada Major Saida Baunilha 160G",
    "category": "alimenticios",
    "price": 1583,
    "stock": 100,
    "desc": "Bolacha Recheada Major Saida Baunilha 160G",
    "img": "/imagens/bolacha-recheada-major-saida-baunilha-160g.jpg",
    "encomenda": false
  },
  {
    "id": "184",
    "name": "Bolacha Recheada Major Saida Chocolate 160G",
    "category": "alimenticios",
    "price": 1583,
    "stock": 100,
    "desc": "Bolacha Recheada Major Saida Chocolate 160G",
    "img": "/imagens/bolacha-recheada-major-saida-chocolate-160g.jpg",
    "encomenda": false
  },
  {
    "id": "185",
    "name": "Bolacha Recheada Major Saida Morango 160G",
    "category": "alimenticios",
    "price": 1583,
    "stock": 100,
    "desc": "Bolacha Recheada Major Saida Morango 160G",
    "img": "/imagens/bolacha-recheada-major-saida-morango-160g.jpg",
    "encomenda": false
  },
  {
    "id": "186",
    "name": "Bolacha Recheada Prince Baunilha 130G",
    "category": "alimenticios",
    "price": 1638,
    "stock": 100,
    "desc": "Bolacha Recheada Prince Baunilha 130G",
    "img": "/imagens/bolacha-recheada-prince-baunilha-130g.jpg",
    "encomenda": false
  },
  {
    "id": "187",
    "name": "Bolacha Recheada Prince Baunilha 60G",
    "category": "alimenticios",
    "price": 975,
    "stock": 100,
    "desc": "Bolacha Recheada Prince Baunilha 60G",
    "img": "/imagens/bolacha-recheada-prince-baunilha-60g.jpg",
    "encomenda": false
  },
  {
    "id": "188",
    "name": "Bolacha Recheada Prince Chocolate 130G",
    "category": "alimenticios",
    "price": 1638,
    "stock": 100,
    "desc": "Bolacha Recheada Prince Chocolate 130G",
    "img": "/imagens/bolacha-recheada-prince-chocolate-130g.jpg",
    "encomenda": false
  },
  {
    "id": "189",
    "name": "Bolacha Recheada Prince Chocolate 60G",
    "category": "alimenticios",
    "price": 975,
    "stock": 100,
    "desc": "Bolacha Recheada Prince Chocolate 60G",
    "img": "/imagens/bolacha-recheada-prince-chocolate-60g.jpg",
    "encomenda": false
  },
  {
    "id": "190",
    "name": "Bolacha Salgada Tuc Classic 65G",
    "category": "alimenticios",
    "price": 839,
    "stock": 100,
    "desc": "Bolacha Salgada Tuc Classic 65G",
    "img": "/imagens/bolacha-salgada-tuc-classic-65g.jpg",
    "encomenda": false
  },
  {
    "id": "191",
    "name": "Bolacha Salgada Tuc Mini 30G",
    "category": "alimenticios",
    "price": 675,
    "stock": 100,
    "desc": "Bolacha Salgada Tuc Mini 30G",
    "img": "/imagens/bolacha-salgada-tuc-mini-30g.jpg",
    "encomenda": false
  },
  {
    "id": "192",
    "name": "Bolacha Salgada Tuc Pocket 32G",
    "category": "alimenticios",
    "price": 539,
    "stock": 100,
    "desc": "Bolacha Salgada Tuc Pocket 32G",
    "img": "/imagens/bolacha-salgada-tuc-pocket-32g.jpg",
    "encomenda": false
  },
  {
    "id": "193",
    "name": "Bolacha Wafer Dourado Morango 50G",
    "category": "alimenticios",
    "price": 232,
    "stock": 100,
    "desc": "Bolacha Wafer Dourado Morango 50G",
    "img": "/imagens/bolacha-wafer-dourado-morango-50g.jpg",
    "encomenda": false
  },
  {
    "id": "194",
    "name": "Bolacha Wafer Mini Croustille Saida Avela 30G",
    "category": "alimenticios",
    "price": 68,
    "stock": 100,
    "desc": "Bolacha Wafer Mini Croustille Saida Avela 30G",
    "img": "/imagens/bolacha-wafer-mini-croustille-saida-avela-30g.jpg",
    "encomenda": false
  },
  {
    "id": "195",
    "name": "Bolacha Wafer Mini Croustille Saida Baunilha 30G",
    "category": "alimenticios",
    "price": 68,
    "stock": 100,
    "desc": "Bolacha Wafer Mini Croustille Saida Baunilha 30G",
    "img": "/imagens/bolacha-wafer-mini-croustille-saida-baunilha-30g.jpg",
    "encomenda": false
  },
  {
    "id": "196",
    "name": "Bolacha Wafer Mini Croustille Saida Chocolate 30G",
    "category": "alimenticios",
    "price": 68,
    "stock": 100,
    "desc": "Bolacha Wafer Mini Croustille Saida Chocolate 30G",
    "img": "/imagens/bolacha-wafer-mini-croustille-saida-chocolate-30g.jpg",
    "encomenda": false
  },
  {
    "id": "197",
    "name": "Bolacha Wafer Super Chocolate 25G",
    "category": "alimenticios",
    "price": 136,
    "stock": 100,
    "desc": "Bolacha Wafer Super Chocolate 25G",
    "img": "/imagens/bolacha-wafer-super-chocolate-25g.jpg",
    "encomenda": false
  },
  {
    "id": "198",
    "name": "Bolacha Wafer Super Coco 25G",
    "category": "alimenticios",
    "price": 136,
    "stock": 100,
    "desc": "Bolacha Wafer Super Coco 25G",
    "img": "/imagens/bolacha-wafer-super-coco-25g.jpg",
    "encomenda": false
  },
  {
    "id": "199",
    "name": "Bolacha Wafer Super Coco 50G",
    "category": "alimenticios",
    "price": 232,
    "stock": 100,
    "desc": "Bolacha Wafer Super Coco 50G",
    "img": "/imagens/bolacha-wafer-super-coco-50g.jpg",
    "encomenda": false
  },
  {
    "id": "200",
    "name": "Bolacha Wafer Super Morango 25G",
    "category": "alimenticios",
    "price": 136,
    "stock": 100,
    "desc": "Bolacha Wafer Super Morango 25G",
    "img": "/imagens/bolacha-wafer-super-morango-25g.jpg",
    "encomenda": false
  },
  {
    "id": "201",
    "name": "Cereal Milk Vitamax Banana 240Ml",
    "category": "alimenticios",
    "price": 1460,
    "stock": 100,
    "desc": "Cereal Milk Vitamax Banana 240Ml",
    "img": "/imagens/cereal-milk-vitamax-banana-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "202",
    "name": "Cereal Milk Vitamax Chocolate 240Ml",
    "category": "alimenticios",
    "price": 1460,
    "stock": 100,
    "desc": "Cereal Milk Vitamax Chocolate 240Ml",
    "img": "/imagens/cereal-milk-vitamax-chocolate-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "203",
    "name": "Cereal Milk Vitamax Melon 240Ml",
    "category": "alimenticios",
    "price": 1460,
    "stock": 100,
    "desc": "Cereal Milk Vitamax Melon 240Ml",
    "img": "/imagens/cereal-milk-vitamax-melon-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "204",
    "name": "Cereal Milk Vitamax Milho 240Ml",
    "category": "alimenticios",
    "price": 1460,
    "stock": 100,
    "desc": "Cereal Milk Vitamax Milho 240Ml",
    "img": "/imagens/cereal-milk-vitamax-milho-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "205",
    "name": "Cereal Milk Vitamax Morango 240Ml",
    "category": "alimenticios",
    "price": 1460,
    "stock": 100,
    "desc": "Cereal Milk Vitamax Morango 240Ml",
    "img": "/imagens/cereal-milk-vitamax-morango-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "206",
    "name": "Bebida Mr Cafe Mocha Coffee Drink 240Ml",
    "category": "alimenticios",
    "price": 1747,
    "stock": 100,
    "desc": "Bebida Mr Cafe Mocha Coffee Drink 240Ml",
    "img": "/imagens/bebida-mr-cafe-mocha-coffee-drink-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "207",
    "name": "Bebida Mr Cafe White Coffee Drink 240Ml",
    "category": "alimenticios",
    "price": 1747,
    "stock": 100,
    "desc": "Bebida Mr Cafe White Coffee Drink 240Ml",
    "img": "/imagens/bebida-mr-cafe-white-coffee-drink-240ml.jpg",
    "encomenda": false
  },
  {
    "id": "208",
    "name": "Agua Gasificada Castello Limao 250Ml",
    "category": "alimenticios",
    "price": 1365,
    "stock": 100,
    "desc": "Agua Gasificada Castello Limao 250Ml",
    "img": "/imagens/agua-gasificada-castello-limao-250ml.jpg",
    "encomenda": false
  },
  {
    "id": "209",
    "name": "Agua Gasificada Castello Original 250Ml",
    "category": "alimenticios",
    "price": 1296,
    "stock": 100,
    "desc": "Agua Gasificada Castello Original 250Ml",
    "img": "/imagens/agua-gasificada-castello-original-250ml.jpg",
    "encomenda": false
  },
  {
    "id": "210",
    "name": "Vinho Tinto Dikota Garrafa 750Ml",
    "category": "alimenticios",
    "price": 4327,
    "stock": 100,
    "desc": "Vinho Tinto Dikota Garrafa 750Ml",
    "img": "/imagens/vinho-tinto-dikota-garrafa-750ml.jpg",
    "encomenda": false
  },
  {
    "id": "211",
    "name": "Vinho Tinto Dikota 1.5L",
    "category": "alimenticios",
    "price": 5053,
    "stock": 100,
    "desc": "Vinho Tinto Dikota 1.5L",
    "img": "/imagens/vinho-tinto-dikota-1-5l.jpg",
    "encomenda": false
  },
  {
    "id": "212",
    "name": "Vinho Tinto Ah Pias 3L",
    "category": "alimenticios",
    "price": 10225,
    "stock": 100,
    "desc": "Vinho Tinto Ah Pias 3L",
    "img": "/imagens/vinho-tinto-ah-pias-3l.jpg",
    "encomenda": false
  },
  {
    "id": "213",
    "name": "Vinho Tinto Convento De Pias 0.75L",
    "category": "alimenticios",
    "price": 6683,
    "stock": 100,
    "desc": "Vinho Tinto Convento De Pias 0.75L",
    "img": "/imagens/vinho-tinto-convento-de-pias-0-75l.jpg",
    "encomenda": false
  },
  {
    "id": "214",
    "name": "Espumante Moscato Gold Magus 750Ml",
    "category": "alimenticios",
    "price": 8551,
    "stock": 100,
    "desc": "Espumante Moscato Gold Magus 750Ml",
    "img": "/imagens/espumante-moscato-gold-magus-750ml.jpg",
    "encomenda": false
  },
  {
    "id": "215",
    "name": "Sangria Kilima Garrafa 750Ml",
    "category": "alimenticios",
    "price": 3260,
    "stock": 100,
    "desc": "Sangria Kilima Garrafa 750Ml",
    "img": "/imagens/sangria-kilima-garrafa-750ml.jpg",
    "encomenda": false
  },
  {
    "id": "216",
    "name": "Sangria Kilima 5L",
    "category": "alimenticios",
    "price": 16302,
    "stock": 100,
    "desc": "Sangria Kilima 5L",
    "img": "/imagens/sangria-kilima-5l.jpg",
    "encomenda": false
  },
  {
    "id": "217",
    "name": "Ginguba Torrada Fiesta 185G Lata",
    "category": "alimenticios",
    "price": 10025223,
    "stock": 100,
    "desc": "Ginguba Torrada Fiesta 185G Lata",
    "img": "/imagens/ginguba-torrada-fiesta-185g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "218",
    "name": "Ginguba Torrada Fiesta 50G Pacote",
    "category": "alimenticios",
    "price": 13689109,
    "stock": 100,
    "desc": "Ginguba Torrada Fiesta 50G Pacote",
    "img": "/imagens/ginguba-torrada-fiesta-50g-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "219",
    "name": "Nozes Caramelizadas Fiesta 120G Lata",
    "category": "alimenticios",
    "price": 34038790,
    "stock": 100,
    "desc": "Nozes Caramelizadas Fiesta 120G Lata",
    "img": "/imagens/nozes-caramelizadas-fiesta-120g-lata.jpg",
    "encomenda": false
  },
  {
    "id": "220",
    "name": "Manteiga De Amendoim Ginguba Fiesta 200G",
    "category": "alimenticios",
    "price": 46878149,
    "stock": 100,
    "desc": "Manteiga De Amendoim Ginguba Fiesta 200G",
    "img": "/imagens/manteiga-de-amendoim-ginguba-fiesta-200g.jpg",
    "encomenda": false
  },
  {
    "id": "221",
    "name": "Ketchup Fiesta 340G",
    "category": "alimenticios",
    "price": 10286860,
    "stock": 100,
    "desc": "Ketchup Fiesta 340G",
    "img": "/imagens/ketchup-fiesta-340g.jpg",
    "encomenda": false
  },
  {
    "id": "222",
    "name": "Ketchup Fiesta 5Kg Bidon",
    "category": "alimenticios",
    "price": 29615955,
    "stock": 100,
    "desc": "Ketchup Fiesta 5Kg Bidon",
    "img": "/imagens/ketchup-fiesta-5kg-bidon.jpg",
    "encomenda": false
  },
  {
    "id": "223",
    "name": "Leite Evaporizado Fiesta 170G",
    "category": "alimenticios",
    "price": 17576451,
    "stock": 100,
    "desc": "Leite Evaporizado Fiesta 170G",
    "img": "/imagens/leite-evaporizado-fiesta-170g.jpg",
    "encomenda": false
  },
  {
    "id": "224",
    "name": "Maionese Fiesta 235Ml Vidro",
    "category": "alimenticios",
    "price": 4999148,
    "stock": 100,
    "desc": "Maionese Fiesta 235Ml Vidro",
    "img": "/imagens/maionese-fiesta-235ml-vidro.jpg",
    "encomenda": false
  },
  {
    "id": "225",
    "name": "Maionese Fiesta 3.785L Bidon",
    "category": "alimenticios",
    "price": 68765455,
    "stock": 100,
    "desc": "Maionese Fiesta 3.785L Bidon",
    "img": "/imagens/maionese-fiesta-3-785l-bidon.jpg",
    "encomenda": false
  },
  {
    "id": "226",
    "name": "Maionese Fiesta 445Ml Vidro",
    "category": "alimenticios",
    "price": 13187470,
    "stock": 100,
    "desc": "Maionese Fiesta 445Ml Vidro",
    "img": "/imagens/maionese-fiesta-445ml-vidro.jpg",
    "encomenda": false
  },
  {
    "id": "227",
    "name": "Maionese Fiesta 460Ml Top Down",
    "category": "alimenticios",
    "price": 15249792,
    "stock": 100,
    "desc": "Maionese Fiesta 460Ml Top Down",
    "img": "/imagens/maionese-fiesta-460ml-top-down.jpg",
    "encomenda": false
  },
  {
    "id": "228",
    "name": "Maionese Fiesta 947Ml Vidro",
    "category": "alimenticios",
    "price": 11645440,
    "stock": 100,
    "desc": "Maionese Fiesta 947Ml Vidro",
    "img": "/imagens/maionese-fiesta-947ml-vidro.jpg",
    "encomenda": false
  },
  {
    "id": "229",
    "name": "Sal De Mesa Fiesta Fino 250G Frasco",
    "category": "alimenticios",
    "price": 2805325,
    "stock": 100,
    "desc": "Sal De Mesa Fiesta Fino 250G Frasco",
    "img": "/imagens/sal-de-mesa-fiesta-fino-250g-frasco.jpg",
    "encomenda": false
  },
  {
    "id": "230",
    "name": "Sal Do Mar Fiesta Fino 250G",
    "category": "alimenticios",
    "price": 173160,
    "stock": 100,
    "desc": "Sal Do Mar Fiesta Fino 250G",
    "img": "/imagens/sal-do-mar-fiesta-fino-250g.jpg",
    "encomenda": false
  },
  {
    "id": "231",
    "name": "Sal Do Mar Fiesta Fino 500G",
    "category": "alimenticios",
    "price": 105560,
    "stock": 100,
    "desc": "Sal Do Mar Fiesta Fino 500G",
    "img": "/imagens/sal-do-mar-fiesta-fino-500g.jpg",
    "encomenda": false
  },
  {
    "id": "232",
    "name": "Sal Do Mar Fiesta Grosso 1Kg",
    "category": "alimenticios",
    "price": 245960,
    "stock": 100,
    "desc": "Sal Do Mar Fiesta Grosso 1Kg",
    "img": "/imagens/sal-do-mar-fiesta-grosso-1kg.jpg",
    "encomenda": false
  },
  {
    "id": "233",
    "name": "Linda Lava Tudo Jadim Flores 12X750Ml",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Lava Tudo Jadim Flores 12X750Ml",
    "img": "/imagens/linda-lava-tudo-jadim-flores-12x750ml.jpg",
    "encomenda": true
  },
  {
    "id": "234",
    "name": "Linda Lava Loica Limao 12X750Ml",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Lava Loica Limao 12X750Ml",
    "img": "/imagens/linda-lava-loica-limao-12x750ml.jpg",
    "encomenda": true
  },
  {
    "id": "235",
    "name": "Linda Lava Loica Morango 12X750Ml",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Lava Loica Morango 12X750Ml",
    "img": "/imagens/linda-lava-loica-morango-12x750ml.jpg",
    "encomenda": true
  },
  {
    "id": "236",
    "name": "Linda Guardanapos 33X33 1X24X75",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Guardanapos 33X33 1X24X75",
    "img": "/imagens/linda-guardanapos-33x33-1x24x75.jpg",
    "encomenda": true
  },
  {
    "id": "237",
    "name": "Linda Guardanapos 33X33 1X24X45",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Guardanapos 33X33 1X24X45",
    "img": "/imagens/linda-guardanapos-33x33-1x24x45.jpg",
    "encomenda": true
  },
  {
    "id": "238",
    "name": "Linda Papel Higienico 100 Servicos 24X4Rolos",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Papel Higienico 100 Servicos 24X4Rolos",
    "img": "/imagens/linda-papel-higienico-100-servicos-24x4rolos.jpg",
    "encomenda": true
  },
  {
    "id": "239",
    "name": "Linda Lava Loica Mistura 12X500Ml",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Linda Lava Loica Mistura 12X500Ml",
    "img": "/imagens/linda-lava-loica-mistura-12x500ml.jpg",
    "encomenda": true
  },
  {
    "id": "240",
    "name": "Marvel Pasta De Dentes Carvao 6X80G",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Marvel Pasta De Dentes Carvao 6X80G",
    "img": "/imagens/marvel-pasta-de-dentes-carvao-6x80g.jpg",
    "encomenda": true
  },
  {
    "id": "241",
    "name": "Marvel Escova De Dentes Adulto 24 Units",
    "category": "higienizacao",
    "price": 0,
    "stock": 100,
    "desc": "Marvel Escova De Dentes Adulto 24 Units",
    "img": "/imagens/marvel-escova-de-dentes-adulto-24-units.jpg",
    "encomenda": true
  },
  {
    "id": "242",
    "name": "Oradente Escova De Dentes Crianca 30 Units",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Oradente Escova De Dentes Crianca 30 Units",
    "img": "/imagens/oradente-escova-de-dentes-crianca-30-units.jpg",
    "encomenda": false
  },
  {
    "id": "243",
    "name": "Agua Destilada Ultra  5Lt * 3",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Agua Destilada Ultra  5Lt * 3",
    "img": "/imagens/agua-destilada-ultra-5lt-3.jpg",
    "encomenda": false
  },
  {
    "id": "244",
    "name": "Ama Amaciador Coco 650 Ml* 12",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Ama Amaciador Coco 650 Ml* 12",
    "img": "/imagens/ama-amaciador-coco-650-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "245",
    "name": "Ama Amaciador Colorido 650 Ml* 12",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Ama Amaciador Colorido 650 Ml* 12",
    "img": "/imagens/ama-amaciador-colorido-650-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "246",
    "name": "Ama Amaciador Hipoalergenico 650 Ml* 12",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Ama Amaciador Hipoalergenico 650 Ml* 12",
    "img": "/imagens/ama-amaciador-hipoalergenico-650-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "247",
    "name": "Ama Amaciador Melancia 650 Ml* 12",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Ama Amaciador Melancia 650 Ml* 12",
    "img": "/imagens/ama-amaciador-melancia-650-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "248",
    "name": "Ama Amaciador Sensitive 650 Ml* 12",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Ama Amaciador Sensitive 650 Ml* 12",
    "img": "/imagens/ama-amaciador-sensitive-650-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "249",
    "name": "Ama Lava Loica Lavandra 4L* 4",
    "category": "higienizacao",
    "price": 3600,
    "stock": 100,
    "desc": "Ama Lava Loica Lavandra 4L* 4",
    "img": "/imagens/ama-lava-loica-lavandra-4l-4.jpg",
    "encomenda": false
  },
  {
    "id": "250",
    "name": "Ama LixÃ­via 400 Ml * 18",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Ama LixÃ­via 400 Ml * 18",
    "img": "/imagens/ama-lixivia-400-ml-18.jpg",
    "encomenda": false
  },
  {
    "id": "251",
    "name": "Ama Po 180 Gr * 24 Saco",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "Ama Po 180 Gr * 24 Saco",
    "img": "/imagens/ama-po-180-gr-24-saco.jpg",
    "encomenda": false
  },
  {
    "id": "252",
    "name": "Ama Po 25 Gr*150 Woven Bag",
    "category": "higienizacao",
    "price": 50,
    "stock": 100,
    "desc": "Ama Po 25 Gr*150 Woven Bag",
    "img": "/imagens/ama-po-25-gr-150-woven-bag.jpg",
    "encomenda": false
  },
  {
    "id": "253",
    "name": "Ama Po 280 Gr * 12 Saco",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Ama Po 280 Gr * 12 Saco",
    "img": "/imagens/ama-po-280-gr-12-saco.jpg",
    "encomenda": false
  },
  {
    "id": "254",
    "name": "Ama Po 280 Gr * 24 Saco",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Ama Po 280 Gr * 24 Saco",
    "img": "/imagens/ama-po-280-gr-24-saco.jpg",
    "encomenda": false
  },
  {
    "id": "255",
    "name": "Ama Po 70 Gr * 50 Woven Bag",
    "category": "higienizacao",
    "price": 100,
    "stock": 100,
    "desc": "Ama Po 70 Gr * 50 Woven Bag",
    "img": "/imagens/ama-po-70-gr-50-woven-bag.jpg",
    "encomenda": false
  },
  {
    "id": "256",
    "name": "Ama -Sabao Em Barra Herbal 1.4Kg * 16",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Herbal 1.4Kg * 16",
    "img": "/imagens/ama-sabao-em-barra-herbal-1-4kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "257",
    "name": "Ama -Sabao Em Barra Herbal 900Gm * 20",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Herbal 900Gm * 20",
    "img": "/imagens/ama-sabao-em-barra-herbal-900gm-20.jpg",
    "encomenda": false
  },
  {
    "id": "258",
    "name": "Ama -Sabao Em Barra Natural 1.4Kg * 16",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Natural 1.4Kg * 16",
    "img": "/imagens/ama-sabao-em-barra-natural-1-4kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "259",
    "name": "Ama -Sabao Em Barra Natural 1.4Kg * 16",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Natural 1.4Kg * 16",
    "img": "/imagens/ama-sabao-em-barra-natural-1-4kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "260",
    "name": "Ama -Sabao Em Barra Natural 900Gm * 20",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Natural 900Gm * 20",
    "img": "/imagens/ama-sabao-em-barra-natural-900gm-20.jpg",
    "encomenda": false
  },
  {
    "id": "261",
    "name": "Ama -Sabao Em Barra Oceano 1.4Kg * 16",
    "category": "higienizacao",
    "price": 2600,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Oceano 1.4Kg * 16",
    "img": "/imagens/ama-sabao-em-barra-oceano-1-4kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "262",
    "name": "Ama -Sabao Em Barra Oceano 800 Gm * 20",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Oceano 800 Gm * 20",
    "img": "/imagens/ama-sabao-em-barra-oceano-800-gm-20.jpg",
    "encomenda": false
  },
  {
    "id": "263",
    "name": "Ama -Sabao Em Barra Oceano 900Gm * 20",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Ama -Sabao Em Barra Oceano 900Gm * 20",
    "img": "/imagens/ama-sabao-em-barra-oceano-900gm-20.jpg",
    "encomenda": false
  },
  {
    "id": "264",
    "name": "Amaciador Ultra  Baunilha 2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra  Baunilha 2000Ml*6",
    "img": "/imagens/amaciador-ultra-baunilha-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "265",
    "name": "Amaciador Ultra  Carinho De Mae  20 L",
    "category": "higienizacao",
    "price": 22000,
    "stock": 100,
    "desc": "Amaciador Ultra  Carinho De Mae  20 L",
    "img": "/imagens/amaciador-ultra-carinho-de-mae-20-l.jpg",
    "encomenda": false
  },
  {
    "id": "266",
    "name": "Amaciador Ultra  Carinho De Mae  2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra  Carinho De Mae  2000Ml*6",
    "img": "/imagens/amaciador-ultra-carinho-de-mae-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "267",
    "name": "Amaciador Ultra  Carmelo 2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra  Carmelo 2000Ml*6",
    "img": "/imagens/amaciador-ultra-carmelo-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "268",
    "name": "Amaciador Ultra  Colorido 2000Ml*6",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Amaciador Ultra  Colorido 2000Ml*6",
    "img": "/imagens/amaciador-ultra-colorido-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "269",
    "name": "Amaciador Ultra  Tropical  2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra  Tropical  2000Ml*6",
    "img": "/imagens/amaciador-ultra-tropical-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "270",
    "name": "Amaciador Ultra Flores Silvestres 2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra Flores Silvestres 2000Ml*6",
    "img": "/imagens/amaciador-ultra-flores-silvestres-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "271",
    "name": "Amaciador Ultra Florescendo  Flores  2000Ml*6",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Amaciador Ultra Florescendo  Flores  2000Ml*6",
    "img": "/imagens/amaciador-ultra-florescendo-flores-2000ml-6.jpg",
    "encomenda": false
  },
  {
    "id": "272",
    "name": "Ambientador 425 Ml*12 Jasmim",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Jasmim",
    "img": "/imagens/ambientador-425-ml-12-jasmim.jpg",
    "encomenda": false
  },
  {
    "id": "273",
    "name": "Ambientador 425 Ml*12 Lar",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Lar",
    "img": "/imagens/ambientador-425-ml-12-lar.jpg",
    "encomenda": false
  },
  {
    "id": "274",
    "name": "Ambientador 425 Ml*12 Lavanda",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Lavanda",
    "img": "/imagens/ambientador-425-ml-12-lavanda.jpg",
    "encomenda": false
  },
  {
    "id": "275",
    "name": "Ambientador 425 Ml*12 Limao",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Limao",
    "img": "/imagens/ambientador-425-ml-12-limao.jpg",
    "encomenda": false
  },
  {
    "id": "276",
    "name": "Ambientador 425 Ml*12 Oceano",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Oceano",
    "img": "/imagens/ambientador-425-ml-12-oceano.jpg",
    "encomenda": false
  },
  {
    "id": "277",
    "name": "Ambientador 425 Ml*12 Pessego",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Pessego",
    "img": "/imagens/ambientador-425-ml-12-pessego.jpg",
    "encomenda": false
  },
  {
    "id": "278",
    "name": "Ambientador 425 Ml*12 Uvas",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador 425 Ml*12 Uvas",
    "img": "/imagens/ambientador-425-ml-12-uvas.jpg",
    "encomenda": false
  },
  {
    "id": "279",
    "name": "Ambientador Ultra 425 Ml*12 Colorido",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Ambientador Ultra 425 Ml*12 Colorido",
    "img": "/imagens/ambientador-ultra-425-ml-12-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "280",
    "name": "Champoo U Pet 375Ml*12  Happy",
    "category": "higienizacao",
    "price": 1300,
    "stock": 100,
    "desc": "Champoo U Pet 375Ml*12  Happy",
    "img": "/imagens/champoo-u-pet-375ml-12-happy.jpg",
    "encomenda": false
  },
  {
    "id": "281",
    "name": "Champoo U Pet 375Ml*12  Playful",
    "category": "higienizacao",
    "price": 1000,
    "stock": 100,
    "desc": "Champoo U Pet 375Ml*12  Playful",
    "img": "/imagens/champoo-u-pet-375ml-12-playful.jpg",
    "encomenda": false
  },
  {
    "id": "282",
    "name": "Champoo U Pet 375Ml*12  Royal",
    "category": "higienizacao",
    "price": 1000,
    "stock": 100,
    "desc": "Champoo U Pet 375Ml*12  Royal",
    "img": "/imagens/champoo-u-pet-375ml-12-royal.jpg",
    "encomenda": false
  },
  {
    "id": "283",
    "name": "Colonia U Pet 250Ml*12  Happy",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Colonia U Pet 250Ml*12  Happy",
    "img": "/imagens/colonia-u-pet-250ml-12-happy.jpg",
    "encomenda": false
  },
  {
    "id": "284",
    "name": "Colonia U Pet 250Ml*12  Royal",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Colonia U Pet 250Ml*12  Royal",
    "img": "/imagens/colonia-u-pet-250ml-12-royal.jpg",
    "encomenda": false
  },
  {
    "id": "285",
    "name": "Desinfectante Ãlcool Gel MÃ£os GlÃ³ria 300Ml *12",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Desinfectante Ãlcool Gel MÃ£os GlÃ³ria 300Ml *12",
    "img": "/imagens/desinfectante-alcool-gel-maos-gloria-300ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "286",
    "name": "Desinfectante Frutas E Legumes Ultra 250Ml*24",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "Desinfectante Frutas E Legumes Ultra 250Ml*24",
    "img": "/imagens/desinfectante-frutas-e-legumes-ultra-250ml-24.jpg",
    "encomenda": false
  },
  {
    "id": "287",
    "name": "Detergent Liquid U Laundry 1.5L* 9 Colorido",
    "category": "higienizacao",
    "price": 3500,
    "stock": 100,
    "desc": "Detergent Liquid U Laundry 1.5L* 9 Colorido",
    "img": "/imagens/detergent-liquid-u-laundry-1-5l-9-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "288",
    "name": "Detergent Liquid U Laundry 1.5L* 9 Roupa Escura",
    "category": "higienizacao",
    "price": 3500,
    "stock": 100,
    "desc": "Detergent Liquid U Laundry 1.5L* 9 Roupa Escura",
    "img": "/imagens/detergent-liquid-u-laundry-1-5l-9-roupa-escura.jpg",
    "encomenda": false
  },
  {
    "id": "289",
    "name": "Detergent Liquid U Laundry1.5L*9 Hipoalergenico",
    "category": "higienizacao",
    "price": 3000,
    "stock": 100,
    "desc": "Detergent Liquid U Laundry1.5L*9 Hipoalergenico",
    "img": "/imagens/detergent-liquid-u-laundry1-5l-9-hipoalergenico.jpg",
    "encomenda": false
  },
  {
    "id": "290",
    "name": "Detergent Liquid U Laundry1.5Ml*9 Roupa Perfumada",
    "category": "higienizacao",
    "price": 3300,
    "stock": 100,
    "desc": "Detergent Liquid U Laundry1.5Ml*9 Roupa Perfumada",
    "img": "/imagens/detergent-liquid-u-laundry1-5ml-9-roupa-perfumada.jpg",
    "encomenda": false
  },
  {
    "id": "291",
    "name": "Detergent Liquid Ultra Laundry 20Ltr* 1 Blue",
    "category": "higienizacao",
    "price": 35000,
    "stock": 100,
    "desc": "Detergent Liquid Ultra Laundry 20Ltr* 1 Blue",
    "img": "/imagens/detergent-liquid-ultra-laundry-20ltr-1-blue.jpg",
    "encomenda": false
  },
  {
    "id": "292",
    "name": "Detergente Em PÃ³ Ama 10Kg Saco",
    "category": "higienizacao",
    "price": 12000,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ama 10Kg Saco",
    "img": "/imagens/detergente-em-po-ama-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "293",
    "name": "Detergente Em PÃ³ So Lava 180 Gr * 25 Saco",
    "category": "higienizacao",
    "price": 250,
    "stock": 100,
    "desc": "Detergente Em PÃ³ So Lava 180 Gr * 25 Saco",
    "img": "/imagens/detergente-em-po-so-lava-180-gr-25-saco.jpg",
    "encomenda": false
  },
  {
    "id": "294",
    "name": "Detergente Em PÃ³ So Lava 280 Gr * 12 Saco",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Detergente Em PÃ³ So Lava 280 Gr * 12 Saco",
    "img": "/imagens/detergente-em-po-so-lava-280-gr-12-saco.jpg",
    "encomenda": false
  },
  {
    "id": "295",
    "name": "Detergente Em PÃ³ So Lava 280 Gr * 24 Saco",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Detergente Em PÃ³ So Lava 280 Gr * 24 Saco",
    "img": "/imagens/detergente-em-po-so-lava-280-gr-24-saco.jpg",
    "encomenda": false
  },
  {
    "id": "296",
    "name": "Detergente Em PÃ³ So Lava 30 Gr * 150 Saco",
    "category": "higienizacao",
    "price": 50,
    "stock": 100,
    "desc": "Detergente Em PÃ³ So Lava 30 Gr * 150 Saco",
    "img": "/imagens/detergente-em-po-so-lava-30-gr-150-saco.jpg",
    "encomenda": false
  },
  {
    "id": "297",
    "name": "Detergente Em PÃ³ So Lava 90 Gr * 50 Saco",
    "category": "higienizacao",
    "price": 120,
    "stock": 100,
    "desc": "Detergente Em PÃ³ So Lava 90 Gr * 50 Saco",
    "img": "/imagens/detergente-em-po-so-lava-90-gr-50-saco.jpg",
    "encomenda": false
  },
  {
    "id": "298",
    "name": "Detergente Em PÃ³ Ultra  100Gr * 50 Saco",
    "category": "higienizacao",
    "price": 250,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra  100Gr * 50 Saco",
    "img": "/imagens/detergente-em-po-ultra-100gr-50-saco.jpg",
    "encomenda": false
  },
  {
    "id": "299",
    "name": "Detergente Em PÃ³ Ultra  200Gr * 25 Saco",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra  200Gr * 25 Saco",
    "img": "/imagens/detergente-em-po-ultra-200gr-25-saco.jpg",
    "encomenda": false
  },
  {
    "id": "300",
    "name": "Detergente Em PÃ³ Ultra  300 Gr * 12 Saco",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra  300 Gr * 12 Saco",
    "img": "/imagens/detergente-em-po-ultra-300-gr-12-saco.jpg",
    "encomenda": false
  },
  {
    "id": "301",
    "name": "Detergente Em PÃ³ Ultra  300 Gr * 24 Saco",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra  300 Gr * 24 Saco",
    "img": "/imagens/detergente-em-po-ultra-300-gr-24-saco.jpg",
    "encomenda": false
  },
  {
    "id": "302",
    "name": "Detergente Em PÃ³ Ultra  Lf 1.2 Kg * 6 Pcs Maq Auto",
    "category": "higienizacao",
    "price": 2600,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra  Lf 1.2 Kg * 6 Pcs Maq Auto",
    "img": "/imagens/detergente-em-po-ultra-lf-1-2-kg-6-pcs-maq-auto.jpg",
    "encomenda": false
  },
  {
    "id": "303",
    "name": "Detergente Em PÃ³ Ultra 3 Kg * 3 Pacote Maq Automat",
    "category": "higienizacao",
    "price": 9000,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra 3 Kg * 3 Pacote Maq Automat",
    "img": "/imagens/detergente-em-po-ultra-3-kg-3-pacote-maq-automat.jpg",
    "encomenda": false
  },
  {
    "id": "304",
    "name": "Detergente Em PÃ³ Ultra 3.5 Kg * 3 Pacote",
    "category": "higienizacao",
    "price": 6700,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra 3.5 Kg * 3 Pacote",
    "img": "/imagens/detergente-em-po-ultra-3-5-kg-3-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "305",
    "name": "Detergente Em PÃ³ Ultra 30 Gr * 150 Saco",
    "category": "higienizacao",
    "price": 50,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra 30 Gr * 150 Saco",
    "img": "/imagens/detergente-em-po-ultra-30-gr-150-saco.jpg",
    "encomenda": false
  },
  {
    "id": "306",
    "name": "Detergente Em PÃ³ Ultra 5 Kg * 3 Pacote Maq Automat",
    "category": "higienizacao",
    "price": 13500,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra 5 Kg * 3 Pacote Maq Automat",
    "img": "/imagens/detergente-em-po-ultra-5-kg-3-pacote-maq-automat.jpg",
    "encomenda": false
  },
  {
    "id": "307",
    "name": "Detergente Em PÃ³ Ultra Lf  10Kg Saco",
    "category": "higienizacao",
    "price": 20000,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra Lf  10Kg Saco",
    "img": "/imagens/detergente-em-po-ultra-lf-10kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "308",
    "name": "Detergente Em PÃ³ Ultra Lf  3.2  Kg* 3 Pcs Maq Auto",
    "category": "higienizacao",
    "price": 7000,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra Lf  3.2  Kg* 3 Pcs Maq Auto",
    "img": "/imagens/detergente-em-po-ultra-lf-3-2-kg-3-pcs-maq-auto.jpg",
    "encomenda": false
  },
  {
    "id": "309",
    "name": "Detergente Em Po Ultra Manual - 5 Kg Saco",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Detergente Em Po Ultra Manual - 5 Kg Saco",
    "img": "/imagens/detergente-em-po-ultra-manual-5-kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "310",
    "name": "Detergente Em PÃ³ Ultra Primavera Lf 3.2 Kg*3 Maq A",
    "category": "higienizacao",
    "price": 7500,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra Primavera Lf 3.2 Kg*3 Maq A",
    "img": "/imagens/detergente-em-po-ultra-primavera-lf-3-2-kg-3-maq-a.jpg",
    "encomenda": false
  },
  {
    "id": "311",
    "name": "Detergente Em PÃ³ Ultra Primavera Lf1.2 Kg* 6 Maq A",
    "category": "higienizacao",
    "price": 3500,
    "stock": 100,
    "desc": "Detergente Em PÃ³ Ultra Primavera Lf1.2 Kg* 6 Maq A",
    "img": "/imagens/detergente-em-po-ultra-primavera-lf1-2-kg-6-maq-a.jpg",
    "encomenda": false
  },
  {
    "id": "312",
    "name": "Glori Sabonete Liquido Frutas Vermelho 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Glori Sabonete Liquido Frutas Vermelho 330*12  Cx",
    "img": "/imagens/glori-sabonete-liquido-frutas-vermelho-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "313",
    "name": "Gloria  Sabonrte Liquido Herbal Ervas 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria  Sabonrte Liquido Herbal Ervas 330*12  Cx",
    "img": "/imagens/gloria-sabonrte-liquido-herbal-ervas-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "314",
    "name": "Gloria  Sabonrte Liquido Herbal Ervas 5Ltr*3 Cx",
    "category": "higienizacao",
    "price": 8000,
    "stock": 100,
    "desc": "Gloria  Sabonrte Liquido Herbal Ervas 5Ltr*3 Cx",
    "img": "/imagens/gloria-sabonrte-liquido-herbal-ervas-5ltr-3-cx.jpg",
    "encomenda": false
  },
  {
    "id": "315",
    "name": "Gloria Desinfectante Maos 70% 375 * 12",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Gloria Desinfectante Maos 70% 375 * 12",
    "img": "/imagens/gloria-desinfectante-maos-70-375-12.jpg",
    "encomenda": false
  },
  {
    "id": "316",
    "name": "Gloria Hand Sanitizer 300*12  Cx",
    "category": "higienizacao",
    "price": 1800,
    "stock": 100,
    "desc": "Gloria Hand Sanitizer 300*12  Cx",
    "img": "/imagens/gloria-hand-sanitizer-300-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "317",
    "name": "Gloria Hand Sanitizer 75Ml * 36  Cx",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Gloria Hand Sanitizer 75Ml * 36  Cx",
    "img": "/imagens/gloria-hand-sanitizer-75ml-36-cx.jpg",
    "encomenda": false
  },
  {
    "id": "318",
    "name": "Gloria Hand Sanitizer 75Ml * 36  Cx",
    "category": "higienizacao",
    "price": 950,
    "stock": 100,
    "desc": "Gloria Hand Sanitizer 75Ml * 36  Cx",
    "img": "/imagens/gloria-hand-sanitizer-75ml-36-cx.jpg",
    "encomenda": false
  },
  {
    "id": "319",
    "name": "Gloria Sabonete  Liquido Lavender 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria Sabonete  Liquido Lavender 330*12  Cx",
    "img": "/imagens/gloria-sabonete-liquido-lavender-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "320",
    "name": "Gloria Sabonete Liq Em Espuma 330Ml*12 Melancia",
    "category": "higienizacao",
    "price": 850,
    "stock": 100,
    "desc": "Gloria Sabonete Liq Em Espuma 330Ml*12 Melancia",
    "img": "/imagens/gloria-sabonete-liq-em-espuma-330ml-12-melancia.jpg",
    "encomenda": false
  },
  {
    "id": "321",
    "name": "Gloria Sabonete Liquido Colorido 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria Sabonete Liquido Colorido 330*12  Cx",
    "img": "/imagens/gloria-sabonete-liquido-colorido-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "322",
    "name": "Gloria Sabonete Liquido -Fruta Vermelho 5L",
    "category": "higienizacao",
    "price": 25000,
    "stock": 100,
    "desc": "Gloria Sabonete Liquido -Fruta Vermelho 5L",
    "img": "/imagens/gloria-sabonete-liquido-fruta-vermelho-5l.jpg",
    "encomenda": false
  },
  {
    "id": "323",
    "name": "Gloria Sabonete Liquido Limao 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria Sabonete Liquido Limao 330*12  Cx",
    "img": "/imagens/gloria-sabonete-liquido-limao-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "324",
    "name": "Gloria Sabonete Liquido Limao 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria Sabonete Liquido Limao 330*12  Cx",
    "img": "/imagens/gloria-sabonete-liquido-limao-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "325",
    "name": "Gloria Sabonete Liquido -Limao 5L",
    "category": "higienizacao",
    "price": 24000,
    "stock": 100,
    "desc": "Gloria Sabonete Liquido -Limao 5L",
    "img": "/imagens/gloria-sabonete-liquido-limao-5l.jpg",
    "encomenda": false
  },
  {
    "id": "326",
    "name": "Gloria Sabonete White Mel 75Gr * 48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Gloria Sabonete White Mel 75Gr * 48",
    "img": "/imagens/gloria-sabonete-white-mel-75gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "327",
    "name": "Gloria Sabonrte Liquido Natural 330*12  Cx",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Gloria Sabonrte Liquido Natural 330*12  Cx",
    "img": "/imagens/gloria-sabonrte-liquido-natural-330-12-cx.jpg",
    "encomenda": false
  },
  {
    "id": "328",
    "name": "Gloria Sabont Liq Em Espuma 330Ml*12 Creme De Coco",
    "category": "higienizacao",
    "price": 850,
    "stock": 100,
    "desc": "Gloria Sabont Liq Em Espuma 330Ml*12 Creme De Coco",
    "img": "/imagens/gloria-sabont-liq-em-espuma-330ml-12-creme-de-coco.jpg",
    "encomenda": false
  },
  {
    "id": "329",
    "name": "Lava Loica Ama Amizade 400 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Lava Loica Ama Amizade 400 Ml * 12",
    "img": "/imagens/lava-loica-ama-amizade-400-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "330",
    "name": "Lava Loica Ama Ciume 400 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Lava Loica Ama Ciume 400 Ml * 12",
    "img": "/imagens/lava-loica-ama-ciume-400-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "331",
    "name": "Lava Loica Ama Colorido 400 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Lava Loica Ama Colorido 400 Ml * 12",
    "img": "/imagens/lava-loica-ama-colorido-400-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "332",
    "name": "Lava Loica Ama Harmonia 400 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Lava Loica Ama Harmonia 400 Ml * 12",
    "img": "/imagens/lava-loica-ama-harmonia-400-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "333",
    "name": "Lava Loica Ama Paixao 400 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Lava Loica Ama Paixao 400 Ml * 12",
    "img": "/imagens/lava-loica-ama-paixao-400-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "334",
    "name": "Lava LoiÃ§a So Lava 500 Ml*12 Colorido",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava LoiÃ§a So Lava 500 Ml*12 Colorido",
    "img": "/imagens/lava-loica-so-lava-500-ml-12-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "335",
    "name": "Lava LoiÃ§a So Lava 750 Ml*12 Colorido",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava LoiÃ§a So Lava 750 Ml*12 Colorido",
    "img": "/imagens/lava-loica-so-lava-750-ml-12-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "336",
    "name": "Lava LoiÃ§a So Lava Laranja 500Ml*12",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava LoiÃ§a So Lava Laranja 500Ml*12",
    "img": "/imagens/lava-loica-so-lava-laranja-500ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "337",
    "name": "Lava LoiÃ§a So Lava Limao 500Ml*12",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava LoiÃ§a So Lava Limao 500Ml*12",
    "img": "/imagens/lava-loica-so-lava-limao-500ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "338",
    "name": "Lava LoiÃ§a So Lava Morango 500Ml*12",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava LoiÃ§a So Lava Morango 500Ml*12",
    "img": "/imagens/lava-loica-so-lava-morango-500ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "339",
    "name": "Lava Loica Ultra 20L* 1 Limao",
    "category": "higienizacao",
    "price": 20000,
    "stock": 100,
    "desc": "Lava Loica Ultra 20L* 1 Limao",
    "img": "/imagens/lava-loica-ultra-20l-1-limao.jpg",
    "encomenda": false
  },
  {
    "id": "340",
    "name": "Lava Tudo Ama 650 Ml*12 Avilo - Limao",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ama 650 Ml*12 Avilo - Limao",
    "img": "/imagens/lava-tudo-ama-650-ml-12-avilo-limao.jpg",
    "encomenda": false
  },
  {
    "id": "341",
    "name": "Lava Tudo Ama 650 Ml*12 Bateu -Lavanda",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ama 650 Ml*12 Bateu -Lavanda",
    "img": "/imagens/lava-tudo-ama-650-ml-12-bateu-lavanda.jpg",
    "encomenda": false
  },
  {
    "id": "342",
    "name": "Lava Tudo Ama 650 Ml*12 Colorido",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ama 650 Ml*12 Colorido",
    "img": "/imagens/lava-tudo-ama-650-ml-12-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "343",
    "name": "Lava Tudo Ama 650 Ml*12 Mamoite-Rosa",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ama 650 Ml*12 Mamoite-Rosa",
    "img": "/imagens/lava-tudo-ama-650-ml-12-mamoite-rosa.jpg",
    "encomenda": false
  },
  {
    "id": "344",
    "name": "Lava Tudo Ama 650 Ml*12 Papoite - Pinho",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ama 650 Ml*12 Papoite - Pinho",
    "img": "/imagens/lava-tudo-ama-650-ml-12-papoite-pinho.jpg",
    "encomenda": false
  },
  {
    "id": "345",
    "name": "Lava Tudo So Lava Anti-Insect & Desinfect 1000Ml*8",
    "category": "higienizacao",
    "price": 950,
    "stock": 100,
    "desc": "Lava Tudo So Lava Anti-Insect & Desinfect 1000Ml*8",
    "img": "/imagens/lava-tudo-so-lava-anti-insect-desinfect-1000ml-8.jpg",
    "encomenda": false
  },
  {
    "id": "346",
    "name": "Lava Tudo Ultra  5Lt * 3 Pinho",
    "category": "higienizacao",
    "price": 3800,
    "stock": 100,
    "desc": "Lava Tudo Ultra  5Lt * 3 Pinho",
    "img": "/imagens/lava-tudo-ultra-5lt-3-pinho.jpg",
    "encomenda": false
  },
  {
    "id": "347",
    "name": "Lava Tudo Ultra  5Lt * 3 Rosa",
    "category": "higienizacao",
    "price": 3800,
    "stock": 100,
    "desc": "Lava Tudo Ultra  5Lt * 3 Rosa",
    "img": "/imagens/lava-tudo-ultra-5lt-3-rosa.jpg",
    "encomenda": false
  },
  {
    "id": "348",
    "name": "Lava Tudo Ultra 1500 Ml * 9  Brisa",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Lava Tudo Ultra 1500 Ml * 9  Brisa",
    "img": "/imagens/lava-tudo-ultra-1500-ml-9-brisa.jpg",
    "encomenda": false
  },
  {
    "id": "349",
    "name": "Lava Tudo Ultra 1500 Ml * 9  Colorido",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Lava Tudo Ultra 1500 Ml * 9  Colorido",
    "img": "/imagens/lava-tudo-ultra-1500-ml-9-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "350",
    "name": "Lava Tudo Ultra 1500 Ml * 9  Uvas",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Lava Tudo Ultra 1500 Ml * 9  Uvas",
    "img": "/imagens/lava-tudo-ultra-1500-ml-9-uvas.jpg",
    "encomenda": false
  },
  {
    "id": "351",
    "name": "Lava Tudo Ultra 1500 Ml * 9 Fruta",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Lava Tudo Ultra 1500 Ml * 9 Fruta",
    "img": "/imagens/lava-tudo-ultra-1500-ml-9-fruta.jpg",
    "encomenda": false
  },
  {
    "id": "352",
    "name": "Lava Tudo Ultra 1500 Ml * 9 Pinho",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Lava Tudo Ultra 1500 Ml * 9 Pinho",
    "img": "/imagens/lava-tudo-ultra-1500-ml-9-pinho.jpg",
    "encomenda": false
  },
  {
    "id": "353",
    "name": "Lava Tudo Ultra 20L* 1 Pinho Herbal",
    "category": "higienizacao",
    "price": 17000,
    "stock": 100,
    "desc": "Lava Tudo Ultra 20L* 1 Pinho Herbal",
    "img": "/imagens/lava-tudo-ultra-20l-1-pinho-herbal.jpg",
    "encomenda": false
  },
  {
    "id": "354",
    "name": "Lava Tudo Ultra 20L* 1 Rosa",
    "category": "higienizacao",
    "price": 14000,
    "stock": 100,
    "desc": "Lava Tudo Ultra 20L* 1 Rosa",
    "img": "/imagens/lava-tudo-ultra-20l-1-rosa.jpg",
    "encomenda": false
  },
  {
    "id": "355",
    "name": "Lava Tudo Ultra 750 Ml * 12 Colorido",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml * 12 Colorido",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "356",
    "name": "Lava Tudo Ultra 750 Ml* 12 Brisa Marinha",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Brisa Marinha",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-brisa-marinha.jpg",
    "encomenda": false
  },
  {
    "id": "357",
    "name": "Lava Tudo Ultra 750 Ml* 12 Frutas Tropical",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Frutas Tropical",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-frutas-tropical.jpg",
    "encomenda": false
  },
  {
    "id": "358",
    "name": "Lava Tudo Ultra 750 Ml* 12 Lavanda",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Lavanda",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-lavanda.jpg",
    "encomenda": false
  },
  {
    "id": "359",
    "name": "Lava Tudo Ultra 750 Ml* 12 Limao",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Limao",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-limao.jpg",
    "encomenda": false
  },
  {
    "id": "360",
    "name": "Lava Tudo Ultra 750 Ml* 12 Pinho Herbal",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Pinho Herbal",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-pinho-herbal.jpg",
    "encomenda": false
  },
  {
    "id": "361",
    "name": "Lava Tudo Ultra 750 Ml* 12 Rosa",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Rosa",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-rosa.jpg",
    "encomenda": false
  },
  {
    "id": "362",
    "name": "Lava Tudo Ultra 750 Ml* 12 Uvas",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava Tudo Ultra 750 Ml* 12 Uvas",
    "img": "/imagens/lava-tudo-ultra-750-ml-12-uvas.jpg",
    "encomenda": false
  },
  {
    "id": "363",
    "name": "Lava-LoiÃ§a So Lava 750 Ml * 12 Lavanda",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava-LoiÃ§a So Lava 750 Ml * 12 Lavanda",
    "img": "/imagens/lava-loica-so-lava-750-ml-12-lavanda.jpg",
    "encomenda": false
  },
  {
    "id": "364",
    "name": "Lava-LoiÃ§a So Lava 750 Ml * 12 MaÃ§Ã£",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava-LoiÃ§a So Lava 750 Ml * 12 MaÃ§Ã£",
    "img": "/imagens/lava-loica-so-lava-750-ml-12-maca.jpg",
    "encomenda": false
  },
  {
    "id": "365",
    "name": "Lava-LoiÃ§a So Lava LimÃ£o 5Lt * 3",
    "category": "higienizacao",
    "price": 4500,
    "stock": 100,
    "desc": "Lava-LoiÃ§a So Lava LimÃ£o 5Lt * 3",
    "img": "/imagens/lava-loica-so-lava-limao-5lt-3.jpg",
    "encomenda": false
  },
  {
    "id": "366",
    "name": "Lava-LoiÃ§a Solava 500 Ml * 12  MaÃ§a",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Solava 500 Ml * 12  MaÃ§a",
    "img": "/imagens/lava-loica-solava-500-ml-12-maca.jpg",
    "encomenda": false
  },
  {
    "id": "367",
    "name": "Lava-LoiÃ§a Solava 500 Ml * 12 Lavanda",
    "category": "higienizacao",
    "price": 650,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Solava 500 Ml * 12 Lavanda",
    "img": "/imagens/lava-loica-solava-500-ml-12-lavanda.jpg",
    "encomenda": false
  },
  {
    "id": "368",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12",
    "img": "/imagens/lava-loica-ultra-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "369",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12 Coco",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12 Coco",
    "img": "/imagens/lava-loica-ultra-500-ml-12-coco.jpg",
    "encomenda": false
  },
  {
    "id": "370",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12 Laranja",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12 Laranja",
    "img": "/imagens/lava-loica-ultra-500-ml-12-laranja.jpg",
    "encomenda": false
  },
  {
    "id": "371",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12 Lilac",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12 Lilac",
    "img": "/imagens/lava-loica-ultra-500-ml-12-lilac.jpg",
    "encomenda": false
  },
  {
    "id": "372",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12 Limao",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12 Limao",
    "img": "/imagens/lava-loica-ultra-500-ml-12-limao.jpg",
    "encomenda": false
  },
  {
    "id": "373",
    "name": "Lava-LoiÃ§a Ultra 500 Ml * 12 MaÃ§a",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 500 Ml * 12 MaÃ§a",
    "img": "/imagens/lava-loica-ultra-500-ml-12-maca.jpg",
    "encomenda": false
  },
  {
    "id": "374",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12",
    "img": "/imagens/lava-loica-ultra-750-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "375",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 Coco",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 Coco",
    "img": "/imagens/lava-loica-ultra-750-ml-12-coco.jpg",
    "encomenda": false
  },
  {
    "id": "376",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 Fruta Vermelha",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 Fruta Vermelha",
    "img": "/imagens/lava-loica-ultra-750-ml-12-fruta-vermelha.jpg",
    "encomenda": false
  },
  {
    "id": "377",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 Laranja",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 Laranja",
    "img": "/imagens/lava-loica-ultra-750-ml-12-laranja.jpg",
    "encomenda": false
  },
  {
    "id": "378",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 Lilac",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 Lilac",
    "img": "/imagens/lava-loica-ultra-750-ml-12-lilac.jpg",
    "encomenda": false
  },
  {
    "id": "379",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 LimÃ£o",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 LimÃ£o",
    "img": "/imagens/lava-loica-ultra-750-ml-12-limao.jpg",
    "encomenda": false
  },
  {
    "id": "380",
    "name": "Lava-LoiÃ§a Ultra 750 Ml * 12 MaÃ§Ã£",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra 750 Ml * 12 MaÃ§Ã£",
    "img": "/imagens/lava-loica-ultra-750-ml-12-maca.jpg",
    "encomenda": false
  },
  {
    "id": "381",
    "name": "Lava-LoiÃ§a Ultra LimÃ£o 5Lt * 3",
    "category": "higienizacao",
    "price": 5000,
    "stock": 100,
    "desc": "Lava-LoiÃ§a Ultra LimÃ£o 5Lt * 3",
    "img": "/imagens/lava-loica-ultra-limao-5lt-3.jpg",
    "encomenda": false
  },
  {
    "id": "382",
    "name": "Limpa Carpetes 20L*1",
    "category": "higienizacao",
    "price": 14000,
    "stock": 100,
    "desc": "Limpa Carpetes 20L*1",
    "img": "/imagens/limpa-carpetes-20l-1.jpg",
    "encomenda": false
  },
  {
    "id": "383",
    "name": "Limpa Forno 20L*1",
    "category": "higienizacao",
    "price": 32000,
    "stock": 100,
    "desc": "Limpa Forno 20L*1",
    "img": "/imagens/limpa-forno-20l-1.jpg",
    "encomenda": false
  },
  {
    "id": "384",
    "name": "Limpa Sanitas Com Lixvia 750Ml*12",
    "category": "higienizacao",
    "price": 1700,
    "stock": 100,
    "desc": "Limpa Sanitas Com Lixvia 750Ml*12",
    "img": "/imagens/limpa-sanitas-com-lixvia-750ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "385",
    "name": "Limpa Sanitas Com Pinho 750Ml*12",
    "category": "higienizacao",
    "price": 1700,
    "stock": 100,
    "desc": "Limpa Sanitas Com Pinho 750Ml*12",
    "img": "/imagens/limpa-sanitas-com-pinho-750ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "386",
    "name": "Limpa Sanitas Extra Power 750Ml*12",
    "category": "higienizacao",
    "price": 1700,
    "stock": 100,
    "desc": "Limpa Sanitas Extra Power 750Ml*12",
    "img": "/imagens/limpa-sanitas-extra-power-750ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "387",
    "name": "Limpa Vidro- Multi Uso 2 In 1 Ama 500 Ml * 12",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Limpa Vidro- Multi Uso 2 In 1 Ama 500 Ml * 12",
    "img": "/imagens/limpa-vidro-multi-uso-2-in-1-ama-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "388",
    "name": "Limpa Vidros Ultra 500 Ml * 12",
    "category": "higienizacao",
    "price": 750,
    "stock": 100,
    "desc": "Limpa Vidros Ultra 500 Ml * 12",
    "img": "/imagens/limpa-vidros-ultra-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "389",
    "name": "Liquido  Ultra Car Wash 5000 Ml * 03",
    "category": "higienizacao",
    "price": 5000,
    "stock": 100,
    "desc": "Liquido  Ultra Car Wash 5000 Ml * 03",
    "img": "/imagens/liquido-ultra-car-wash-5000-ml-03.jpg",
    "encomenda": false
  },
  {
    "id": "390",
    "name": "LixÃ­via Ama 1000 Ml * 10",
    "category": "higienizacao",
    "price": 600,
    "stock": 100,
    "desc": "LixÃ­via Ama 1000 Ml * 10",
    "img": "/imagens/lixivia-ama-1000-ml-10.jpg",
    "encomenda": false
  },
  {
    "id": "391",
    "name": "LixÃ­via So Lava1000 Ml * 12",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "LixÃ­via So Lava1000 Ml * 12",
    "img": "/imagens/lixivia-so-lava1000-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "392",
    "name": "LixÃ­via Ultra 1000 Ml * 12",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "LixÃ­via Ultra 1000 Ml * 12",
    "img": "/imagens/lixivia-ultra-1000-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "393",
    "name": "LixÃ­via Ultra 20L*1",
    "category": "higienizacao",
    "price": 10000,
    "stock": 100,
    "desc": "LixÃ­via Ultra 20L*1",
    "img": "/imagens/lixivia-ultra-20l-1.jpg",
    "encomenda": false
  },
  {
    "id": "394",
    "name": "LixÃ­via Ultra 4000 Ml * 4",
    "category": "higienizacao",
    "price": 2100,
    "stock": 100,
    "desc": "LixÃ­via Ultra 4000 Ml * 4",
    "img": "/imagens/lixivia-ultra-4000-ml-4.jpg",
    "encomenda": false
  },
  {
    "id": "395",
    "name": "Multi Uso Ultra 500 Ml * 12",
    "category": "higienizacao",
    "price": 700,
    "stock": 100,
    "desc": "Multi Uso Ultra 500 Ml * 12",
    "img": "/imagens/multi-uso-ultra-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "396",
    "name": "Po Ama 100Gr * 50 Saco",
    "category": "higienizacao",
    "price": 250,
    "stock": 100,
    "desc": "Po Ama 100Gr * 50 Saco",
    "img": "/imagens/po-ama-100gr-50-saco.jpg",
    "encomenda": false
  },
  {
    "id": "397",
    "name": "Po Ama 200 Gr * 25 Saco",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "Po Ama 200 Gr * 25 Saco",
    "img": "/imagens/po-ama-200-gr-25-saco.jpg",
    "encomenda": false
  },
  {
    "id": "398",
    "name": "Po Ama 300Gr * 24 Saco Woven Bag",
    "category": "higienizacao",
    "price": 1400,
    "stock": 100,
    "desc": "Po Ama 300Gr * 24 Saco Woven Bag",
    "img": "/imagens/po-ama-300gr-24-saco-woven-bag.jpg",
    "encomenda": false
  },
  {
    "id": "399",
    "name": "Po Ama Lf 1 Kg * 6  Pcs Maq Automatica",
    "category": "higienizacao",
    "price": 1800,
    "stock": 100,
    "desc": "Po Ama Lf 1 Kg * 6  Pcs Maq Automatica",
    "img": "/imagens/po-ama-lf-1-kg-6-pcs-maq-automatica.jpg",
    "encomenda": false
  },
  {
    "id": "400",
    "name": "Po Ama Lf 2.7Kg * 4 Pcs Maq Automatica",
    "category": "higienizacao",
    "price": 5300,
    "stock": 100,
    "desc": "Po Ama Lf 2.7Kg * 4 Pcs Maq Automatica",
    "img": "/imagens/po-ama-lf-2-7kg-4-pcs-maq-automatica.jpg",
    "encomenda": false
  },
  {
    "id": "401",
    "name": "Po Combo Bags 350/300 Gm",
    "category": "higienizacao",
    "price": 10,
    "stock": 100,
    "desc": "Po Combo Bags 350/300 Gm",
    "img": "/imagens/po-combo-bags-350-300-gm.jpg",
    "encomenda": false
  },
  {
    "id": "402",
    "name": "Sabao Em Barra Herbal 1 Kg * 20",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Sabao Em Barra Herbal 1 Kg * 20",
    "img": "/imagens/sabao-em-barra-herbal-1-kg-20.jpg",
    "encomenda": false
  },
  {
    "id": "403",
    "name": "Sabao Em Barra Herbal 1.5Kg * 16",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Sabao Em Barra Herbal 1.5Kg * 16",
    "img": "/imagens/sabao-em-barra-herbal-1-5kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "404",
    "name": "Sabao Em Barra Madarinha 500Gm * 10",
    "category": "higienizacao",
    "price": 800,
    "stock": 100,
    "desc": "Sabao Em Barra Madarinha 500Gm * 10",
    "img": "/imagens/sabao-em-barra-madarinha-500gm-10.jpg",
    "encomenda": false
  },
  {
    "id": "405",
    "name": "Sabao Em Barra Natural 1 Kg * 20",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Sabao Em Barra Natural 1 Kg * 20",
    "img": "/imagens/sabao-em-barra-natural-1-kg-20.jpg",
    "encomenda": false
  },
  {
    "id": "406",
    "name": "Sabao Em Barra Natural 1.5Kg * 16",
    "category": "higienizacao",
    "price": 2500,
    "stock": 100,
    "desc": "Sabao Em Barra Natural 1.5Kg * 16",
    "img": "/imagens/sabao-em-barra-natural-1-5kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "407",
    "name": "Sabao Em Barra Oceano 1 Kg * 20",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "Sabao Em Barra Oceano 1 Kg * 20",
    "img": "/imagens/sabao-em-barra-oceano-1-kg-20.jpg",
    "encomenda": false
  },
  {
    "id": "408",
    "name": "Sabao Em Barra Oceano 1.5Kg * 16",
    "category": "higienizacao",
    "price": 2700,
    "stock": 100,
    "desc": "Sabao Em Barra Oceano 1.5Kg * 16",
    "img": "/imagens/sabao-em-barra-oceano-1-5kg-16.jpg",
    "encomenda": false
  },
  {
    "id": "409",
    "name": "SabÃ£o Multiusos So Lava  Branco 150Gm * 36 Pcs",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos So Lava  Branco 150Gm * 36 Pcs",
    "img": "/imagens/sabao-multiusos-so-lava-branco-150gm-36-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "410",
    "name": "SabÃ£o Multiusos So Lava Branco 200Gm * 30 Pcs",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "SabÃ£o Multiusos So Lava Branco 200Gm * 30 Pcs",
    "img": "/imagens/sabao-multiusos-so-lava-branco-200gm-30-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "411",
    "name": "SabÃ£o Multiusos So Lava Castanho 150Gm * 36 Pcs",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos So Lava Castanho 150Gm * 36 Pcs",
    "img": "/imagens/sabao-multiusos-so-lava-castanho-150gm-36-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "412",
    "name": "SabÃ£o Multiusos Ultra Fresco 150Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Fresco 150Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-fresco-150gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "413",
    "name": "SabÃ£o Multiusos Ultra Natural TranslÃºcida 100Gm*48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Natural TranslÃºcida 100Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-natural-translucida-100gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "414",
    "name": "SabÃ£o Multiusos Ultra Natural TranslÃºcida 150Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Natural TranslÃºcida 150Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-natural-translucida-150gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "415",
    "name": "SabÃ£o Multiusos Ultra Oceano150Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Oceano150Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-oceano150gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "416",
    "name": "SabÃ£o Multiusos Ultra Verde TranslÃºcida 100Gm*48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Verde TranslÃºcida 100Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-verde-translucida-100gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "417",
    "name": "SabÃ£o Multiusos Ultra Verde TranslÃºcida 150Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "SabÃ£o Multiusos Ultra Verde TranslÃºcida 150Gm*48",
    "img": "/imagens/sabao-multiusos-ultra-verde-translucida-150gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "418",
    "name": "Sabonete Gloria Aloe Vera 125Gr * 48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Sabonete Gloria Aloe Vera 125Gr * 48",
    "img": "/imagens/sabonete-gloria-aloe-vera-125gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "419",
    "name": "Sabonete Gloria LimÃ£o 125Gr * 48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Sabonete Gloria LimÃ£o 125Gr * 48",
    "img": "/imagens/sabonete-gloria-limao-125gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "420",
    "name": "Sabonete Gloria Oceano 75Gr * 48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Sabonete Gloria Oceano 75Gr * 48",
    "img": "/imagens/sabonete-gloria-oceano-75gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "421",
    "name": "Sabonete Gloria Orquideas 125Gr * 48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Sabonete Gloria Orquideas 125Gr * 48",
    "img": "/imagens/sabonete-gloria-orquideas-125gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "422",
    "name": "Sabonete Gloria Orquideas 75Gr * 48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Sabonete Gloria Orquideas 75Gr * 48",
    "img": "/imagens/sabonete-gloria-orquideas-75gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "423",
    "name": "Sabonete Gloria Rosas 75Gr * 48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Sabonete Gloria Rosas 75Gr * 48",
    "img": "/imagens/sabonete-gloria-rosas-75gr-48.jpg",
    "encomenda": false
  },
  {
    "id": "424",
    "name": "So Lava Hf -5 Kg Saco",
    "category": "higienizacao",
    "price": 5500,
    "stock": 100,
    "desc": "So Lava Hf -5 Kg Saco",
    "img": "/imagens/so-lava-hf-5-kg-saco.jpg",
    "encomenda": false
  },
  {
    "id": "425",
    "name": "So Lava LixÃ­via 400 Ml * 18",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "So Lava LixÃ­via 400 Ml * 18",
    "img": "/imagens/so-lava-lixivia-400-ml-18.jpg",
    "encomenda": false
  },
  {
    "id": "426",
    "name": "So Lava Po 150 Gr * 30 Saco",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "So Lava Po 150 Gr * 30 Saco",
    "img": "/imagens/so-lava-po-150-gr-30-saco.jpg",
    "encomenda": false
  },
  {
    "id": "427",
    "name": "So Lava Po 25 Gr * 150 Saco",
    "category": "higienizacao",
    "price": 50,
    "stock": 100,
    "desc": "So Lava Po 25 Gr * 150 Saco",
    "img": "/imagens/so-lava-po-25-gr-150-saco.jpg",
    "encomenda": false
  },
  {
    "id": "428",
    "name": "So Lava Po 50 Gr * 70 Saco",
    "category": "higienizacao",
    "price": 100,
    "stock": 100,
    "desc": "So Lava Po 50 Gr * 70 Saco",
    "img": "/imagens/so-lava-po-50-gr-70-saco.jpg",
    "encomenda": false
  },
  {
    "id": "429",
    "name": "So Lava Sabao Em Barra 800 Gr *20 Pcs Natural",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "So Lava Sabao Em Barra 800 Gr *20 Pcs Natural",
    "img": "/imagens/so-lava-sabao-em-barra-800-gr-20-pcs-natural.jpg",
    "encomenda": false
  },
  {
    "id": "430",
    "name": "So Lava Sabao Em Barra Azul 800 Gr X 20 Pcs",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "So Lava Sabao Em Barra Azul 800 Gr X 20 Pcs",
    "img": "/imagens/so-lava-sabao-em-barra-azul-800-gr-x-20-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "431",
    "name": "So Lava Sabao Em Barra Herbal 1.2 Kg X 16 Pcs",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "So Lava Sabao Em Barra Herbal 1.2 Kg X 16 Pcs",
    "img": "/imagens/so-lava-sabao-em-barra-herbal-1-2-kg-x-16-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "432",
    "name": "So Lava Sabao Em Barra Herbal 800 Gr X 20 Pcs",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "So Lava Sabao Em Barra Herbal 800 Gr X 20 Pcs",
    "img": "/imagens/so-lava-sabao-em-barra-herbal-800-gr-x-20-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "433",
    "name": "So Lava Sabao Em Barra Natural 1.2 Kg X 16 Pcs",
    "category": "higienizacao",
    "price": 2000,
    "stock": 100,
    "desc": "So Lava Sabao Em Barra Natural 1.2 Kg X 16 Pcs",
    "img": "/imagens/so-lava-sabao-em-barra-natural-1-2-kg-x-16-pcs.jpg",
    "encomenda": false
  },
  {
    "id": "434",
    "name": "Toilet Soap Aloe Vera 75Gm*48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Toilet Soap Aloe Vera 75Gm*48",
    "img": "/imagens/toilet-soap-aloe-vera-75gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "435",
    "name": "Toilet Soap Limao 75Gm*48",
    "category": "higienizacao",
    "price": 200,
    "stock": 100,
    "desc": "Toilet Soap Limao 75Gm*48",
    "img": "/imagens/toilet-soap-limao-75gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "436",
    "name": "Toilet Soap Oceanos 125Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Toilet Soap Oceanos 125Gm*48",
    "img": "/imagens/toilet-soap-oceanos-125gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "437",
    "name": "Toilet Soap Rosas 125Gm*48",
    "category": "higienizacao",
    "price": 300,
    "stock": 100,
    "desc": "Toilet Soap Rosas 125Gm*48",
    "img": "/imagens/toilet-soap-rosas-125gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "438",
    "name": "Ultra 180 Gr * 30Pcs",
    "category": "higienizacao",
    "price": 350,
    "stock": 100,
    "desc": "Ultra 180 Gr * 30Pcs",
    "img": "/imagens/ultra-180-gr-30pcs.jpg",
    "encomenda": false
  },
  {
    "id": "439",
    "name": "Ultra Limpa Fornos 500 Ml * 12",
    "category": "higienizacao",
    "price": 1000,
    "stock": 100,
    "desc": "Ultra Limpa Fornos 500 Ml * 12",
    "img": "/imagens/ultra-limpa-fornos-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "440",
    "name": "Ultra Limpa Jantes 500 Ml * 12",
    "category": "higienizacao",
    "price": 1600,
    "stock": 100,
    "desc": "Ultra Limpa Jantes 500 Ml * 12",
    "img": "/imagens/ultra-limpa-jantes-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "441",
    "name": "Ultra Limpa Moveis 500 Ml * 12",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Ultra Limpa Moveis 500 Ml * 12",
    "img": "/imagens/ultra-limpa-moveis-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "442",
    "name": "Ultra Limpa Tecidos 500 Ml * 12",
    "category": "higienizacao",
    "price": 1500,
    "stock": 100,
    "desc": "Ultra Limpa Tecidos 500 Ml * 12",
    "img": "/imagens/ultra-limpa-tecidos-500-ml-12.jpg",
    "encomenda": false
  },
  {
    "id": "443",
    "name": "Ultra LixÃ­via 400 Ml * 18",
    "category": "higienizacao",
    "price": 500,
    "stock": 100,
    "desc": "Ultra LixÃ­via 400 Ml * 18",
    "img": "/imagens/ultra-lixivia-400-ml-18.jpg",
    "encomenda": false
  },
  {
    "id": "444",
    "name": "Ultra Multi-Purpose Soap Fresco 200Gm*48",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Ultra Multi-Purpose Soap Fresco 200Gm*48",
    "img": "/imagens/ultra-multi-purpose-soap-fresco-200gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "445",
    "name": "Ultra Multi-Purpose Soap Oceano 200Gm*48",
    "category": "higienizacao",
    "price": 400,
    "stock": 100,
    "desc": "Ultra Multi-Purpose Soap Oceano 200Gm*48",
    "img": "/imagens/ultra-multi-purpose-soap-oceano-200gm-48.jpg",
    "encomenda": false
  },
  {
    "id": "446",
    "name": "Ultra Po 60 Gr * 50Pcs",
    "category": "higienizacao",
    "price": 150,
    "stock": 100,
    "desc": "Ultra Po 60 Gr * 50Pcs",
    "img": "/imagens/ultra-po-60-gr-50pcs.jpg",
    "encomenda": false
  },
  {
    "id": "447",
    "name": "Ultra Shampoo De Caro 1L*12",
    "category": "higienizacao",
    "price": 900,
    "stock": 100,
    "desc": "Ultra Shampoo De Caro 1L*12",
    "img": "/imagens/ultra-shampoo-de-caro-1l-12.jpg",
    "encomenda": false
  },
  {
    "id": "448",
    "name": "Agafador Alicate 24/6 Cap . 35Fls",
    "category": "escritorio",
    "price": 7699,
    "stock": 100,
    "desc": "Agafador Alicate 24/6 Cap . 35Fls",
    "img": "/imagens/agafador-alicate-24-6-cap-35fls.jpg",
    "encomenda": false
  },
  {
    "id": "449",
    "name": "Agrafador 24/6 & 26/6",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Agrafador 24/6 & 26/6",
    "img": "/imagens/agrafador-24-6-26-6.jpg",
    "encomenda": false
  },
  {
    "id": "450",
    "name": "Agrafador Grande",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Agrafador Grande",
    "img": "/imagens/agrafador-grande.jpg",
    "encomenda": false
  },
  {
    "id": "451",
    "name": "Agrafador NÂº 10 Absn2669",
    "category": "escritorio",
    "price": 2899,
    "stock": 100,
    "desc": "Agrafador NÂº 10 Absn2669",
    "img": "/imagens/agrafador-n-10-absn2669.jpg",
    "encomenda": false
  },
  {
    "id": "452",
    "name": "Agrafos 23/13",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Agrafos 23/13",
    "img": "/imagens/agrafos-23-13.jpg",
    "encomenda": false
  },
  {
    "id": "453",
    "name": "Agrafos 26/6",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Agrafos 26/6",
    "img": "/imagens/agrafos-26-6.jpg",
    "encomenda": false
  },
  {
    "id": "454",
    "name": "Agrafos Citycolor 24/6",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Agrafos Citycolor 24/6",
    "img": "/imagens/agrafos-citycolor-24-6.jpg",
    "encomenda": false
  },
  {
    "id": "455",
    "name": "Agrafos NÂº 10 1000Pcs 10/500",
    "category": "escritorio",
    "price": 289,
    "stock": 100,
    "desc": "Agrafos NÂº 10 1000Pcs 10/500",
    "img": "/imagens/agrafos-n-10-1000pcs-10-500.jpg",
    "encomenda": false
  },
  {
    "id": "456",
    "name": "Alfinetes De Vitrine Coloridos",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Alfinetes De Vitrine Coloridos",
    "img": "/imagens/alfinetes-de-vitrine-coloridos.jpg",
    "encomenda": false
  },
  {
    "id": "457",
    "name": "Bloco De Notas Colorido",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Bloco De Notas Colorido",
    "img": "/imagens/bloco-de-notas-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "458",
    "name": "Bloco De Notas Post It 76X76 3X3 100S",
    "category": "escritorio",
    "price": 559,
    "stock": 100,
    "desc": "Bloco De Notas Post It 76X76 3X3 100S",
    "img": "/imagens/bloco-de-notas-post-it-76x76-3x3-100s.jpg",
    "encomenda": false
  },
  {
    "id": "459",
    "name": "Bolsa Mica Office Stationery",
    "category": "escritorio",
    "price": 8400,
    "stock": 100,
    "desc": "Bolsa Mica Office Stationery",
    "img": "/imagens/bolsa-mica-office-stationery.jpg",
    "encomenda": false
  },
  {
    "id": "460",
    "name": "Calculadora Grande",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Calculadora Grande",
    "img": "/imagens/calculadora-grande.jpg",
    "encomenda": false
  },
  {
    "id": "461",
    "name": "Calculadora Pequena",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Calculadora Pequena",
    "img": "/imagens/calculadora-pequena.jpg",
    "encomenda": false
  },
  {
    "id": "462",
    "name": "CalendÃ¡rio De EscritÃ³rio",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "CalendÃ¡rio De EscritÃ³rio",
    "img": "/imagens/calendario-de-escritorio.jpg",
    "encomenda": false
  },
  {
    "id": "463",
    "name": "Canetas",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Canetas",
    "img": "/imagens/canetas.jpg",
    "encomenda": false
  },
  {
    "id": "464",
    "name": "Cesta De Lixo De EscritÃ³rio",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Cesta De Lixo De EscritÃ³rio",
    "img": "/imagens/cesta-de-lixo-de-escritorio.jpg",
    "encomenda": false
  },
  {
    "id": "465",
    "name": "Clip De Papel - Preto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Clip De Papel - Preto",
    "img": "/imagens/clip-de-papel-preto.jpg",
    "encomenda": false
  },
  {
    "id": "466",
    "name": "Clips De Papel Colorido",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Clips De Papel Colorido",
    "img": "/imagens/clips-de-papel-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "467",
    "name": "Clips NÂº 10 MetÃ¡lico 50Mm Abs916Ds",
    "category": "escritorio",
    "price": 1400,
    "stock": 100,
    "desc": "Clips NÂº 10 MetÃ¡lico 50Mm Abs916Ds",
    "img": "/imagens/clips-n-10-metalico-50mm-abs916ds.jpg",
    "encomenda": false
  },
  {
    "id": "468",
    "name": "Cola Branca",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Cola Branca",
    "img": "/imagens/cola-branca.jpg",
    "encomenda": false
  },
  {
    "id": "469",
    "name": "Corrector",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Corrector",
    "img": "/imagens/corrector.jpg",
    "encomenda": false
  },
  {
    "id": "470",
    "name": "Dispensador De Fita-Cola",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Dispensador De Fita-Cola",
    "img": "/imagens/dispensador-de-fita-cola.jpg",
    "encomenda": false
  },
  {
    "id": "471",
    "name": "Envelope A4",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Envelope A4",
    "img": "/imagens/envelope-a4.jpg",
    "encomenda": false
  },
  {
    "id": "472",
    "name": "EsferogrÃ¡fica Bravo Azul",
    "category": "escritorio",
    "price": 114,
    "stock": 100,
    "desc": "EsferogrÃ¡fica Bravo Azul",
    "img": "/imagens/esferografica-bravo-azul.jpg",
    "encomenda": false
  },
  {
    "id": "473",
    "name": "EsferogrÃ¡fica Bravo Preta",
    "category": "escritorio",
    "price": 114,
    "stock": 100,
    "desc": "EsferogrÃ¡fica Bravo Preta",
    "img": "/imagens/esferografica-bravo-preta.jpg",
    "encomenda": false
  },
  {
    "id": "474",
    "name": "Furador De Arquivos",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Furador De Arquivos",
    "img": "/imagens/furador-de-arquivos.jpg",
    "encomenda": false
  },
  {
    "id": "475",
    "name": "Lapis De Cores",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Lapis De Cores",
    "img": "/imagens/lapis-de-cores.jpg",
    "encomenda": false
  },
  {
    "id": "476",
    "name": "Livro De Registos De Entrada",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Livro De Registos De Entrada",
    "img": "/imagens/livro-de-registos-de-entrada.jpg",
    "encomenda": false
  },
  {
    "id": "477",
    "name": "Marcador De Texto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Marcador De Texto",
    "img": "/imagens/marcador-de-texto.jpg",
    "encomenda": false
  },
  {
    "id": "478",
    "name": "Marcador De Texto - Conjunto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Marcador De Texto - Conjunto",
    "img": "/imagens/marcador-de-texto-conjunto.jpg",
    "encomenda": false
  },
  {
    "id": "479",
    "name": "Micas Grossas A4 100Un",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Micas Grossas A4 100Un",
    "img": "/imagens/micas-grossas-a4-100un.jpg",
    "encomenda": false
  },
  {
    "id": "480",
    "name": "Molas De Papel 32Mm/ 12Pcs Abs92734",
    "category": "escritorio",
    "price": 1875,
    "stock": 100,
    "desc": "Molas De Papel 32Mm/ 12Pcs Abs92734",
    "img": "/imagens/molas-de-papel-32mm-12pcs-abs92734.jpg",
    "encomenda": false
  },
  {
    "id": "481",
    "name": "Molas De Papel 32Mm/ 24Pcs Abs92734",
    "category": "escritorio",
    "price": 3750,
    "stock": 100,
    "desc": "Molas De Papel 32Mm/ 24Pcs Abs92734",
    "img": "/imagens/molas-de-papel-32mm-24pcs-abs92734.jpg",
    "encomenda": false
  },
  {
    "id": "482",
    "name": "Navigator A3 - Caixa",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Navigator A3 - Caixa",
    "img": "/imagens/navigator-a3-caixa.jpg",
    "encomenda": false
  },
  {
    "id": "483",
    "name": "Navigator A3 - Resma",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Navigator A3 - Resma",
    "img": "/imagens/navigator-a3-resma.jpg",
    "encomenda": false
  },
  {
    "id": "484",
    "name": "Navigator A4 - Resma",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Navigator A4 - Resma",
    "img": "/imagens/navigator-a4-resma.jpg",
    "encomenda": false
  },
  {
    "id": "485",
    "name": "Organizador De Mesa De EscritÃ³rio",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Organizador De Mesa De EscritÃ³rio",
    "img": "/imagens/organizador-de-mesa-de-escritorio.jpg",
    "encomenda": false
  },
  {
    "id": "486",
    "name": "Papel Adesivo Colorido - Pacote",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Papel Adesivo Colorido - Pacote",
    "img": "/imagens/papel-adesivo-colorido-pacote.jpg",
    "encomenda": false
  },
  {
    "id": "487",
    "name": "Pasta De Arquivos Colorida",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Pasta De Arquivos Colorida",
    "img": "/imagens/pasta-de-arquivos-colorida.jpg",
    "encomenda": false
  },
  {
    "id": "488",
    "name": "Pasta De Arquivos Larga M&G",
    "category": "escritorio",
    "price": 3149,
    "stock": 100,
    "desc": "Pasta De Arquivos Larga M&G",
    "img": "/imagens/pasta-de-arquivos-larga-m-g.jpg",
    "encomenda": false
  },
  {
    "id": "489",
    "name": "Pasta De Arquivos Lombada Larga",
    "category": "escritorio",
    "price": 3705,
    "stock": 100,
    "desc": "Pasta De Arquivos Lombada Larga",
    "img": "/imagens/pasta-de-arquivos-lombada-larga.jpg",
    "encomenda": false
  },
  {
    "id": "490",
    "name": "Pasta De Despacho Colorido",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Pasta De Despacho Colorido",
    "img": "/imagens/pasta-de-despacho-colorido.jpg",
    "encomenda": false
  },
  {
    "id": "491",
    "name": "Pasta De Processos PlÃ¡stica",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Pasta De Processos PlÃ¡stica",
    "img": "/imagens/pasta-de-processos-plastica.jpg",
    "encomenda": false
  },
  {
    "id": "492",
    "name": "Porta Caneta MetÃ¡lica - Circular",
    "category": "escritorio",
    "price": 2899,
    "stock": 100,
    "desc": "Porta Caneta MetÃ¡lica - Circular",
    "img": "/imagens/porta-caneta-metalica-circular.jpg",
    "encomenda": false
  },
  {
    "id": "493",
    "name": "Porta-Canetas Com Compartimentos",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Porta-Canetas Com Compartimentos",
    "img": "/imagens/porta-canetas-com-compartimentos.jpg",
    "encomenda": false
  },
  {
    "id": "494",
    "name": "Prancheta",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Prancheta",
    "img": "/imagens/prancheta.jpg",
    "encomenda": false
  },
  {
    "id": "495",
    "name": "RÃ©gua - 50 Cm",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "RÃ©gua - 50 Cm",
    "img": "/imagens/regua-50-cm.jpg",
    "encomenda": false
  },
  {
    "id": "496",
    "name": "RÃ©gua Branca 30 Cm",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "RÃ©gua Branca 30 Cm",
    "img": "/imagens/regua-branca-30-cm.jpg",
    "encomenda": false
  },
  {
    "id": "497",
    "name": "RÃ©guas Coloridas 15 Cm",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "RÃ©guas Coloridas 15 Cm",
    "img": "/imagens/reguas-coloridas-15-cm.jpg",
    "encomenda": false
  },
  {
    "id": "498",
    "name": "Removedor De Agrafos",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Removedor De Agrafos",
    "img": "/imagens/removedor-de-agrafos.jpg",
    "encomenda": false
  },
  {
    "id": "499",
    "name": "Rolo De Papel De Tpa",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Rolo De Papel De Tpa",
    "img": "/imagens/rolo-de-papel-de-tpa.jpg",
    "encomenda": false
  },
  {
    "id": "500",
    "name": "Toner Hp 106A Preto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 106A Preto",
    "img": "/imagens/toner-hp-106a-preto.jpg",
    "encomenda": false
  },
  {
    "id": "501",
    "name": "Toner Hp 131A - Amarelo",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 131A - Amarelo",
    "img": "/imagens/toner-hp-131a-amarelo.jpg",
    "encomenda": false
  },
  {
    "id": "502",
    "name": "Toner Hp 131A - Ciano",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 131A - Ciano",
    "img": "/imagens/toner-hp-131a-ciano.jpg",
    "encomenda": false
  },
  {
    "id": "503",
    "name": "Toner Hp 131A - Magenta",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 131A - Magenta",
    "img": "/imagens/toner-hp-131a-magenta.jpg",
    "encomenda": false
  },
  {
    "id": "504",
    "name": "Toner Hp 131A - Preto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 131A - Preto",
    "img": "/imagens/toner-hp-131a-preto.jpg",
    "encomenda": false
  },
  {
    "id": "505",
    "name": "Toner Hp 207A - Amarelo",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 207A - Amarelo",
    "img": "/imagens/toner-hp-207a-amarelo.jpg",
    "encomenda": false
  },
  {
    "id": "506",
    "name": "Toner Hp 207A - Ciano",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 207A - Ciano",
    "img": "/imagens/toner-hp-207a-ciano.jpg",
    "encomenda": false
  },
  {
    "id": "507",
    "name": "Toner Hp 207A - Magenta",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 207A - Magenta",
    "img": "/imagens/toner-hp-207a-magenta.jpg",
    "encomenda": false
  },
  {
    "id": "508",
    "name": "Toner Hp 207A - Preto",
    "category": "escritorio",
    "price": 0,
    "stock": 100,
    "desc": "Toner Hp 207A - Preto",
    "img": "/imagens/toner-hp-207a-preto.jpg",
    "encomenda": false
  },
  {
    "id": "509",
    "name": "Toner Hp 83A Cf283A Preto",
    "category": "escritorio",
    "price": 120304,
    "stock": 100,
    "desc": "Toner Hp 83A Cf283A Preto",
    "img": "/imagens/toner-hp-83a-cf283a-preto.jpg",
    "encomenda": false
  }
];
// ============================================================
// DEPENDÊNCIAS
// ============================================================
const http     = require('http');
const fs       = require('fs');
const path     = require('path');
const url      = require('url');
const crypto   = require('crypto');

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs'); // puro JS — sem problemas de compilação no Render
const jwt    = require('jsonwebtoken');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT           = process.env.PORT || 3000;
const ROOT           = __dirname;
const HTML_FILE      = path.join(ROOT, 'index.html');
const IMG_DIR        = path.join(ROOT, 'imagens');
const JWT_SECRET     = process.env.JWT_SECRET || 'aquigarcia_jwt_secret_2026_seguro';
const SALT_ROUNDS    = 10;
const SUPABASE_ANON  = process.env.SUPABASE_ANON_KEY || '';

if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

// ============================================================
// UTILITÁRIOS
// ============================================================

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end',  () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function parseMultipart(buffer, boundary) {
  const fields = {};
  const files  = {};
  const sep    = Buffer.from('--' + boundary);
  const parts  = [];
  let start = 0;
  while (start < buffer.length) {
    const idx = buffer.indexOf(sep, start);
    if (idx === -1) break;
    const end  = buffer.indexOf(sep, idx + sep.length);
    const part = buffer.slice(idx + sep.length + 2, end === -1 ? buffer.length : end - 2);
    if (part.length > 0) parts.push(part);
    start = idx + sep.length;
    if (end === -1) break;
  }
  for (const part of parts) {
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) continue;
    const headerStr     = part.slice(0, headerEnd).toString('utf8');
    const body          = part.slice(headerEnd + 4);
    const nameMatch     = headerStr.match(/name="([^"]+)"/);
    const filenameMatch = headerStr.match(/filename="([^"]+)"/);
    if (!nameMatch) continue;
    const fieldName = nameMatch[1];
    if (filenameMatch) {
      const ctMatch = headerStr.match(/Content-Type:\s*([^\r\n]+)/i);
      files[fieldName] = {
        filename:    filenameMatch[1],
        contentType: ctMatch ? ctMatch[1].trim() : 'application/octet-stream',
        data:        body,
      };
    } else {
      fields[fieldName] = body.toString('utf8').replace(/\r\n$/, '');
    }
  }
  return { fields, files };
}

function slugify(str) {
  return (str || 'produto').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function setCORSHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function jsonRes(res, code, data) {
  setCORSHeaders(res);
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function getTokenFromHeader(req) {
  const auth = req.headers['authorization'] || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7);
  return null;
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// ============================================================
// CLOUDINARY — saveImage
// ============================================================
async function saveImage(filename, data) {
  return new Promise((resolve, reject) => {
    const publicId = filename.replace(/\.[^.]+$/, '');
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'aquigarcia', public_id: publicId, overwrite: true, resource_type: 'image' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    uploadStream.end(data);
  });
}

// ============================================================
// AUTH — SUPABASE (tabela: utilizadores)
// ============================================================

async function findUserByEmail(email) {
  const { data, error } = await supabase
    .from('utilizadores')
    .select('*')
    .eq('email', email.toLowerCase().trim())
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function createUser(nome, email, senha) {
  try {
    const senhaHash = await bcrypt.hash(senha, SALT_ROUNDS);
    const { data, error } = await supabase
      .from('utilizadores')
      .insert([{ nome: nome.trim(), email: email.toLowerCase().trim(), senha: senhaHash }])
      .select('id, nome, email, created_at')
      .single();
    if (error) {
      console.error('[createUser] Supabase:', error.code, error.message);
      if (error.code === '23505') throw new Error('EMAIL_JA_EXISTE');
      throw new Error(error.message);
    }
    return data;
  } catch(err) {
    if (err.message === 'EMAIL_JA_EXISTE') throw err;
    console.error('[createUser] Erro:', err.message);
    throw err;
  }
}

async function findUserById(id) {
  const { data, error } = await supabase
    .from('utilizadores')
    .select('id, nome, email, created_at')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

// ============================================================
// SUPABASE — CRUD PRODUTOS
// ============================================================

async function getProducts() {
  const { data, error } = await supabase
    .from('produtos')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('❌ [getProducts] Erro Supabase:', error.message);
    throw error;
  }

  if (!data || data.length === 0) {
    console.log('⚠️ [getProducts] Tabela vazia — a usar defaultProducts');
    return defaultProducts;
  }

  console.log(`✅ [getProducts] ${data.length} produtos carregados`);
  return data;
}

async function createProduct(product) {
  const payload = { ...product, id: String(product.id) };
  const { data, error } = await supabase
    .from('produtos')
    .upsert(payload, { onConflict: 'id' })
    .select();
  if (error) {
    console.error('❌ [createProduct] Erro Supabase:', error.message);
    throw error;
  }
  const created = (data && data[0]) ? data[0] : payload;
  console.log(`✅ [createProduct] Produto guardado: id=${created.id} | "${created.name}"`);
  return created;
}

async function updateProduct(id, fields) {
  const payload = { ...fields, id: String(id) };
  const { data, error } = await supabase
    .from('produtos')
    .upsert(payload, { onConflict: 'id' })
    .select();
  if (error) {
    console.error('❌ [updateProduct] Erro Supabase:', error.message);
    throw error;
  }
  const updated = (data && data[0]) ? data[0] : payload;
  console.log(`✅ [updateProduct] Produto actualizado: id=${id} | "${updated.name}"`);
  return updated;
}

async function deleteProduct(id) {
  const { error } = await supabase
    .from('produtos')
    .delete()
    .eq('id', String(id));
  if (error) {
    console.error('❌ [deleteProduct] Erro Supabase:', error.message);
    throw error;
  }
  console.log(`🗑️  [deleteProduct] Produto removido: id=${id}`);
  return { id };
}

async function bulkReplaceProducts(products) {
  const { error: delError } = await supabase
    .from('produtos')
    .delete()
    .neq('id', '__never__');
  if (delError) { console.error('❌ [bulkReplace] Erro ao limpar tabela:', delError.message); throw delError; }
  const normalised = products.map(p => ({ ...p, id: String(p.id) }));
  const { error: insError } = await supabase.from('produtos').insert(normalised);
  if (insError) { console.error('❌ [bulkReplace] Erro ao inserir produtos:', insError.message); throw insError; }
  console.log(`📦 [bulkReplace] ${products.length} produtos importados com sucesso`);
  return normalised;
}

async function readProductsFromHTML() { return getProducts(); }

async function upsertProduct(product) {
  const id = String(product.id);
  const { data: existing } = await supabase.from('produtos').select('id').eq('id', id).maybeSingle();
  if (existing) return updateProduct(id, product);
  else return createProduct(product);
}

async function removeProduct(id) {
  await deleteProduct(id);
  return getProducts();
}

// ============================================================
// SERVIDOR HTTP
// ============================================================
const server = http.createServer(async (req, res) => {
  const parsed   = url.parse(req.url, true);
  const pathname = parsed.pathname;

  setCORSHeaders(res);

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // ──────────────────────────────────────────────────────────
  // AUTH: POST /api/auth/register
  // Cria conta nova com nome, email e senha
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/auth/register') {
    try {
      const body = await readBody(req);
      const { nome, email, senha } = JSON.parse(body.toString('utf8'));

      if (!nome || !email || !senha)
        return jsonRes(res, 400, { ok: false, error: 'Nome, email e senha são obrigatórios.' });

      if (senha.length < 6)
        return jsonRes(res, 400, { ok: false, error: 'A senha deve ter pelo menos 6 caracteres.' });

      const user = await createUser(nome, email, senha);
      const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, JWT_SECRET, { expiresIn: '30d' });

      console.log(`✅ [register] Novo utilizador: ${email}`);
      return jsonRes(res, 201, { ok: true, token, user: { id: user.id, nome: user.nome, email: user.email } });
    } catch (err) {
      if (err.message === 'EMAIL_JA_EXISTE')
        return jsonRes(res, 409, { ok: false, error: 'Este email já está registado.' });
      console.error('❌ [register]', err.message);
      return jsonRes(res, 500, { ok: false, error: 'Erro interno ao criar conta.' });
    }
  }

  // ──────────────────────────────────────────────────────────
  // AUTH: POST /api/auth/login
  // Verifica email + senha, devolve token JWT
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/auth/login') {
    try {
      const body = await readBody(req);
      const { email, senha } = JSON.parse(body.toString('utf8'));

      if (!email || !senha)
        return jsonRes(res, 400, { ok: false, error: 'Email e senha são obrigatórios.' });

      const user = await findUserByEmail(email);
      if (!user)
        return jsonRes(res, 401, { ok: false, error: 'Email ou senha incorretos.' });

      const senhaValida = await bcrypt.compare(senha, user.senha);
      if (!senhaValida)
        return jsonRes(res, 401, { ok: false, error: 'Email ou senha incorretos.' });

      const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, JWT_SECRET, { expiresIn: '30d' });

      console.log(`✅ [login] Sessão iniciada: ${email}`);
      return jsonRes(res, 200, { ok: true, token, user: { id: user.id, nome: user.nome, email: user.email } });
    } catch (err) {
      console.error('❌ [login]', err.message);
      return jsonRes(res, 500, { ok: false, error: 'Erro interno ao iniciar sessão.' });
    }
  }

  // ──────────────────────────────────────────────────────────
  // AUTH: GET /api/auth/me
  // Verifica token JWT e devolve dados do utilizador
  // ──────────────────────────────────────────────────────────
  if (req.method === 'GET' && pathname === '/api/auth/me') {
    const token = getTokenFromHeader(req);
    if (!token) return jsonRes(res, 401, { ok: false, error: 'Token em falta.' });

    const payload = verifyToken(token);
    if (!payload) return jsonRes(res, 401, { ok: false, error: 'Token inválido ou expirado.' });

    try {
      const user = await findUserById(payload.id);
      if (!user) return jsonRes(res, 404, { ok: false, error: 'Utilizador não encontrado.' });
      return jsonRes(res, 200, { ok: true, user: { id: user.id, nome: user.nome, email: user.email } });
    } catch (err) {
      return jsonRes(res, 500, { ok: false, error: 'Erro ao verificar sessão.' });
    }
  }

  // ──────────────────────────────────────────────────────────
  // AUTH: POST /api/auth/reset-password
  // Envia email de recuperação de senha via Supabase Admin
  // Não precisa do SDK no frontend
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/auth/reset-password') {
    try {
      const body = await readBody(req);
      const { email } = JSON.parse(body.toString('utf8'));

      if (!email) return jsonRes(res, 400, { ok: false, error: 'Email obrigatório.' });

      const { error } = await supabase.auth.resetPasswordForEmail(
        email.toLowerCase().trim(),
        { redirectTo: process.env.SITE_URL ? process.env.SITE_URL + '/?reset=true' : 'https://aquigarcia.onrender.com/?reset=true' }
      );

      if (error) {
        console.error('[reset-password] Supabase error:', error.message);
        // Não revelar se o email existe ou não — sempre responder ok
      }

      console.log(`📧 [reset-password] Email de recuperação enviado para: ${email}`);
      // Sempre responder ok para não revelar se o email existe
      return jsonRes(res, 200, { ok: true });
    } catch (err) {
      console.error('❌ [reset-password]', err.message);
      return jsonRes(res, 500, { ok: false, error: 'Erro ao enviar email.' });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: GET /api/config — config pública para o frontend
  // ──────────────────────────────────────────────────────────
  if (req.method === 'GET' && pathname === '/api/config') {
    return jsonRes(res, 200, {
      ok: true,
      supabaseUrl:     process.env.SUPABASE_URL,
      supabaseAnonKey: SUPABASE_ANON,
    });
  }

  // ──────────────────────────────────────────────────────────
  // AUTH: POST /api/auth/oauth
  // Recebe dados do Supabase OAuth (Google/Facebook),
  // sincroniza utilizador na tabela, devolve JWT próprio
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/auth/oauth') {
    try {
      const body = await readBody(req);
      const { access_token, nome: nomeOauth, email: emailOauth } = JSON.parse(body.toString('utf8'));

      if (!access_token || !emailOauth)
        return jsonRes(res, 400, { ok: false, error: 'Dados OAuth inválidos.' });

      let dbUser = await findUserByEmail(emailOauth);
      if (!dbUser) {
        const nomeReal = nomeOauth || emailOauth.split('@')[0];
        const senhaRnd = crypto.randomBytes(32).toString('hex');
        dbUser = await createUser(nomeReal, emailOauth, senhaRnd);
      }

      const token = jwt.sign(
        { id: dbUser.id, email: dbUser.email, nome: dbUser.nome },
        JWT_SECRET,
        { expiresIn: '30d' }
      );

      console.log(`✅ [oauth] Login OAuth: ${emailOauth}`);
      return jsonRes(res, 200, {
        ok: true, token,
        user: { id: dbUser.id, nome: dbUser.nome, email: dbUser.email },
      });
    } catch (err) {
      console.error('❌ [oauth]', err.message);
      return jsonRes(res, 500, { ok: false, error: 'Erro no login OAuth.' });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: POST /upload
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/upload') {
    try {
      const chunks = [];
      req.on('data', chunk => chunks.push(chunk));
      req.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          if (buffer.length === 0)
            return jsonRes(res, 400, { ok: false, error: 'Arquivo vazio' });
          const fileName = 'upload_' + Date.now() + '_' + Math.round(Math.random() * 1e9);
          const cloudUrl = await saveImage(fileName, buffer);
          console.log(`📸 [upload] Imagem enviada para Cloudinary: ${cloudUrl}`);
          return jsonRes(res, 200, { ok: true, url: cloudUrl });
        } catch (err) {
          console.error('❌ [upload] Erro Cloudinary:', err.message);
          return jsonRes(res, 500, { ok: false, error: err.message });
        }
      });
    } catch (err) {
      return jsonRes(res, 500, { ok: false, error: err.message });
    }
    return;
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: GET /api/products
  // ──────────────────────────────────────────────────────────
  if (req.method === 'GET' && pathname === '/api/products') {
    try {
      const products = await getProducts();
      return jsonRes(res, 200, { ok: true, products, total: products.length });
    } catch (err) {
      return jsonRes(res, 500, { ok: false, error: err.message });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: POST /api/products/bulk
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/products/bulk') {
    try {
      const body     = await readBody(req);
      const products = JSON.parse(body.toString('utf8'));
      const result   = await bulkReplaceProducts(products);
      return jsonRes(res, 200, { ok: true, total: result.length });
    } catch (err) {
      return jsonRes(res, 500, { ok: false, error: err.message });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: POST /api/products
  // ──────────────────────────────────────────────────────────
  if (req.method === 'POST' && pathname === '/api/products') {
    try {
      const body = await readBody(req);
      const ct   = req.headers['content-type'] || '';
      let product;

      if (ct.includes('multipart/form-data')) {
        const boundary = ct.split('boundary=')[1];
        const { fields, files } = parseMultipart(body, boundary);
        let imgPath = fields.img || '';
        if (files.image && files.image.data.length > 0) {
          const ext      = path.extname(files.image.filename) || '.jpg';
          const filename = slugify(fields.name) + '_' + Date.now() + ext;
          imgPath        = await saveImage(filename, files.image.data);
        }
        product = {
          id:        fields.id || String(Date.now()),
          name:      fields.name     || '',
          category:  fields.category || 'escritorio',
          price:     parseFloat(fields.price)  || 0,
          stock:     parseInt(fields.stock, 10) || 0,
          desc:      fields.desc     || '',
          img:       imgPath,
          encomenda: fields.encomenda === 'true',
        };
      } else {
        product = JSON.parse(body.toString('utf8'));
      }

      const created = await createProduct(product);
      const total   = (await getProducts()).length;
      return jsonRes(res, 201, { ok: true, product: created, total });
    } catch (err) {
      const code = err.message.includes('já existe') ? 409 : 500;
      return jsonRes(res, code, { ok: false, error: err.message });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: PUT /api/products/:id
  // ──────────────────────────────────────────────────────────
  if (req.method === 'PUT' && pathname.startsWith('/api/products/')) {
    try {
      const id   = decodeURIComponent(pathname.replace('/api/products/', ''));
      const body = await readBody(req);
      const ct   = req.headers['content-type'] || '';
      let fields = {};

      if (ct.includes('multipart/form-data')) {
        const boundary = ct.split('boundary=')[1];
        const parsed   = parseMultipart(body, boundary);
        fields         = parsed.fields;
        if (parsed.files.image && parsed.files.image.data.length > 0) {
          const ext      = path.extname(parsed.files.image.filename) || '.jpg';
          const filename = slugify(fields.name || id) + '_' + Date.now() + ext;
          fields.img     = await saveImage(filename, parsed.files.image.data);
        }
      } else {
        fields = JSON.parse(body.toString('utf8'));
      }

      if (fields.price     !== undefined) fields.price     = parseFloat(fields.price)   || 0;
      if (fields.stock     !== undefined) fields.stock     = parseInt(fields.stock, 10)  || 0;
      if (fields.encomenda !== undefined) fields.encomenda = fields.encomenda === 'true' || fields.encomenda === true;

      const updated = await updateProduct(id, fields);
      return jsonRes(res, 200, { ok: true, product: updated });
    } catch (err) {
      const code = err.message.includes('não encontrado') ? 404 : 500;
      return jsonRes(res, code, { ok: false, error: err.message });
    }
  }

  // ──────────────────────────────────────────────────────────
  // ROTA: DELETE /api/products/:id
  // ──────────────────────────────────────────────────────────
  if (req.method === 'DELETE' && pathname.startsWith('/api/products/')) {
    try {
      const id     = decodeURIComponent(pathname.replace('/api/products/', ''));
      const result = await deleteProduct(id);
      return jsonRes(res, 200, { ok: true, deleted: result });
    } catch (err) {
      const code = err.message.includes('não encontrado') ? 404 : 500;
      return jsonRes(res, code, { ok: false, error: err.message });
    }
  }

  // ──────────────────────────────────────────────────────────
  // FICHEIROS ESTÁTICOS
  // ──────────────────────────────────────────────────────────
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(ROOT, filePath);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext  = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 — Ficheiro não encontrado: ' + pathname);
  }
});

// ============================================================
// INICIALIZAÇÃO DO SERVIDOR
// ============================================================
server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('╔════════════════════════════════════════════╗');
  console.log('║       AquiGarcia — Servidor Iniciado       ║');
  console.log('╠════════════════════════════════════════════╣');
  console.log(`║   Porta: ${PORT}                               ║`);
  console.log('║   Admin: Sobre Nós → Painel de Gestão      ║');
  console.log('╠════════════════════════════════════════════╣');
  console.log('║   AUTH  → /api/auth/register               ║');
  console.log('║   AUTH  → /api/auth/login                  ║');
  console.log('║   AUTH  → /api/auth/me                     ║');
  console.log('║   AUTH  → /api/auth/oauth (Google/FB)      ║');
  console.log('║   AUTH  → /api/auth/reset-password         ║');
  console.log('║   CONFIG → /api/config                     ║');
  console.log('║   BD: Supabase ☁️   Imagens: Cloudinary ☁️  ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE')
    console.error(`\n❌ Porta ${PORT} em uso. Feche o outro processo e tente novamente.\n`);
  else
    console.error('Erro no servidor:', err);
});
