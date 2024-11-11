fetch("http://127.0.0.1:5500/data.json", { method: "GET" })
  .then((response) => response.json())
  .then((result) => {
    const productsContainer = document.querySelector('.products');
    
    // result.forEach(item => {
    //   const product = document.createElement('div');
    //   product.classList.add('product', 'p-8', 'inline-block');

    //   const header = document.createElement('div');
    //   header.classList.add('product-header', 'relative');
    //   product.append(header);
      
    //   const image = document.createElement('img');
		// 	image.classList.add('rounded-2xl');
    //   image.src = item.image.mobile;
    //   image.alt = item.name;
    //   header.append(image);

		// 	const buttonContainer = document.createElement('div');
    //   buttonContainer.classList.add('absolute', 'flex', 'justify-center', 'bottom-0', 'translate-y-1/2', 'w-full');
      
    //   const button = document.createElement('button');
    //   button.classList.add('flex','items-center', 'bottom-0', 'right-1/2', 'rounded-[2rem]', 'py-4', 'px-12', 'border-2', 'border-[#a29495]', 'bg-white');

    //   const icon = document.createElement('img');
    //   icon.src = '/assets/images/icon-add-to-cart.svg';
    //   icon.alt = 'Add to Cart Icon'; 
		// 	icon.classList.add('pr-1.5')

    //   const label = document.createElement('span');
    //   label.innerText = 'Add to Cart';
		// 	label.classList.add('pl-1.5', 'text-lg', 'font-semibold', 'whitespace-nowrap')
      
    //   button.append(icon, label);
    //   buttonContainer.append(button);
    //   header.append(buttonContainer);

    //   const productText = document.createElement('div');
    //   productText.classList.add('product-body', 'flex', 'flex-col', 'mt-10', 'text-2xl');
			
    //   const category = document.createElement('span');
    //   category.classList.add('product-category'); 
    //   category.innerText = item.category;
    //   category.classList.add('text-[#958887]');

    //   const name = document.createElement('span');
    //   name.classList.add('product-name'); 
    //   name.innerText = item.name;
    //   name.classList.add('font-semibold');

    //   const price = document.createElement('span');
    //   price.classList.add('product-price');
    //   price.innerText = '€' + item.price.toFixed(2);
    //   price.classList.add('font-semibold', 'text-[#C73B0F]');

		// 	productText.append(category, name, price);

    //   product.append(productText);

    //   productsContainer.append(product);
    // });

    // console.log(result);
  

		console.log(result)

		result.forEach(item => {
			// console.log(item)



			const productCard = document.createElement('product-card')

	console.log(productCard)
			productCard.attributes.name = item.name
			// productCard.setAttribute('category', item.category)
			// productCard.setAttribute('image', item.image.mobile)
			// productCard.setAttribute('price', item.price)

			
			// productsContainer.append(productCard)
		});


		// console.log(productsContainer)
	})
  .catch((error) => console.error('Error fetching data:', error));
