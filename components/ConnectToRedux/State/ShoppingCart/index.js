import { setShoppingCart } from 'Redux/Actions/main'

const mapStateToProps = state => ({
    ShoppingCart: state.main.shoppingCart
})

export default {
    mapStateToProps,
    mapDispatchToProps: {
        setShoppingCart
    }
}