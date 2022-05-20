import newNode from './createNewNodes.js'

export default function(location,  info){
    let fragmentNew = document.createDocumentFragment();

    info.forEach((user, index) =>{
        let newUser = newNode(user, index + 1);
        fragmentNew.append(newUser);
    })

    location.innerHTML = '';
    location.append(fragmentNew);
}
