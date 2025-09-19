const inputGroups = document.querySelectorAll('.input-group');

inputGroups.forEach(group => {
  const input = group.querySelector('input, textarea');
  const icon = group.querySelector('.valid-icon');

  input.addEventListener('input', () => {
    validateField(input, icon);
  });
});

function validateField(field, icon) {
  let isValid = false;

  if(field.type === "email") {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = re.test(field.value);
  } else if(field.type === "tel") {
    const re = /^[0-9]+$/;
    isValid = re.test(field.value) && field.value.length >= 7;
  } else {
    isValid = field.value.trim() !== "";
  }

  field.classList.remove('valid','invalid');
  icon.textContent = '';

  if(isValid){
    field.classList.add('valid');
    icon.textContent = '✔';
  } else if(field.value !== ''){
    field.classList.add('invalid');
    icon.textContent = '✖';
  }
}
