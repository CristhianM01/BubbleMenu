const Boton = document.querySelectorAll('.Btn');

let Up = 0;

Boton.forEach(element => {
    element.addEventListener('click', (e) => {
        const CajaPadre = element.parentElement.parentElement.firstChild.nextElementSibling;
        document.querySelector('div.Circle3').style.display = 'none';
        document.querySelector('.Btn3').style.transform = 'translateY(0)';
        document.querySelector('.Btn3').style.color = 'rgb(28, 29, 28)';
        if (Up == 1) {
            Boton.forEach(element2 => {
                element2.style.transform = 'translateY(0)';
                element2.style.color = 'rgb(28, 29, 28)';
                const Caja0 = element2.parentElement.parentElement.firstChild.nextElementSibling;
                Caja0.style.display = 'none';


            });
            Up = 0;
        }

        if (e.target.classList.contains('Btn3')) {
            document.querySelector('.Btn3').style.transform = 'translateY(-38px)';
            document.querySelector('.Btn3').style.color = 'rgb(223, 223, 223)';
        }

        element.style.transform = 'translateY(-38px)';
        element.style.transition = 'all .5s ease 0s';
        element.style.color = 'rgb(223, 223, 223)';
        CajaPadre.style.display = 'flex';

        Up++;
    });

});