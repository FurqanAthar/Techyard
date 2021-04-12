import React from 'react'

const cartContext = React.createContext();

function getLocalStorage(){
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}

function CartProvider ({children}) {
    const [cart, setCart] = React.useState(getLocalStorage());
    const [total, setTotal] = React.useState(0);
    const [cartItems, setCartItems] = React.useState(0);
    
    //updating total and count whenever cart content changes
    React.useEffect(()=>{
        // local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        //updating
        let cartCount = cart.reduce((total, current)=>{
            return total += current.amount;
        },0);
        setCartItems(cartCount);
        let totalAmount = cart.reduce((total, current)=>{
            return total += (current.amount * current.price);
        },0);
        setTotal(parseFloat(totalAmount).toFixed(2));
    }, [cart]);

    //helper functions
    const removeItem = (id, color, which) => {
        let newCart = []
        console.log(cart)
        cart.forEach(item => {
            if (item.which == which) {
                if (item.id !== id) {
                    newCart.push(item)
                }
                else if (item.id === id && item.which == `mobile`) {
                    if (item.color !== color) {
                        newCart.push(item)
                    }
                }
            }
            else {
                newCart.push(item)
            }
        })
        setCart([...newCart])
    };
    const increaseAmount = (id, color, which) => {
        if (which == `mobile`) {
            setCart([...cart].map(item => {
                return (item.id === id && item.which === which && item.color === color) ? {...item, amount: item.amount + 1} : {...item};
            }));
        }
        else if (which == `headphone`) {
            setCart([...cart].map(item => {
                return (item.id === id && item.which === which) ? {...item, amount: item.amount + 1} : {...item};
            }));
        }
    };
    const decreaseAmount = (id, color, which) => {
        let newCart = []
        if (which == `mobile`) {
            cart.forEach(item => {
                if (item.id === id && item.which === which && item.color === color) {
                    if (item.amount - 1 > 0) {
                        newCart.push({...item, amount: item.amount - 1})
                    }
                }
                else {
                    newCart.push({...item})
                }
            })
        }
        else if (which == `headphone`) {
            cart.forEach(item => {
                if (item.id === id && item.which === which) {
                    if (item.amount - 1 > 0) {
                        newCart.push({...item, amount: item.amount - 1})
                    }
                }
                else {
                    newCart.push({...item})
                }
            })
        }
        setCart([...newCart])
    };
    const addToCart = product => {
        let alreadyPresent = [];
        const { which } = product
        if (which == `mobile`) {
            const {id, model, price, image, color, which} = product;
            alreadyPresent = [...cart].find(item => item.id === id && item.which === which && item.color === color);
            if(alreadyPresent){
                increaseAmount(id, color, which);
                return;
            }
            else{
                const newProductToCart = {id, model, price, image, color, which, amount:1};
                const newCart = [...cart, newProductToCart];
                setCart(newCart);
                return;
            }
        }
        else if (which == `headphone`) {
            const {id, model, price, image} = product
            alreadyPresent = [...cart].find(item => item.id === id && item.which === which)
            if (alreadyPresent) {
                increaseAmount(id, '', which)
                return
            }
            else {
                const newProductToCart = {id, model, price, image, which, amount:1};
                const newCart = [...cart, newProductToCart];
                setCart(newCart);
                return;
            }
        }
    };
    const emptyCart = () => {
        setCart([]);
    }

    return <cartContext.Provider value={{cart, total, cartItems, removeItem, increaseAmount, decreaseAmount, emptyCart, addToCart}}>
            {children}
        </cartContext.Provider>;
}

export {cartContext, CartProvider};