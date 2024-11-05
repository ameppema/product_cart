fetch("http://127.0.0.1:5500/data.json", { method: "GET" })
  .then((response) => response.json())
  .then((result) => {
    const productsContainer = document.querySelector('.products');
    
    result.forEach(item => {
      const product = document.createElement('div');
      product.classList.add('product', 'p-8', 'inline-block');

      const header = document.createElement('div');
      header.classList.add('product-header', 'relative');
      product.append(header);
      
      const image = document.createElement('img');
			image.classList.add('rounded-2xl');
      image.src = item.image.mobile;
      image.alt = item.name;
      header.append(image);
      
      const button = document.createElement('button');
      button.classList.add('absolute', 'flex','items-center', 'bottom-0', 'right-1/2','translate-x-1/2', 'translate-y-1/2', 'rounded-[2rem]', 'py-4', 'px-16', 'border-2', 'border-[#a29495]', 'bg-white');

      const icon = document.createElement('img');
      icon.src = '/assets/images/icon-add-to-cart.svg';
      icon.alt = 'Add to Cart Icon'; 
			icon.classList.add('pr-1.5')

      const label = document.createElement('span');
      label.innerText = 'Add to Cart';
			label.classList.add('pl-1.5', 'text-lg', 'font-semibold', 'whitespace-nowrap')
      
      button.append(icon, label);
      header.append(button);

      const body = document.createElement('div');
      body.classList.add('product-body', 'flex', 'flex-col', 'mt-12', 'text-2xl');
			
      const category = document.createElement('span');
      category.classList.add('product-category'); 
      category.innerText = item.category;
      category.classList.add('text-[#958887]');

      const name = document.createElement('span');
      name.classList.add('product-name'); 
      name.innerText = item.name;
      name.classList.add('font-semibold');

      const price = document.createElement('span');
      price.classList.add('product-price');
      price.innerText = '€' + item.price.toFixed(2);
      price.classList.add('font-semibold', 'text-[#C73B0F]');

			body.append(category, name, price);

      product.append(body);

      productsContainer.append(product);
    });

    console.log(result);
  })
  .catch((error) => console.error('Error fetching data:', error));
