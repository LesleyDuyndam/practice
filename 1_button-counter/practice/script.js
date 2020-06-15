

const colorGenerator = (min,max) => {
    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

document.getElementById('button').addEventListener('click', () => {
    const color = colorGenerator(0, 255);
    document.body.style.backgroundColor =color;
});

document.getElementById('title-button').addEventListener('mouseenter', () => {
    const color = colorChoosing();
    document.body.style.backgroundColor =color;
});

const colorChoosing = () => {
    const twocolor = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(twocolor)
    if(twocolor == 1){
        return 'green'
    }
    
    if(twocolor == 2){
        return 'red'
    }

}
