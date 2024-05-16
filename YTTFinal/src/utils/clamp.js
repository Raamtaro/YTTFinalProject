const clamp = (number, min, max) => {
    return Math.max(min, Math.min(number, max))
}

export default clamp