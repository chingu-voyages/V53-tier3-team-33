const fakeData = [
  {
    name: "Kotasaurus",
    imageSrc:
      "https://dinosaurencyclopedia.org/wp-content/uploads/2023/02/Kotasaurus.webp",
    typeOfDinosaur: "sauropod",
    length: 9,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Early Jurassic, 205-180 million years ago",
    foundIn: "India",
    taxonomy: "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda",
    namedBy: "Yadagiri (1988)",
    typeSpecies: "yamanpalliensis",
    description:
      "Kotasaurus is known from a nearly complete skeleton that lacks the skull, so the reconstruction uses guesswork based on similar dinosaurs.",
  },
  {
    name: "Lapparentosaurus",
    imageSrc:
      "https://www.rareresource.com/dinos/Lapparentosaurus%20-1-big.jpg",
    typeOfDinosaur: "sauropod",
    length: "N/A",
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Mid Jurassic, 169-164 million years ago",
    foundIn: "Madagascar",
    taxonomy:
      "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Macronaria, Camarasauromorpha, Titanosauriformes",
    namedBy: "Bonaparte (1986)",
    typeSpecies: "madagascariensis",
    description:
      "Lapparentosaurus is known from partial skeletons lacking skulls, so reconstructions involve guesswork based on similar dinosaurs.",
  },
  {
    name: "Lesothosaurus",
    imageSrc: "https://images.dinosaurpictures.org/lesothosaurus_4ed9.jpg",
    typeOfDinosaur: "small ornithischian",
    length: 1,
    weight: 10,
    diet: "herbivorous",
    whenLived: "Early Jurassic, 213-200 million years ago",
    foundIn: "Lesotho",
    taxonomy: "Dinosauria, Ornithischia",
    namedBy: "Galton (1978)",
    typeSpecies: "diagnosticus",
    description:
      "This dinosaur was small and agile and had 5 fingers on each 'hand', although these were probably not well adapted for grasping.",
  },
  {
    name: "Marshosaurus",
    imageSrc:
      "https://images.dinosaurpictures.org/Marshosaurus-nhm.ac.uk__fd20.jpg",
    typeOfDinosaur: "large theropod",
    length: 6,
    weight: "N/A",
    diet: "carnivorous",
    whenLived: "Late Jurassic, 154-142 million years ago",
    foundIn: "USA",
    taxonomy:
      "Dinosauria, Saurischia, Theropoda, Neotheropoda, Tetanurae, Avetheropoda",
    namedBy: "Madsen (1976)",
    typeSpecies: "bicentesimus",
    description: "Marshosaurus is known from a partial skull and postcranium.",
  },
  {
    name: "Microceratus",
    imageSrc:
      "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDI0LTA1L21pY3JvY2VyYXR1cy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMH19fQ==",
    typeOfDinosaur: "ceratopsian",
    length: 0.5,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 86-66 million years ago",
    foundIn: "China, Mongolia",
    taxonomy:
      "Dinosauria, Ornithischia, Neornithischia, Cerapoda, Marginocephalia, Ceratopsia, Neoceratopsia, Coronosauria",
    namedBy: "Bohlin (1953)",
    typeSpecies: "gobiensis",
    description:
      "This dinosaur was originally named Microceratops but, 50 years later, scientists realised that the name had already been taken by a species of beetle. So, in 2008, the name was changed to Microceratus.We don't know how large this dinosaur would've grown to be, because the only fossils we know of come from a juvenile dinosaur. But scientists think that it was rather small and agile, and able to evade predators simply by running away.",
  },
  {
    name: "Minmi",
    imageSrc:
      "https://images.dinosaurpictures.org/minmi-paravertebra-a-prehistoric-era-sergey-krasovskiy_07e1.jpg",
    typeOfDinosaur: "armoured dinosaur",
    length: 3,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Early Cretaceous, 121-112 million years ago",
    foundIn: "Australia",
    taxonomy: "Dinosauria, Ornithischia, Thyreophora, Ankylosauria",
    namedBy: "Molnar (1980)",
    typeSpecies: "paravertebra",
    description:
      "This dinosaur is known from an almost complete skeleton with armour in place.",
  },
  {
    name: "Nemegtosaurus",
    imageSrc: "https://images.dinosaurpictures.org/nemegtosaurus1_2846.jpg",
    typeOfDinosaur: "sauropod",
    length: 13,
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 72-68 million years ago",
    foundIn: "Mongolia",
    taxonomy:
      "Dinosauria, Saurischia, Sauropodomorpha, Sauropoda, Eusauropoda, Neosauropoda, Diplodocoidea, Nemegtosauridae",
    namedBy: "Nowinski (1971)",
    typeSpecies: "mongoliensis",
    description:
      "Nemegtosaurus is only known from a skull and mandible (lower jawbone), so reconstructions are speculative.",
  },
  {
    name: "Nipponosaurus",
    imageSrc:
      "https://images.dinosaurpictures.org/Nipponosaurus_dinosaur_3729.jpg",
    typeOfDinosaur: "large ornithopod",
    length: "N/A",
    weight: "N/A",
    diet: "herbivorous",
    whenLived: "Late Cretaceous, 89-84 million years ago",
    foundIn: "Russia",
    taxonomy:
      "Dinosauria, Ornithischia, Ornithopoda, Hadrosauridae, Lambeosaurinae",
    namedBy: "Nagao (1936)",
    typeSpecies: "sachalinensis",
    description:
      "Our knowledge of Nipponosaurus is based on a partial skull and postcranial of a juvenile.",
  },
];

function Ecommerce() {
  return (
    <div className="flex flex-col gap-6 items-center m-10">
      <div className="text-center md:max-w-[50rem] w-full p-4 ">
        <h1 className="text-4xl mb-3">Dino online shop</h1>
        <p>
          Buy your favorite dinosaur toys, figures, and merchandise for yourself
          and your children from our wide selection of products.
        </p>
      </div>

      <section className="p-4 bg-gray-100 rounded-lg bg-bgColor gap-6 flex flex-col items-center">
        {/* search and filters */}
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md w-full">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-6">
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Filter 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Filter 2</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        {/* responsive grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mx-auto">
          {fakeData.map((item) => (
            <div
              key={item.id}
              className="flex mx-auto w-[17rem] flex-col p-4 border border-gray-200 rounded-lg shadow-md bg-white"
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />

              {/* product info */}
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-1">
                Price:{" "}
                <span className="font-bold text-green-600">${item.price}</span>
              </p>
              <p className="text-gray-600 mb-3">
                Quantity: <span className="font-bold">{item.quantity}</span>
              </p>

              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => alert(`You bought ${item.name}!`)} //
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
