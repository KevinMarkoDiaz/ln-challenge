export const selectRender = () => {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    switch (randomNumber) {
        case 1:
            return 'author'         
        case 2:
            return 'regular'         
        case 3:
            return 'cinema'         
        default:
            break;
    }
};