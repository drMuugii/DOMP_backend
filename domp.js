const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;
app.post("/", (req, res) => {
  console.log(req.query.search);
  const data = [
    {
      name: "Bulbus Allii Cepae",
      Definition:
        "Bulbus Allii Cepae is the fresh or dried bulbs of Allium cepa L. (Liliaceae) or its varieties and cultivars",
      Synonyms:
        "Allium esculentum Salisb., Allium porrum cepa Rehb.  It is most commonly known as “onion”. Basal, basl, cebolla, cebolla morada, cepa bulb, cepolla, cipolla, common onion, cu hanh, hom hua yai, hom khaao, hom yai, hu-t’sung, hu t’sung t’song, hua phak bhu, i-i-bsel, kesounni, khtim, Küchenzwiebel, l’oignon, loyon, Madras oignon, oignon, palandu, piyaj, piyaz, pyaz, pyaaz, ralu lunu, red globe onion, sibuyas, Spanish onion, tamanegi, umbi bawang merah, vengayan, yellow Bermuda onion, white globe onion, Zwiebel.",
      Description:
        "A perennial herb, strong smelling when crushed; bulbs vary in size and shape from cultivar to cultivar, often depressed-globose and up to 20 cm in diameter; outer tunics membranous. Stem up to 100 cm tall and 30 mm in diameter, tapering from inflated lower part. Leaves up to 40 cm in height and 20 mm in diameter, usually almost semicircular in section and slightly flattened on upper side; basal in first year, in second year their bases sheathing the lower sixth of the stem. Spathe often 3-valved, persistent, shorter than the umbel. Umbel 4–9 cm in diameter, subglobose or hemispherical, dense, many-flowered; pedicels up to 40 mm, almost equal. Perianth stellate; segments 3–4.5 X 2–2.5 mm, white, with green stripe, slightly unequal, the outer ovate, the inner oblong, obtuse or acute. Stamens exserted; filaments 4–5 mm, the outer subulate, the inner with an expanded base up to 2 mm wide and bearing short teeth on each side. Ovary whitish. Capsule about 5 mm, 2n = 16).",
      PlantMaterialOfInterest: "fresh or dried bulbs",
      GeneralAppearance:
        "Macroscopically, Bulbus Allii Cepae varies in size and shape from cultivar to cultivar, 2–20 cm in diameter; flattened, spherical or pear-shaped; white or coloured.",
      GeographicalDistribution:
        "Bulbus Allii Cepae (“onion”) is probably indigenous to western Asia, but it is commercially cultivated worldwide, especially in regions of moderate climate.",
      MedicinalUses:
        "Uses supported by clinical data. The principal use of Bulbus Allii Cepae today is to prevent age-dependent changes in the blood vessels, and loss of appetite. Uses described in pharmacopoeias and in traditional systems of medicine.Treatment of bacterial infections such as dysentery, and as a diuretic. The drug has also been used to treat ulcers, wounds, scars, keloids , and asthma. Bulbus Allii Cepae has also been used as an adjuvant therapy for diabetes.",
      img1: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img2: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img3: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
    },
    {
      name: "Bulbus Allii Sativi",
      Definition:
        "Bulbus Allii Sativi consists of the fresh or dried bulbs of Allium sativum L. (Liliaceae)",
      Synonyms:
        "Porvium sativum Rehb: It is most commonly known as “garlic”. Ail, ail commun, ajo, akashneem, allium, alubosa elewe, ayo-ishi, ayu, banlasun, camphor of the poor, dai tóan, dasuan, dawang, dra thiam, foom, Gartenlauch, hom khaao, hom kía, hom thiam, hua thiam, kesumphin, kitunguu-sumu, Knoblauch, kra thiam, krathiam, krathiam cheen, krathiam khaao, l’ail, lahsun, lai, lashun, lasan, lasun, lasuna, Lauch, lay, layi, lehsun, lesun, lobha, majo, naharu, nectar of the gods, ninniku, pa-se-waa, poor man’s treacle, rason, rasonam, rasun, rustic treacles, seer, skordo, sluôn, stinking rose, sudulunu, ta-suam, ta-suan, tafanuwa, tellagada, tellagaddalu, thiam, toi thum, tum, umbi bawang putih, vallaip- pundu, velluli, vellulli.",
      Description:
        "A perennial, erect bulbous herb, 30–60 cm tall, strong smelling when crushed. The underground portion consists of a compound bulb with numerous fibrous rootlets; the bulb gives rise above ground to a number of narrow, keeled, grass- like leaves. The leaf blade is linear, flat, solid, 1.0–2.5 cm wide, 30–60 cm long, and has an acute apex. Leaf sheaths form a pseudostem. Inflorescences are umbellate; scape smooth, round, solid, and coiled at first, subtended by membraneous, long-beaked spathe, splitting on one side and remaining attached to umbel. Small bulbils are produced in inflorescences; flowers are variable in number and sometimes absent, seldom open and may wither in bud. Flowers are on slender pedicels; consisting of perianth of 6 segments, about 4–6 mm long, pinkish; stamens 6, anthers exserted; ovary superior, 3-locular. Fruit is a small loculicidal capsule. Seeds are seldom if ever produced",
      PlantMaterialOfInterest: "fresh or dried bulbs",
      GeneralAppearance:
        "Bulbus Allii Sativi consists of several outer layers of thin sheathing protective leaves which surround an inner sheath. The latter enclose the swollen storage leaves called “cloves”. Typically, the bulb possesses a dozen sterile sheathing leaves within which are 6–8 cloves bearing buds making a total of 10–20 cloves and 20–40 well-developed but short and embedded roots. The cloves are asym- metric in shape, except for those near the centre.",
      GeographicalDistribution:
        "Bulbus Allii Sativi is probably indigenous to Asia, but it is commercially cultivated in most countries.",
      MedicinalUses:
        "As an adjuvant to dietetic management in the treatment of hyperlipidaemia, and in the prevention of atherosclerotic (age-dependent) vascular changes. The drug may be useful in the treatment of mild hypertension.The treatment of respiratory and urinary tract infections, ringworm and rheu- matic conditions. The herb has been used as a carminative in the treatment of dyspepsia.",
      img1: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img2: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img3: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
    },
    {
      name: "Aloe",
      Definition:
        "Aloe is the dried juice of the leaves of Aloe vera (L.) Burm. f. or of A. ferox Mill. and its hybrids with A. africana Mill. and A. spicata Baker (Liliaceae)",
      Synonyms:
        "PoRoyle, A. officinalis Forsk., A. perfoliata L., A. rubescens DC, A. vera L. var. littoralis K”nig ex Bak., A. vera L. var. chinensis Berger, A. vulgaris Lam. (7). In most formularies and reference books, Aloe barbadensis Mill. is regarded as the correct species name, and Aloe vera (L.) Burm. f. is considered a synonym. However, according to the International Rules of Botanical Nomenclature, Aloe vera (L.) Burm. f. is the legitimate name for this species (8?10). The genus Aloe has also been placed taxonomically in a family called Aloeaceae.",
      Description:
        "Succulent, almost sessile perennial herb; leaves 30?50 cm long and 10 cm broad at the base; colour pea-green (when young spotted with white); bright yellow tubular flowers 25?35 cm in length arranged in a slender loose spike; stamens frequently project beyond the perianth tube (12).",
      PlantMaterialOfInterest:
        "liquid  gel  from  the  fresh  leaf Aloe Vera Gel is not to be confused with the juice, which is the bitter",
      GeneralAppearance:
        "The gel is a viscous, colourless, transparent liquid.",
      GeographicalDistribution:
        "Probably native to north Africa along the upper Nile in the Sudan, and subse- quently introduced and naturalized in the Mediterranean region, most of the tropics and warmer areas of the world, including Asia, the Bahamas, Central America, Mexico, the southern United States of America, south-east Asia, and the West Indies.",
      MedicinalUses:
        "Uses described in pharmacopoeias and in traditional systems of medicine.   Aloe Vera Gel is widely used for the external treatment of minor wounds and inflammatory skin disorders. The gel is used in the treatment of minor skin irritations, including burns, bruises, and abrasions. The gel is further used in the cosmetics industry as a hydrating ingredient in liquids, creams, sun lotions, shaving creams, lip balms, healing ointments, and face packs. Aloe Vera Gel has been traditionally used as a natural remedy for burns. Aloe Vera Gel has been effectively used in the treatment of first- and second-degree thermal burns and radiation burns. Both thermal and radiation burns healed faster with less necrosis when treated with preparations contain- ing Aloe Vera Gel. In most cases the gel must be freshly prepared because of its sensitivity to enzymatic, oxidative, or microbial degradation. Aloe Vera Gel is not approved as an internal medication, and internal adminis- tration of the gel has not been shown to exert any consistent therapeutic effect.",
      img1: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img2: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
      img3: "https://thumbs.dreamstime.com/b/watercolor-onion-hand-drawn-botanical-illustration-isolated-white-background-100617963.jpg",
    },
  ];
  const found = data.find((e) => e.name == req.query.search);
  console.log(found);
  res.send(found);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
