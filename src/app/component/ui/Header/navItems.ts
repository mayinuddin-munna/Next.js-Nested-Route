import menSuit1 from "./../../../../assets/logo/logo.png";
import menSuit2 from "./../../../../assets/logo/logo.png";
import womenSuit1 from "./../../../../assets/logo/logo.png";
import womenSuit2 from "./../../../../assets/logo/logo.png";
import tie1 from "./../../../../assets/logo/logo.png";
import tie2 from "./../../../../assets/logo/logo.png";

export const navCategories = [
  {
    name: "Men",
    navItems: [
      {
        name: "SUIT",
        catAddress: "men-cloth?category=suit",
        items: [
          {
            label: "Blazer",
            address: "men-cloth?category=suit&productType=blazer",
          },
          {
            label: "Suit With Vest",
            address: "men-cloth?category=suit&productType=suit-with-vest",
          },
          {
            label: "Suit(2pcs)",
            address: "men-cloth?category=suit&productType=suit-2pcs",
          },
        ],
      },
      {
        name: "COAT",
        catAddress: "men-cloth?category=coat",
        items: [
          {
            label: "Prince-Coat",
            address: "men-cloth?category=coat&productType=prince-coat",
          },
          {
            label: "Long-Coat",
            address: "men-cloth?category=coat&productType=long-coat",
          },
          {
            label: "Over-Coat",
            address: "men-cloth?category=coat&productType=over-coat",
          },
          {
            label: "Half-Coat",
            address: "men-cloth?category=coat&productType=half-coat",
          },
          {
            label: "Vest-Coat",
            address: "men-cloth?category=coat&productType=vest-coat",
          },
        ],
      },
      {
        name: "SHIRT",
        catAddress: "men-cloth?category=shirt",
        items: [
          {
            label: "Formal-Shirt",
            address: "men-cloth?category=shirt&productType=formal-shirt",
          },
          {
            label: "Half-Shirt",
            address: "men-cloth?category=shirt&productType=half-shirt",
          },
          {
            label: "Print-Shirt",
            address: "men-cloth?category=shirt&productType=print-shirt",
          },
          {
            label: "T-Shirt",
            address: "men-cloth?category=shirt&productType=t-shirt",
          },
        ],
      },
      {
        name: "PANT",
        catAddress: "men-cloth?category=pant",
        items: [
          {
            label: "Formal-Pant",
            address: "men-cloth?category=pant&productType=formal-pant",
          },
          {
            label: "Pajamas",
            address: "men-cloth?category=pant&productType=payjama",
          },
        ],
      },
      {
        name: "PANJABI",
        catAddress: "men-cloth?category=panjabi",
        items: [
          {
            label: "Panjabi",
            address: "men-cloth?category=panjabi&productType=panjabi",
          },
          {
            label: "Pajamas",
            address: "men-cloth?category=panjabi&productType=payjama",
          },
          {
            label: "Sherwani",
            address: "men-cloth?category=sherwani&productType=sherwani",
          },
        ],
      },
      {
        name: "JACKET & HOODIE",
        catAddress: "men-cloth?category=jacket-hoodie",
        items: [
          {
            label: "Jacket",
            address: "men-cloth?category=jacket-hoodie&productType=jacket",
          },
          {
            label: "Hoodie",
            address: "men-cloth?category=jacket-hoodie&productType=hoodie",
          },
        ],
      },
    ],
    images: [menSuit1, menSuit2],
  },
  {
    name: "Women",
    navItems: [
      {
        name: "SUIT",
        catAddress: "women-cloth?category=suit",
        items: [
          {
            label: "Blazer",
            address: "women-cloth?category=suit&productType=blazer",
          },
          {
            label: "Suit",
            address: "women-cloth?category=suit&productType=suit",
          },
        ],
      },
      {
        name: "COAT",
        catAddress: "women-cloth?category=coat",
        items: [
          {
            label: "Over-Coat",
            address: "women-cloth?category=coat&productType=over-coat",
          },
          {
            label: "Long-Coat",
            address: "women-cloth?category=coat&productType=long-coat",
          },
        ],
      },
      {
        name: "SHIRT",
        catAddress: "women-cloth?category=shirt",
        items: [
          {
            label: "Formal-Shirt",
            address: "women-cloth?category=shirt&productType=formal-shirt",
          },
        ],
      },
      {
        name: "PANT",
        catAddress: "women-cloth?category=pant",
        items: [
          {
            label: "Formal-Pant",
            address: "women-cloth?category=pant&productType=formal-pant",
          },
        ],
      },
    ],
    images: [womenSuit1, womenSuit2],
  },
  {
    name: "Accessories",
    navItems: [
      {
        name: "TIE",
        catAddress: "#",
        items: [
          { label: "Single Tie", address: "#" },
          { label: "3pcs Tie", address: "#" },
          { label: "Bow Tie", address: "#" },
        ],
      },
      {
        name: "BELT",
        catAddress: "#",
        items: [
          { label: "Leather", address: "#" },
          { label: "Artificial", address: "#" },
        ],
      },
      {
        name: "WALLET",
        catAddress: "#",
        items: [
          { label: "Leather", address: "#" },
          { label: "Artificial", address: "#" },
        ],
      },
      {
        name: "OTHERS",
        catAddress: "#",
        items: [
          { label: "Sunglass", address: "#" },
          { label: "Perfume", address: "#" },
        ],
      },
    ],
    images: [tie1, tie2],
  },
  {
    name: "New Arrival",
    navItems: [
      {
        name: "Coming Soon!",
      },
    ],
  },
];
