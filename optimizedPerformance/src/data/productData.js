async function fetchProductsData(page,limit){
    let skip = (page-1)*limit
    const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  .then(res => res.json());

const bigData = expandProducts(data.products, 10);
return bigData;
}

function expandProducts (products, times = 10)  {
  let expanded = [];

  for (let i = 0; i < times; i++) {
    const cloned = products.map((item) => ({
      ...item,
      id: item.id + i * 1000, 
      title: item.title + " " + i, 
    }));

    expanded = [...expanded, ...cloned];
  }

  return expanded;
};


export default fetchProductsData;