export const fileExplorerData = [
  {
    id: 1,
    isFolder: true,
    name: "public",
    children: [
      {
        id: 2,
        isFolder: false,
        name: "index.html"
      },
      {
        id: 3,
        isFolder: true,
        name: "assets",
        children: [
          {
            id: 4,
            isFolder: false,
            name: "style.css"
          },
          {
            id: 5,
            isFolder: false,
            name: "script.js"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    isFolder: true,
    name: "src",
    children: [
      {
        id: 7,
        isFolder: false,
        name: "app.js"
      },
      {
        id: 8,
        isFolder: true,
        name: "components",
        children: [
          {
            id: 9,
            isFolder: false,
            name: "Header.js"
          },
          {
            id: 10,
            isFolder: false,
            name: "Footer.js"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    isFolder: false,
    name: "package.json"
  }
];