const RandomChoice = ({ items }) => {
    const idx = Math.floor(Math.random() * items.length);
    const choice = items[idx];
    return <h4>Random Choice is: {choice}</h4>
}

const RemoveChoice = (item, items) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { RandomChoice, RemoveChoice };