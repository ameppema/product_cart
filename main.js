fetch("http://127.0.0.1:5500/data.json", { method: "GET" })
  .then((response) => response.json())
  .then((result) => {
		const products = document.querySelector('.products')

		result.forEach(item => {
			products.innerHTML = item.name
		});

		console.log(result)
	})
  .catch((error) => console.error(error));
