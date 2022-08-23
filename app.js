const inputs = document.querySelectorAll('input');
const h2 = document.createElement('h2');


function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //to save it from giving undefined if there is no suffix (i.e. for base color)
    // console.log(`--${this.name} ${this.value}${suffix}`)  //try -> this.value, suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    h2.innerText = `${this.name}: ${this.value}${suffix}`;
    document.body.append(h2);   
}

inputs.forEach(input => input.addEventListener('click', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
