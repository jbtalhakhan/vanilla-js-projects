window.addEventListener('load', ()=>{
    const inputs = document.querySelectorAll('.controls input');
    console.log('helo');

    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    };

    inputs.forEach(input=> input.addEventListener('change', handleUpdate));
    inputs.forEach(input=> input.addEventListener('mousemove', handleUpdate));

})
