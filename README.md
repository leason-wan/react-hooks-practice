# Introduction

函数式组件中不能够有副作用，导致函数式组件早期缺少类组件的生命周期与状态。
hooks使函数式组件拥有了处理副作用的能力，让函数式组件和类组件可以达到相同的能力。
使用起来，hooks优雅一点，可抽象能力更强，但心智负担较高。

本仓库是react hooks在实践中的几种方式

- unstated-next
- useReducer

# Question

基于useState来管理全局的状态，单个属性更新会影响全局，可能会造成性能瓶颈。
