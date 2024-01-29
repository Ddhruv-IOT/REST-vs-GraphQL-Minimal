let assets = [
  { id: "1", name: "John Doe", url: "..." },
  { id: "2", name: "Alice Smith", url: "..." },
  { id: "3", name: "Bob Johnson", url: "..." },
  { id: "4", name: "Mary Brown", url: "..." },
  { id: "5", name: "Sam Wilson", url: "..." },
];

let comments = [
  {
    id: "1",
    rating: 4,
    content: "Great product, highly recommended!",
    asset_id: "1",
    author_id: "1",
  },
  {
    id: "2",
    rating: 5,
    content: "Amazing service, exceeded my expectations",
    asset_id: "2",
    author_id: "2",
  },
  {
    id: "3",
    rating: 3,
    content: "Decent, but could be improved",
    asset_id: "3",
    author_id: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "Not satisfied with the purchase",
    asset_id: "4",
    author_id: "4",
  },
  {
    id: "5",
    rating: 5,
    content: "Exceptional quality and fast delivery",
    asset_id: "5",
    author_id: "5",
  },
];

module.exports = { assets, comments };
