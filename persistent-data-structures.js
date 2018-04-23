class StackNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class PersistentStack {
    constructor(node = null) {
        this.node = node;
    }

    push(value) {
        return new PersistentStack(new StackNode(value, this.node ? this.node : null));
    }

    forEach(fn) {
        let node = this.node;
        while(node) {
            fn(node.value);
            node = node.next;
        }
    }
}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this[0] = left;
        this[1] = right;
    }

    clone() {
        return new Node(this.value, this[0], this[1]);
    }
}

class PersistentTree {
    constructor(root = new Node()) {
        this.root = root;
    }

    get(key) {
        const node = this.getNode(key);
        return node && node.value;
    }

    getNode(key) {
        const keyCode = this.getKeyCode(key);
        let node = this.root;
        keyCode.forEach(key => {
            if (node) {
                node = node[key];
            }
        });
        return node;
    }

    setNode(key, value) {
        const keyCode = this.getKeyCode(key);
        const newRoot = this.root.clone();

        let node = newRoot;
        keyCode.forEach(key => {
            if (node[key]) {
                node[key] = node[key].clone();
            } else {
                node[key] = new Node();
            }
            node = node[key];
        });
        node.value = value;

        return newRoot;
    }

    getKeyCode(key) {
        const hashCode = this.isNumeric(key) ? +key : this.getHashCode(key.toString());
        return hashCode.toString(2).split('').reverse();
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    getHashCode(str) {
        const len = str.length;
        return str
            .split('')
            .reduce((sum, char, i) => sum + char.charCodeAt(0) * 31 * (len - i - 1), 0);
    }
}

class PersistentArray extends PersistentTree {
    constructor(root, length = 0) {
        super(root);
        this.length = length;
    }

    push(value) {
        return this.set(this.length, value);
    }

    set(index, value) {
        return new PersistentArray(
            this.setNode(index, value),
            this.get(index) ? this.length : this.length + 1
        );
    }

    toNative() {
        return this.reduce((array, value) => {
            array.push(value);
            return array;
        }, []);
    }

    includes(value) {
        let includes = false;
        this.forEach((_value, i, breakLoop) => {
            if (value === _value) {
                includes = true;
                breakLoop();
            }
        });
        return includes;
    }

    map(fn) {
        return this.reduce((newArray, value) => {
            return newArray.push(fn(value));
        }, new PersistentArray());
    }

    filter(fn) {
        return this.reduce((newArray, value) => {
            if (fn(value)) {
                return newArray.push(value);
            }
            return newArray;
        }, new PersistentArray());
    }

    reduce(fn, initialValue) {
        this.forEach(value => {
            initialValue = fn(initialValue, value);
        });
        return initialValue;
    }

    forEach(fn) {
        let node = this.root;
        let shouldBreak = false;
        const breakLoop = () => shouldBreak = true;

        for (let i = 0; i < this.length; i++) {
            if (shouldBreak) break;

            const value = this.get(i);
            fn(value, i, breakLoop);
        }
    }
}

class PersistentObject extends PersistentTree {
    constructor(root, keys = new PersistentArray()) {
        super(root);
        this.keys = keys;
    }

    set(key, value) {
        return new PersistentObject(
            this.setNode(key, value),
            this.keys.includes(key) ? this.keys : this.keys.push(key)
        );
    }

    remove(key) {
        if (this.keys.includes(key)) {
            return new PersistentObject(
                this.setNode(key, undefined),
                this.keys.filter(_key => _key !== key)
            );
        }
    }

    toNative() {
        return this.keys.reduce((obj, key) => {
            const value = this.get(key);
            obj[key] = value;
            return obj;
        }, {});
    }

    getKeys() {
        return this.keys;
    }
}
