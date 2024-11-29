const quantityInput = document.getElementById('quantity');
const serviceTypeRadios = document.querySelectorAll('input[name="serviceType"]');
const optionsContainer = document.getElementById('optionsContainer');
const optionsSelect = document.getElementById('options');
const propertiesContainer = document.getElementById('propertiesContainer');
const propertyCheckbox = document.getElementById('property');
const totalPriceDisplay = document.getElementById('totalPrice');
let prices = {    type1: 50, 
    type2: 100,     type3: 130  
};
function updatePrice() {    
    let totalPrice = 0;
    const quantity = parseInt(quantityInput.value);    
    const selectedType = document.querySelector('input[name="serviceType"]:checked').value;
    totalPrice = prices[selectedType] * quantity;
    if (selectedType === 'type2' && optionsSelect.value === 'option1') {
        totalPrice += 0;     
    }
    if (selectedType === 'type2' && optionsSelect.value === 'option2') {
        totalPrice += 50;     
    }
    if (selectedType === 'type2' && optionsSelect.value === 'option3') {
        totalPrice += 50;     
    }
    if (selectedType === 'type3' && propertyCheckbox.checked) {
        totalPrice += 50;     
    }
    totalPriceDisplay.textContent = totalPrice;
}
function updateForm() {    
    const selectedType = document.querySelector('input[name="serviceType"]:checked').value;
    optionsContainer.classList.add('hidden');
    propertiesContainer.classList.add('hidden');
    if (selectedType === 'type2') {        
        optionsContainer.classList.remove('hidden');
    } 
    else if (selectedType === 'type3') {        
        propertiesContainer.classList.remove('hidden');
    }
    updatePrice(); 
}
quantityInput.addEventListener('input', updatePrice);
serviceTypeRadios.forEach(radio => {    
    radio.addEventListener('change', updateForm);
});
optionsSelect.addEventListener('change', updatePrice);
propertyCheckbox.addEventListener('change', updatePrice);
updateForm();
