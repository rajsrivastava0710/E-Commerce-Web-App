export const addItemToCart = (cartItem, itemToAdd) => {
    const existingItem = cartItem.find(
        cartItem => cartItem.id === itemToAdd.id
    );
    if(existingItem){
        return cartItem.map(cartItem => 
            cartItem.id === itemToAdd.id
            ?
            {...cartItem , quantity:cartItem.quantity+1}:
            cartItem
        )
    }

    return [...cartItem,{...itemToAdd, quantity:1}]
}