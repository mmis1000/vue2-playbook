export const SubTree = {
  name: "sub-tree",
  functional: true,
  render: function (createElement, context) {
    const { template, data } = context.props
    return template(data)
  }
}

export const TreeRoot = {
  name: "tree-root",
  functional: true,
  components: {
    async TreeRoot() { return TreeRoot }
  },
  render: function (createElement, context) {
    const data = context.props.data
    const depth = context.props.depth || 0;
    const fn = context.scopedSlots.default

    const vnodes = [
      fn({
        data,
        depth,
        template: (data) => createElement(
          "tree-root",
          {
            attrs: { data, depth: depth + 1 },
            scopedSlots: context.scopedSlots
          },
          []
        )
      })
    ]

    return vnodes
  }
}
