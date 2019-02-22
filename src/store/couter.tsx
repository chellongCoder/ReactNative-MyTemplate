import { observable, action, useStrict, configure } from 'mobx'
import remotedev from 'mobx-remotedev'
configure({
    enforceActions: 'observed'
});

@remotedev({
    name: 'CounterStore'
    // Options: https://github.com/zalmoxisus/mobx-remotedev#api
})
export default class CounterStore {
    @observable counter = 0

    @action increment() {
        this.counter++
    }

    @action decrement() {
        this.counter--
    }

    incrementIfOdd() {
        if (this.counter % 2 === 0) {
            return
        }
        this.increment()
    }

    incrementAsync(delay = 1000) {
        setTimeout(() => {
            this.increment();
        }, delay)
    }
}