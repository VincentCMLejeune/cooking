const recipes = [
  {
    name: "Flemmenkueche",
    lowerCaseName: "flemmenkueche",
    key: 1,
    ingredients: [
      [1, "pâte à pizza"],
      [1, "pâte feuilletée"],
      [150, "gr lardons"],
      [2, "gros oignons"],
      [20, "cl crème liquide"],
      ["Poivre"],
      ["Sel"],
      ["Muscade"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Préchauffer le four selon les instructions de cuisson de la pâte",
      "Mettre la pâte dans le moule en laissant le papier de cuisson",
      "Piquer la pâte",
      "Laméliser les oignons",
      "Répartir les oignons lamélisés et les lardons sur la pâte",
      "Ajouter la crème (ne pas forcément tout mettre, moins peut suffire)",
      "Saler poivrer muscader",
      "Enfourner selon les instructions de cuisson",
      "Accompagnement recommandé : salade",
    ],
    temperature: "Chaud",
    isVegetarian: false,
    isQuick: false,
    isTuppable: false,
  },
  {
    name: "Soupe déglincoco",
    lowerCaseName: "soupedeglincoco",
    key: 2,
    ingredients: [
      [1, "patate douce"],
      [1, "poireau ou oignon"],
      [1, "petite carotte"],
      [20, "cl crème de coco"],
      ["Epices"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Mettre les légumes coupés dans l'appareil à soupe",
      "Ajouter un cube de bouillon de volaille",
      "Ajouter la crème de coco",
      "Ajouter de l'eau",
      "Assaisonner (sel - poivre - muscade - piment)",
      "Lancer le programme soupe",
    ],
    temperature: "Chaud",
    isVegetarian: true,
    isQuick: true,
    isTuppable: false,
  },
  {
    name: "Pâtes aux poireaux et crevettes",
    lowerCaseName: "patespoireauxcrevettes",
    key: 3,
    ingredients: [
      [200, "gr pâtes complètes"],
      [2, "poireaux"],
      [10, "crevettes"],
      [20, "cl crème liquide"],
      ["Beurre"],
      ["Poivre"],
      ["Sel"],
      ["Muscade"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Couper les poireaux",
      "Faire revenir les poireaux feu moyen dans du beurre 10/15mn",
      "Mettre les pâtes à cuire",
      "Ajouter les crevettes dans la poêle",
      "Ajouter la crème",
      "Assaisonner",
    ],
    temperature: "Chaud",
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Riz cantonnais",
    lowerCaseName: "rizcantonnais",
    key: 4,
    ingredients: [
      [120, "gr de riz thaï (ou basmati)"],
      [1, "oignon"],
      [2, "oeufs"],
      ["Petits pois"],
      ["Jambon ou lardons"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Battre les oeufs et faire une omelette bien cuite - réserver",
      "Emincer l'oignon et le cuire",
      "Mettre à cuire le riz",
      "Ajouter les lardons ou le jambon découpé",
      "Ajouter les petits pois",
      "Egoutter et ajouter le riz",
      "Assaisonner",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Chili con carne",
    lowerCaseName: "chiliconcarne",
    key: 5,
    ingredients: [
      [25, "g de beurre"],
      [1, "oignons"],
      [1, "gousses d'ail écrasées"],
      [0.5, "c.à.c. chili en poudre"],
      [1, "c.à.c. cumin en poudre"],
      [32.5, "g de concentré de tomates"],
      [0.5, "grosse boîte de haricots rouges"],
      [15, "cl de bouillon de boeuf"],
      [250, "g boeuf hâché"],
      ["sel"],
      ["poivre"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Préchauffer le four à 180°C (thermostat 6).",
      "Hacher l'oignon et l'ail.",
      "Faire fondre le beurre, et ensuite dorer doucement l'oignon et l’ail.",
      "Incorporer le boeuf haché et laisser cuire doucement 10 min.",
      "Mélanger le chili, le cumin, le concentré de tomates, et incorporer le tout au boeuf. Ajouter les haricots, le bouillon, du sel et du poivre.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Penne all'Arrabbiata",
    lowerCaseName: "penneallarrabbiata",
    key: 6,
    ingredients: [
      [200, "gr de penne"],
      [1.5, "gousses d'ail"],
      [200, "gr de pulpe de tomates"],
      [0.5, "cs piment de cayenne"],
      ["Laurier ou thym"],
      ["Parmesan"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Hacher les gousses d'ail",
      "Faire revenir l'ail avec de l'huile",
      "Ajouter la pulpe de tomates, le piment, le laurier ou thym",
      "Mélanger et faire mijoter 15mn",
      "En parallèle faire cuire les pâtes al dente",
      "Egoutter les pâtes",
      "Melanger les pâtes et la sauce, laisser imbiber",
      "Servir avec du parmesan",
    ],
    isVegetarian: true,
    isQuick: true,
    isTuppable: true,
  },
  {
    name: "Pâtes au chorizo",
    lowerCaseName: "patesauchorizo",
    key: 7,
    ingredients: [
      ["Une plaquette de chorizo"],
      [1, "oignon rouge"],
      [200, "gr pâtes complètes"],
      [20, "cl crème liquide"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Lameliser les oignons",
      "Cuire les oignons",
      "Ajouter le chorizo découpé",
      "Ajouter la crème",
      "Servir avec les pâtes",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Toasts au pesto",
    lowerCaseName: "toastsaupesto",
    key: 8,
    ingredients: [
      [0.5, "baguette"],
      ["Pesto"],
      [1, "boule de mozzarella"],
      ["Copeaux de parmesan"],
      ["Huile"],
      ["Sel poivre"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Couper des fines tranches de pain (environ 2cm)",
      "Verser un filet d'huile sur les tranches",
      "Ajouter une tranche de mozzarelle sur chaque tranche de pain",
      "Tartiner du pesto sur la mozzarella",
      "Ajouter les copeaux de parmesan",
      "Saler poivrer (léger)",
      "Sur une plaque avec du papier sulfurisé, enfourner 10mn à 180° (four préchauffé)",
    ],
    isVegetarian: true,
    isQuick: true,
    isTuppable: false,
  },
  {
    name: "Pancakes à la banane",
    lowerCaseName: "pancakesalabanane",
    key: 9,
    ingredients: [
      [1, "banane bien mûre"],
      [1, "oeuf"],
      [100, "g de farine"],
      [30, "g de sucre"],
      [1, "c. à café de levure chimique"],
      [10, "cl de lait"],
      [1, "pincée de sel"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Dans un saladier, écraser finement la banane",
      "Ajouter l'oeuf battu, le sucre, le sel et la levure",
      "Bien mélanger",
      "Verser le lait en continuant de mélanger",
      "Laisser reposer 10mn à température ambiante",
      "Dans une poêle légèrement huilée, verser des petits ronds de pâte",
      "Laisser cuire 1 à 2mn de chaque côté",
    ],
    isVegetarian: true,
    isQuick: true,
    isTuppable: false,
  },
  {
    name: "Pâtes au pesto-mozza",
    lowerCaseName: "patesaupestomozza",
    key: 10,
    ingredients: [
      [250, "gr de farfalle"],
      [0.5, "pot de pesto vert"],
      ["Tomates cerises"],
      ["Noix de cajou"],
      [1, "petites boules de mozarella"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Laver les tomates cerises",
      "Faire revenir les tomates cerises dans une poêle huilée à feu moyen",
      "Cuire les pâtes",
      "Egoutter les pâtes et mélanger avec le pesto",
      "Servir les pâtes au pesto",
      "Rajouter dans les assiettes : les tomates cerises cuites; 1/2 mozza coupée en morceaux",
      "Passer 10/15sec au micro-ondes pour faire fondre la mozza",
      "Rajouter les noix de cajou",
    ],
    isVegetarian: true,
    isQuick: true,
    isTuppable: true,
  },
  {
    name: "Pain pita facile",
    lowerCaseName: "painpitafacile",
    key: 11,
    ingredients: [
      [150, "g de farine"],
      [25, "g de beurre"],
      [90, "ml de lait"],
      ["Sel"],
      ["Huile"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Melanger la farine avec une demi c. à café de sel",
      "Faire fondre 25g de beurre dans 90ml de lait (le beurre doit être bien fondu)",
      "Verser la préparation dans la farine petit à petit",
      "Pétrir environ 5mn puis laisser la pâte reposer 30mn",
      "Former 4 pâtons et les étaler (sur une planche farinée)",
      "Faire chauffer une poêle légèrement huilée",
      "Déposer un pâton et cuire à feu moyen-vif pendant 2mn",
      "Retourner et faire cuire 2-3mn",
    ],
    isVegetarian: true,
    isQuick: false,
    isTuppable: false,
  },
  {
    name: "Dip de fêta et tomates rôties",
    lowerCaseName: "dipdefetaettomatesroties",
    key: 12,
    ingredients: [
      [1, "paquet de tomates cerises"],
      [1, "yaourt grec"],
      ["Huile d'olive"],
      [1, "gousse d'ail"],
      ["Epices (persillade, thym, romarin)"],
      [110, "g de fêta (ou Philadelphia)"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Préchauffer le four à 190°",
      "Laver et essuyer les tomates cerises",
      "Les placer dans un plat allant au four",
      "Verser de l'huile d'olive, éventuellement ajouter un peu d'ail haché, saler, enfourner pour 30mn",
      "Verser dans un blender : fêta, yaourt grec, 1/2 gousse d'ail haché, 2 à 3 c. à soupe d'huile d'olive ",
      "Mixer jusqu'à obtention d'une texture homogène et onctueuse",
      "Réserver au frais",
      "Sortir les tomates du four et les laisser refroidir 15mn",
      "Dans une assiettes creuse, verser le dip et faire un puis au milieu pour y mettre les tomates",
      "Rajouter un filet d'huile et quelques herbes",
      "Servir éventuellement avec le pain pita simple",
    ],
    isVegetarian: true,
    isQuick: false,
    isTuppable: false,
  },
  {
    name: "Pates carbo",
    lowerCaseName: "patescarbo",
    key: 13,
    ingredients: [
      [400, "gr pâtes"],
      [3, "oeufs"],
      [3, "jaunes d'oeufs"],
      [150, "gr pancetta"],
      [120, "gr parmesan"],
      ["poivre"],
      ["sel"],
    ],
    basePersonsIngredients: 3,
    recipe: [
      "Couper la pancetta en lardons. Les mettre dans une poêle et les faire cuire à feu moyen/doux durant quelques minutes. Le gras doit fondre et les lardons doivent légèrement croustiller.",
      "Faire cuire les pâtes dans un grand volume d'eau légèrement salée conformément aux instructions du paquet. ",
      "Pendant ce temps, battre les œufs (entiers + les jaunes d'oeufs) dans un grand récipient et ajouter 2/3 du pecorino ou parmesan râpé. Saler légèrement et poivrer.",
      "Égoutter les pâtes en conservant 2 à 3 CS d'eau de cuisson dans un petit récipient.",
      "Ajouter ensuite la pancetta, un peu de pecorino râpé et rectifier l'assaisonnement en sel mais surtout en poivre.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Salade poulet bacon",
    lowerCaseName: "saladepouletbacon",
    key: 14,
    ingredients: [
      [2, "escalopes de poulet"],
      [4, "tranches de bacon"],
      [2, "échalottes"],
      [1, "oignon rose"],
      [1, "roquette"],
      [3, "c.à.s. vinaigre balsamique"],
      [1, "c.à.s. miel"],
      ["ail"],
      ["huile d'olive"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Emincer le poulet en fines lamelles. Les disposer dans une assiette en arrosant d'huile d'olive et en ajoutant l'ail écrasé et u frigo pour au moins une heure.",
      "Faire revenir au wok ou dans une poele le gros oignon et les échalotes avec l'huile d'olive. Y ajouter le poulet puis le bacon coupé en fines lamelles.",
      "Ajouter alors le miel pour faire caraméliser le tout et enfin le vinaigre. Saisir le tout vivement et verser sur des assiettes garnies de roquette. La salade est naturellement assaisonnée par la sauce du plat.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: false,
  },
  {
    name: "Nuggets",
    lowerCaseName: "nuggets",
    key: 15,
    ingredients: [
      [450, "gr blanc de poulet"],
      [20, "cl lait"],
      [75, "gr farine"],
      [2, "c.à.c piment"],
      [1, "c.à.c curry"],
      [1, "c.à.c cumin"],
      [1, "c.à.c muscade"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Couper les blancs en gros dés.",
      "Mélanger les différentes épices et la farine dans un saladier. ",
      "Faire tremper les morceaux de poulet dans un bol de lait puis les rouler dans le mélange épices / farine.",
      "Disposer les morceaux dans une poêle chaude et huilée, saler.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: false,
  },
  {
    name: "Lasagnes",
    lowerCaseName: "lasagnes",
    key: 16,
    ingredients: [
      ["Paquet de lasagnes"],
      [600, "gr boeuf"],
      [800, "gr purée de tomates"],
      [20, "cl vin rouge"],
      [3, "oignons jaunes"],
      [2, "gousses d'ail"],
      [70, "gr fromage râpé"],
      [125, "gr parmesan"],
      [100, "gr farine"],
      [1, "l de lait"],
      [125, "gr de beurre"],
      ["thym"],
      ["origan"],
    ],
    basePersonsIngredients: 6,
    recipe: [
      "Faire revenir gousses hachées d'ail et les oignons émincés dans un peu d'huile d'olive.",
      "Ajouter la viande, puis le vin rouge. Laisser cuire jusqu'à évaporation.",
      "Ajouter la purée de tomates, l'eau et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 minutes.",
      "Préparer la béchamel : faire fondre le beurre.",
      "Ajouter la farine puis emuer avec un fouet jusqu'à l'obtention d'un mélange bien lisse. ",
      "Ajouter le lait peu à peu. Remuer sans cesse, jusqu'à ce que le mélange s'épaississe.",
      "Ensuite, parfumer avec la muscade, saler, poivrer. Laisser cuire environ 5 minutes, à feu très doux, en remuant. Réserver.",
      "Préchauffer le four à 200°C (thermostat 6-7). Huiler le plat à lasagnes. Poser une fine couche de béchamel puis des feuilles de lasagnes, de la bolognaise, de la béchamel et du parmesan. Répéter l'opération 3 fois de suite.",
      "Sur la dernière couche de lasagnes, ne mettre que de la béchamel et recouvrir de fromage râpé. Parsemer quelques noisettes de beurre.",
      "Enfourner pour environ 25 minutes de cuisson.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Quiche lorraine",
    lowerCaseName: "quichelorraine",
    key: 17,
    ingredients: [
      [200, "gr pâte brisée"],
      [200, "gr lardons"],
      [20, "cl crème fraîche"],
      [20, "cl lait"],
      [3, "oeufs"],
      ["muscade"],
      ["sel"],
      ["poivre"],
    ],
    basePersonsIngredients: 4,
    recipe: [
      "Préchauffer le four à 180°C (thermostat 6). Etaler la pâte dans un moule et la piquer à la fourchette.",
      "Faire rissoler les lardons à la poêle puis les éponger avec une feuille d'essuie-tout.",
      "Battre les oeufs, la crème fraîche et le lait.",
      "Ajouter les lardons.",
      "Assaisonner de sel, de poivre et de muscade. ",
      "Verser sur la pâte.",
      "Cuire 45 à 50 min.",
    ],
    isVegetarian: false,
    isQuick: false,
    isTuppable: true,
  },
  {
    name: "Croque-monsieur",
    lowerCaseName: "croquemonsieur",
    key: 18,
    ingredients: [
      [4, "tranches de pain de mie"],
      [25, "gr de beurre tendre"],
      [50, "gr de gruyère râpé"],
      [2, "c.à.s. de lait"],
      [0.5, "pincée de muscade"],
      [2, "tranches de jambon"],
      [4, "tranches de cheddar"],
      ["sel"],
      ["poivre"],
    ],
    basePersonsIngredients: 2,
    recipe: [
      "Beurrez les tranches de pain de mie sur une seule face. Posez 1 tranche de fromage sur chaque tranche de pain de mie. Posez 1 tranche de jambon plié en deux sur 4 tranches de pain de mie. Recouvrez avec les autres tartines (face non beurrée au dessus). ",
      "Dans un bol mélanger le fromage râpé avec le lait, le sel, le poivre et la muscade.",
      "Répartissez le mélange sur les croque-monsieur.",
      "Placez sur une plaque au four sous le grill pendant 10 mn.",
    ],
    isVegetarian: false,
    isQuick: true,
    isTuppable: true,
  },
];

module.exports = { recipes };
