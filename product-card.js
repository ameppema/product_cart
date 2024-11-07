customElements.define('product-card',
  class extends HTMLElement {
    constructor() {
      super();
      // const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
      // const template = document.getElementById('element-details-template').content;

			const nameValue = this.attributes.name.value
			const categoryValue = this.attributes.category.value
			const imageValue = this.attributes.image.value
			const priceValue = this.attributes.price.value

			// this.textContent = "Hola"
			
			// Inicio de tarjeta de producto
			const product = document.createElement('div');
      product.classList.add('product', 'p-8', 'inline-block');

      const header = document.createElement('div');
      header.classList.add('product-header', 'relative');
      product.append(header);
      
      const image = document.createElement('img');
			image.classList.add('rounded-2xl');
      image.src = imageValue;
      image.alt = nameValue;
      header.append(image);

			const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('absolute', 'flex', 'justify-center', 'bottom-0', 'translate-y-1/2', 'w-full');
      
      const button = document.createElement('button');
      button.classList.add('flex','items-center', 'bottom-0', 'right-1/2', 'rounded-[2rem]', 'py-4', 'px-12', 'border-2', 'border-[#a29495]', 'bg-white');

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
      // price.innerText = '€' + priceValue.toFixed(2);
      price.innerText = '€' + priceValue;
      price.classList.add('font-semibold', 'text-[#C73B0F]');

			productText.append(category, name, price);

      product.append(productText);
			// Fin de tarjeta de producto		

			this.append(product)
  	}
});