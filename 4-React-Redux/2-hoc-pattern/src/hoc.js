

import React from 'react'

import store from './store'

export function connect(InputComponent, callback) {

    class Container extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                data: callback(store.getState())
            }
        }

        componentDidMount() {
            //..
            store.subscribe(() => { })
        }
        componentWillUnmount() {
            //..
            store.unsubscribe();
        }
        handleLogic() {
            //
        }

        render() {
            let { data } = this.state;
            return (
                <div>
                    <InputComponent data={data} />
                </div>
            )
        }
    }

    Container.displayName = `connect(${InputComponent.name})`// for debugging

    return Container;
}