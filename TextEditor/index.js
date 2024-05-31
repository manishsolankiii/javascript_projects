document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const outputField = document.getElementById('output-field');
  
    const uppercaseBtn = document.querySelector('.btn.uppercase');
    const lowercaseBtn = document.querySelector('.btn.lowercase');
    const capitalizeBtn = document.querySelector('.btn.capitalize');
    const boldBtn = document.querySelector('.btn.bold');
    const italicBtn = document.querySelector('.btn.italic');
    const underlineBtn = document.querySelector('.btn.underline');
  
    uppercaseBtn.addEventListener('click', () => {
      const text = inputField.value;
      outputField.textContent = text.toUpperCase();
      resetStyles();
    });
  
    lowercaseBtn.addEventListener('click', () => {
      const text = inputField.value;
      outputField.textContent = text.toLowerCase();
      resetStyles();
    });
  
     capitalizeBtn.addEventListener('click', () => {
    const text = inputField.value;
    outputField.textContent = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    resetStyles();
  });
  
    boldBtn.addEventListener('click', () => {
      outputField.style.fontWeight = 'bold';
    });
  
    italicBtn.addEventListener('click', () => {
      outputField.style.fontStyle = 'italic';
    });
  
    underlineBtn.addEventListener('click', () => {
      outputField.style.textDecoration = 'underline';
    });
  
    function resetStyles() {
      outputField.style.fontWeight = 'normal';
      outputField.style.fontStyle = 'normal';
      outputField.style.textDecoration = 'none';
    }
  });
  