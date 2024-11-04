
fetch("http://127.0.0.1:5500/data.json", { method: "GET" })
  .then((response) => response.json())
  .then((result) => {
    const productsContainer = document.querySelector('.products');
    
    result.forEach(item => {
      const product = document.createElement('div');
      product.classList.add('product', 'p-8', 'inline-block');

      const header = document.createElement('div');
      header.classList.add('product-header', 'relative', 'flex-wrap');
      product.append(header);
      
      const image = document.createElement('img');
			image.classList.add('rounded-2xl');
      image.src = item.image.mobile;
      image.alt = item.name;
      header.append(image);
      
      const button = document.createElement('button');
      button.classList.add('flex', 'absolute','top-1/2', 'right-1/2','translate-x-2/4', 'rounded-[2rem]', 'p-4', 'border-2', 'border-[#a8a8a8]');

      const icon = document.createElement('img');
      icon.src = '/assets/images/icon-add-to-cart.svg';
      icon.alt = 'Add to Cart Icon'; 

      const label = document.createElement('span');
      label.innerText = 'Add to Cart';
      
      button.append(icon, label);
      header.append(button);

      const body = document.createElement('div');
      body.classList.add('product-body', 'flex', 'flex-col');
			
      const category = document.createElement('span');
      category.classList.add('product-category'); 
      category.innerText = item.category;

      const name = document.createElement('span');
      name.classList.add('product-name'); 
      name.innerText = item.name;

      const price = document.createElement('span');
      price.classList.add('product-price');
      price.innerText = item.price;

			body.append(category, name, price);

      product.append(body);

      productsContainer.append(product);
    });

    console.log(result);
  })
  .catch((error) => console.error('Error fetching data:', error));
