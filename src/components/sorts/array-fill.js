
const generateArray = (length, max) => {
    const array = [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
    return array
}

export default generateArray