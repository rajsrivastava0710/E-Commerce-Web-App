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

export const subtractItemFromCart = (cartItem, itemToSubtract) => {
    const existingItem = cartItem.find(
        cartItem => cartItem.id === itemToSubtract.id
    );
    if(existingItem){
    if(existingItem.quantity>1){
    return cartItem.map(cartItem => 
        cartItem.id === existingItem.id
        ?
        {...cartItem , quantity:cartItem.quantity-1}:
        cartItem
    )
    }else{
        return cartItem.filter(cartItem =>{
            return cartItem.id !== existingItem.id
            }
        )
    }
    }else{
        return [...cartItem];
    }
}

export const removeItemfromCart = (cartItem, itemToRemove) => {
    return cartItem.filter(cartItem =>{
        return cartItem.id !== itemToRemove.id
        }
    )
}