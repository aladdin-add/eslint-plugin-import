exports.__esModule = true

exports.default = function visit(node, keys, visitorSpec) {
  if (!node || !keys) {
    return
  }
    const type = node.type
    if (typeof visitorSpec[type] === 'function') {
      visitorSpec[type](node)
    }
    const childFields = keys[type]
    if (!childFields) {
      return
    }
    for (const fieldName of childFields) {
      const field = node[fieldName]
      if (Array.isArray(field)) {
        for (const item of field) {
          visit(item, keys, visitorSpec)
        }
      } else {
        visit(field, keys, visitorSpec)
      }
    }
    if (typeof visitorSpec[`${type}:Exit`] === 'function') {
      visitorSpec[`${type}:Exit`](node)
    }
}
