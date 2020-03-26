
// Lazy Loading Routes
// Combining Vue's async component feature 
// and webpack's code splitting feature.

// This is how to define an async component 
// that will be automatically code-split by webpack.
const Foo = () => import('./Foo.vue') 

// We can group components in the same chunk using a special comment syntax
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')


