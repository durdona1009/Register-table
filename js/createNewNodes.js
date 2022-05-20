
export default function ({ firstname, lastname, group, gender }, counter){
    let templateNew = document.querySelector('.template');
    let newTemplate = templateNew.content.cloneNode(true);

    newTemplate.querySelector('.number').textContent = counter;
    newTemplate.querySelector('.firstname').textContent = firstname;
    newTemplate.querySelector('.lastname').textContent = lastname;
    newTemplate.querySelector('.group').textContent = group;
    newTemplate.querySelector('.gender').textContent = gender;

    return newTemplate;
}