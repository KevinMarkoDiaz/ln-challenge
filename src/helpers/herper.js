export const selectRender = () => {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    switch (randomNumber) {
        case 1:
            return 'author'
            break;
        case 2:
            return 'regular'
            break;
        case 3:
            return 'cinema'
            break;

        default:
            break;
    }
};