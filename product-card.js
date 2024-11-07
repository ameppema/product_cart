customElements.define('product-card',
  class extends HTMLElement {
    constructor() {
      super();

			console.log(this.attributes.name.value)
			const categoryValue = this.attributes.category.value

      // const template = document.getElementById('element-details-template').content;

      // const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
			const document2 = this.attachShadow({mode: 'open'})
			
			// Inicio de tarjeta de producto
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

      const productText = document.createElement('div');
      productText.classList.add('product-body', 'flex', 'flex-col', 'mt-12', 'text-2xl');
			
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

			productText.append(category, name, price);

      product.append(productText);
			// Fin de tarjeta de producto

			console.log(document2)
			console.log(this.attributes.id.value)
  	}
});