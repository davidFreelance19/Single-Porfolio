const skills = [
    {
        name: 'Graphic Design',
        image: "../../src/assets/pattern-graphic-design.svg",
        text: 'graphic',
        background: 'hsl(252, 66%, 62%)',
    },
    {
        name: 'UI/UX',
        image: '../../src/assets/pattern-ui-ux.svg',
        text: 'uiux',
        background: 'hsl(28, 89%, 67%)',
    },
    {
        name: 'Apps',
        image: '../../src/assets/pattern-apps.svg',
        text: 'apps',
        background: 'hsl(0, 78%, 79%)',
    },
    {
        name: 'Illustrations',
        image: '../../src/assets/pattern-illustrations.svg',
        text: 'illustrations',
        background: 'hsl(7, 77%, 66%)',
    },
    {
        name: 'Photography',
        image: '../../src/assets/pattern-photography.svg',
        text: 'photography',
        background: 'hsl(172, 46%, 57%)',
    },
    {
        name: 'Motion Graphics',
        image: '../../src/assets/pattern-motion-graphics.svg',
        text: 'motion',
        background: 'hsl(314, 45%, 23%)',
    },
];
document.addEventListener('DOMContentLoaded', ()=>{
    generarSkill();
})
function generarSkill(){
    const containerSkill = document.querySelector('.hero__skills')
    skills.forEach(resultado =>{
        const {name, image, text, background} = resultado;
        const cardSkill = document.createElement('div');
        cardSkill.classList.add('hero__skill')
        cardSkill.innerHTML = `
            <div class="skill__helper">
                <img src="${image}" alt="image-skill">
                <p class="skill__name">${name}</p>
            </div>
        `
        cardSkill.classList.add(`hero__skill--${text}`)
        containerSkill.appendChild(cardSkill)
        cardSkill.style = `background-color: ${background};
                            grid-area: ${text};`
    })
}