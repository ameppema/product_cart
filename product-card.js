customElements.define('product-card',
  class extends HTMLElement {
    constructor() {
      super();
  	}

		connectedCallback() {
			const nameValue = this.attributes.name.value
			const categoryValue = this.attributes.category.value
			const imageValue = this.attributes.image.value
			const priceValue = this.attributes.price.value

			const product = document.createElement('div');
      product.classList.add('product', 'p-8', 'inline-block');

      const header = document.createElement('div');
      header.classList.add('product-header', 'relative');
      product.append(header);
      
      const image = document.createElement('img');
			image.classList.add('rounded-2xl', 'border-4', 'border-white');
      image.src = imageValue;
      image.alt = nameValue;
      header.append(image);

			const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('absolute', 'flex', 'justify-center', 'bottom-0', 'translate-y-1/2', 'w-full');
      
      const button = document.createElement('button');
      button.classList.add('flex','items-center', 'rounded-[2rem]', 'py-4', 'px-12', 'border-2', 'border-[#a29495]', 'bg-white');
    
			button.addEventListener('click', (event) => {
				image.classList.add('border-4', 'border-[#C73B0F]');

				const buttonCart = document.createElement('button');
      	buttonCart.classList.add('absolute', 'flex','items-center', 'rounded-[2rem]', 'py-4', 'border-2', 'border-[#C73B0F]', 'bg-[#C73B0F]', 'justify-between', 'px-4');
				buttonCart.style.width = button.offsetWidth + 'px'
				buttonCart.style.height = button.offsetHeight + 'px'

				const iconContainIncrement = document.createElement('div');
				iconContainIncrement.classList.add('w-8', 'h-8', 'rounded-full', 'border-2', 'border-[#fff]', 'flex', 'items-center', 'justify-center')
				
				const iconContainDecrement = document.createElement('div');
				iconContainDecrement.classList.add('w-8', 'h-8', 'rounded-full', 'border-2', 'border-[#fff]', 'flex', 'items-center', 'justify-center')

				const iconIncrement = document.createElement('img');
				iconIncrement.classList.add('w-3', 'h-3')
				iconIncrement.src = '/assets/images/icon-increment-quantity.svg';
				
				const iconDecrement = document.createElement('img');
				iconDecrement.classList.add('w-3', 'h-3')
				iconDecrement.src = '/assets/images/icon-decrement-quantity.svg';

				const countProduct = document.createElement('span')
				countProduct.classList.add('text-white', 'text-xl', 'font-semibold')
				countProduct.innerText = '1'

				iconContainIncrement.append(iconIncrement);
				iconContainDecrement.append(iconDecrement);
				buttonCart.append(iconContainDecrement, countProduct, iconContainIncrement);
				buttonContainer.append(buttonCart);

				iconContainIncrement.addEventListener('click', (event) => {
					console.log('Increment')
				})
				
				iconContainDecrement.addEventListener('click', (event) => {
					console.log('Decrement')
				})
			})

      const icon = document.createElement('img');
      icon.src = '/assets/images/icon-add-to-cart.svg';
      icon.alt = 'Add to Cart Icon'; 
			icon.classList.add('pr-1.5')

      const label = document.createElement('span');
      label.innerText = 'Add to Cart';
			label.classList.add('pl-1.5', 'text-lg', 'font-semibold', 'whitespace-nowrap')
      
      button.append(icon, label);
      buttonContainer.append(button);
      header.append(buttonContainer);

      const productText = document.createElement('div');
      productText.classList.add('product-body', 'flex', 'flex-col', 'mt-10', 'text-2xl');
			
      const category = document.createElement('span');
      category.classList.add('product-category'); 
      category.innerText = categoryValue;
      category.classList.add('text-[#958887]');

      const name = document.createElement('span');
      name.classList.add('product-name'); 
      name.innerText = nameValue;
      name.classList.add('font-semibold');

      const price = document.createElement('span');
      price.classList.add('product-price');
      price.innerText = '€' + Number(priceValue).toFixed(2);
      price.classList.add('font-semibold', 'text-[#C73B0F]');

			productText.append(category, name, price);
      product.append(productText);
			

			this.append(product)
		}
});