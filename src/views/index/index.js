/**
 * @file index.js
 * @description index component
 */

import React, {Component} from 'react';
import {observer}from 'mobx-react';
import './index.less';
import {StoreContext} from 'Src/store';

@observer
class Index extends Component {
    static contextType = StoreContext;
    render() {
        const {count, plusCount} = this.context.mainStore;
        return (
            <div className="index">
                this is index page,
                and a mobx userInfo state {count}
                <button onClick={plusCount}>click</button> to plus 1;
            </div>
        );
    }
}

export default Index;
