import { connect } from 'react-redux'
import {
    ShoppingCart
} from './State'

const Type = {
    ShoppingCart
}

const ConnectToRedux = (Component, Mode) => {
    if (typeof Mode === 'string') {
        return connect(
            Type[Mode]?.mapStateToProps,
            Type[Mode]?.mapDispatchToProps,
        )(Component)
    } else if (typeof Mode === 'object') {
        let stateProps = []
        let mapDispatchToProps = {}

        for (let index = 0; index < Mode.length; index++) {
            const conn = Mode[index]

            stateProps = [...stateProps, Type[conn].mapStateToProps]
            mapDispatchToProps = {
                ...mapDispatchToProps,
                ...Type[conn].mapDispatchToProps,
            }
        }

        const mapStateToProps = (state) => {
            let stateToProps = {}

            for (let index = 0; index < stateProps.length; index++) {
                const element = stateProps[index]

                stateToProps = { ...stateToProps, ...element(state) }
            }

            return stateToProps
        }

        return connect(mapStateToProps, mapDispatchToProps)(Component)
    } else {
        return Component
    }
}

export default ConnectToRedux
