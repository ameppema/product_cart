fetch("http://127.0.0.1:5500/data.json", { method: "GET" })
  .then((response) => response.json())
  .then((result) => {
    const productsContainer = document.querySelector('.products');

		result.forEach(item => {
			const productCard = document.createElement('product-card')

			productCard.setAttribute('name', item.name)
			productCard.setAttribute('category', item.category)
			productCard.setAttribute('image', item.image.mobile)
			productCard.setAttribute('price', item.price)

			productsContainer.append(productCard)
		});
	})
  .catch((error) => console.error('Error fetching data:', error));
