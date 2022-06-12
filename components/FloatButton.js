import MaterialIcons from 'assets/Icons/MaterialIcons'
import React, { useState } from 'react'
import ConnectToRedux from './ConnectToRedux';
import Drawer from './Drawer'

const FloatButton = ({ShoppingCart}) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChangeStateDrawer = () => setOpenDrawer(!openDrawer);

    const shoppingCartArr = Object.values(ShoppingCart);

    const total = shoppingCartArr.reduce((previus, current) => previus + (current.price * current.quantity) , 0);

    return (
        <div className="fixed bottom-2/4 right-0 z-50">
            {
                !openDrawer && (
                    <div
                        className=" rounded-l-lg bg-black text-white p-3 cursor-pointer"
                        onClick={handleChangeStateDrawer}
                    >
                        <div className="flex gap-x-2 items-center">
                            {MaterialIcons.Shop}
                            <p>{shoppingCartArr.length} Item</p>
                        </div>
                        <div className="w-full bg-white text-black rounded mt-2 p-2 text-center">
                            <h2>$ {total}</h2>
                        </div>
                    </div>
                )
            }
            <Drawer
                open={openDrawer}
                onClose={handleChangeStateDrawer}
            >
                
            </Drawer>
        </div>
    )
}

export default ConnectToRedux(FloatButton, 'ShoppingCart')