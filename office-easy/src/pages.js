export const pages = [
  {
    id: "home",
    name: "Home",
    path: "/",
  },
  {
    id: "about",
    name: "About Us",
    path: "/about",
  },
  {
    id: "properties",
    name: "Properties",
    path: "/properties",
    section: [
      {
        id: "commercial",
        name: "Commercial Property",
        path: "/properties/commercial",
      },
      {
        id: "industrial",
        name: "Industrial Property",
        path: "/properties/industrial",
      },
    ],
  },
  {
    id: "propertyLease",
    name: "Property for lease ",
    path: "/properties-for-lease",
    section: [
      {
        id: "commercial",
        name: "Commercial Property",
        path: "/properties/commercial",
        facility: [
          {
            id: "retailSpace",
            name: "Retail Space",
            path: "/properties/commercial/retail-space",
          },
          {
            id: "coworkingSpace",
            name: "Coworking Space",
            path: "/properties/commercial/coworking-space",
          },
          {
            id: "officeSpace",
            name: "Managed Office Space",
            path: "/properties/commercial/coworking-space",
          },
        ],
      },
      {
        id: "industrial",
        name: "Industrial Property",
        path: "/properties/industrial",
        facility: [
          {
            id: "factory",
            name: "Factory",
            path: "/properties/commercial/retail-space",
          },
          {
            id: "wareHouse",
            name: "Warehouse",
            path: "/properties/commercial/coworking-space",
          },
        ],
      },
    ],
  },
  {
    id: "career",
    name: "Career",
    path: "/career",
  },
  {
    id: "contact",
    name: "Contact Us",
    path: "/contact",
  },
];
